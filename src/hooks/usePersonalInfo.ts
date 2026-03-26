'use client';

import { useState, useEffect } from 'react';
import { PersonalInfo, SocialMedia, getPersonalInfo, getAllSocialMedia } from '../services/firebase';

const DEFAULT_INFO: PersonalInfo = {
  name: 'Felipe Zúñiga',
  title: 'Data Analyst & Full Stack Developer',
  description: 'Ingeniero en Informática especializado en análisis de datos y desarrollo web full stack.',
  email: 'contacto@felipezuniga.dev',
  phone: '+56 9 1234 5678',
  location: 'Chile',
};

interface UsePersonalInfoResult {
  data: PersonalInfo | null;
  socialMedia: SocialMedia[];
  loading: boolean;
  error: Error | null;
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
        const [info, social] = await Promise.all([getPersonalInfo(), getAllSocialMedia()]);
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
