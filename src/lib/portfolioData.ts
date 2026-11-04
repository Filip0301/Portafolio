import { cache } from 'react';
import type { Certification, PersonalInfo, Project, Skill, SocialMedia } from '../types/portfolio';

/**
 * Lectura del contenido público del portafolio desde el servidor.
 *
 * Se usa la API REST de Firestore (lectura pública según firestore.rules) en
 * vez del SDK de Firebase. Así el HTML llega con el contenido ya renderizado
 * (SEO y vistas previas al compartir el enlace), la página se puede cachear y
 * el sitio público no descarga el SDK de Firebase.
 *
 * No se envía la API key a propósito: si la restringes por HTTP referrer, las
 * peticiones desde el servidor (sin referrer) fallarían.
 */

/** Segundos que se cachea el contenido. Lo que guardes en /admin aparece en el sitio a más tardar en este tiempo. */
const REVALIDATE_SECONDS = 300;

const PROJECT_ID = process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID;
const BASE_URL = PROJECT_ID
  ? `https://firestore.googleapis.com/v1/projects/${PROJECT_ID}/databases/(default)/documents`
  : null;

export const DEFAULT_INFO: PersonalInfo = {
  name: 'Felipe Ismael Torres Ponce de León',
  title: 'Data Analyst & Full Stack Developer',
  description: 'Ingeniero en Informática especializado en análisis de datos y desarrollo web full stack.',
  email: 'torresfelipe305@gmail.com',
  phone: '',
  location: 'Chile',
};

type FirestoreValue = {
  stringValue?: string;
  integerValue?: string;
  doubleValue?: number;
  booleanValue?: boolean;
  nullValue?: null;
  timestampValue?: string;
  arrayValue?: { values?: FirestoreValue[] };
  mapValue?: { fields?: Record<string, FirestoreValue> };
};

type FirestoreDocument = { name: string; fields?: Record<string, FirestoreValue> };

function decodeValue(value: FirestoreValue): unknown {
  if ('stringValue' in value) return value.stringValue;
  if ('integerValue' in value) return Number(value.integerValue);
  if ('doubleValue' in value) return value.doubleValue;
  if ('booleanValue' in value) return value.booleanValue;
  if ('timestampValue' in value) return value.timestampValue;
  if ('arrayValue' in value) return (value.arrayValue?.values ?? []).map(decodeValue);
  if ('mapValue' in value) return decodeFields(value.mapValue?.fields);
  return null;
}

function decodeFields(fields: Record<string, FirestoreValue> | undefined): Record<string, unknown> {
  const result: Record<string, unknown> = {};
  for (const [key, value] of Object.entries(fields ?? {})) result[key] = decodeValue(value);
  return result;
}

function decodeDocument<T>(doc: FirestoreDocument): T {
  const id = doc.name.split('/').pop();
  return { ...decodeFields(doc.fields), id } as T;
}

async function firestoreGet(path: string): Promise<Response> {
  if (!BASE_URL) throw new Error('Falta NEXT_PUBLIC_FIREBASE_PROJECT_ID');
  return fetch(`${BASE_URL}/${path}`, { next: { revalidate: REVALIDATE_SECONDS } });
}

async function fetchCollection<T>(collection: string): Promise<T[]> {
  const items: T[] = [];
  let pageToken = '';
  do {
    const query = `pageSize=300${pageToken ? `&pageToken=${encodeURIComponent(pageToken)}` : ''}`;
    const res = await firestoreGet(`${collection}?${query}`);
    if (!res.ok) throw new Error(`Firestore ${collection}: HTTP ${res.status}`);
    const body = (await res.json()) as { documents?: FirestoreDocument[]; nextPageToken?: string };
    items.push(...(body.documents ?? []).map((doc) => decodeDocument<T>(doc)));
    pageToken = body.nextPageToken ?? '';
  } while (pageToken);
  return items;
}

async function fetchDocument<T>(path: string): Promise<T | null> {
  const res = await firestoreGet(path);
  if (res.status === 404) return null;
  if (!res.ok) throw new Error(`Firestore ${path}: HTTP ${res.status}`);
  return decodeDocument<T>((await res.json()) as FirestoreDocument);
}

/** Usa el valor guardado si tiene texto; si no, el de respaldo. */
function withFallback(info: Partial<PersonalInfo> | null): PersonalInfo {
  const merged = { ...DEFAULT_INFO };
  for (const key of Object.keys(DEFAULT_INFO) as Array<keyof PersonalInfo>) {
    const value = info?.[key];
    if (typeof value === 'string' && value.trim()) merged[key] = value;
  }
  // El teléfono es opcional: si se borró a propósito, no se rellena.
  if (info) merged.phone = typeof info.phone === 'string' ? info.phone : '';
  return merged;
}

export interface PortfolioData {
  info: PersonalInfo;
  socialMedia: SocialMedia[];
  skills: Skill[];
  certifications: Certification[];
  projects: Project[];
  errors: { skills: boolean; certifications: boolean };
}

async function settle<T>(promise: Promise<T>, fallback: T, label: string): Promise<[T, boolean]> {
  try {
    return [await promise, false];
  } catch (error) {
    console.error(`Error cargando ${label}:`, error);
    return [fallback, true];
  }
}

/** Una sola lectura por render: la comparten la página y el footer. */
export const getPortfolioData = cache(async (): Promise<PortfolioData> => {
  const [[info], [socialMedia], [skills, skillsError], [certifications, certsError], [projects]] =
    await Promise.all([
      settle(fetchDocument<PersonalInfo>('personal_info/main'), null, 'información personal'),
      settle(fetchCollection<SocialMedia>('social_media'), [], 'redes sociales'),
      settle(fetchCollection<Skill>('skills'), [], 'habilidades'),
      settle(fetchCollection<Certification>('certifications'), [], 'certificaciones'),
      settle(fetchCollection<Project>('projects'), [], 'proyectos'),
    ]);

  return {
    info: withFallback(info),
    socialMedia: socialMedia.filter((s) => s.isActive && s.url),
    skills: skills.map((s) => ({ ...s, years_experience: Number(s.years_experience) || 0 })),
    // Fechas en formato AAAA-MM-DD: el orden de texto coincide con el cronológico.
    certifications: [...certifications].sort((a, b) => (b.issue_date ?? '').localeCompare(a.issue_date ?? '')),
    projects,
    errors: { skills: skillsError, certifications: certsError },
  };
});
