'use client';

import { useState, useEffect } from 'react';
import { PersonalInfo, SocialMedia, getPersonalInfo, getAllSocialMedia } from '../services/firebase';

// Respaldo si Firestore no responde. Sin teléfono: es mejor no mostrar
// ninguno que mostrar uno inventado.
const DEFAULT_INFO: PersonalInfo = {
  name: 'Felipe Ismael Torres Ponce de León',
  title: 'Data Analyst & Full Stack Developer',
  description: 'Ingeniero en Informática especializado en análisis de datos y desarrollo web full stack.',
  email: 'torresfelipe305@gmail.com',
  phone: '',
  location: 'Chile',
};

interface UsePersonalInfoResult {
  data: PersonalInfo | null;
  socialMedia: SocialMedia[];
  loading: boolean;
  error: Error | null;
}

type PersonalInfoPayload = [PersonalInfo | null, SocialMedia[]];

// Hero, Sobre mí, Contacto y el footer usan este hook. Compartimos una sola
// petición por carga de página en vez de repetir las mismas consultas.
let pendingRequest: Promise<PersonalInfoPayload> | null = null;

function loadPersonalInfo(): Promise<PersonalInfoPayload> {
  if (!pendingRequest) {
    pendingRequest = Promise.all([getPersonalInfo(), getAllSocialMedia()]).catch((err) => {
      pendingRequest = null; // permitir reintentar en el próximo montaje
      throw err;
    });
  }
  return pendingRequest;
}

export function usePersonalInfo(): UsePersonalInfoResult {
  const [data, setData]             = useState<PersonalInfo | null>(null);
  const [socialMedia, setSocialMedia] = useState<SocialMedia[]>([]);
  const [loading, setLoading]       = useState(true);
  const [error, setError]           = useState<Error | null>(null);

  useEffect(() => {
    let cancelled = false;

    const load = async () => {
      try {
        const [info, social] = await loadPersonalInfo();
        if (!cancelled) {
          setData(info ?? DEFAULT_INFO);
          setSocialMedia(social);
        }
      } catch (err) {
        if (!cancelled) {
          setError(err instanceof Error ? err : new Error('Error cargando datos'));
          setData(DEFAULT_INFO);
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    };

    load();
    return () => { cancelled = true; };
  }, []);

  return { data, socialMedia, loading, error };
}
