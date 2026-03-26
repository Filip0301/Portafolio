'use client';

import { useState, useEffect } from 'react';
import { Certification, getAllCertifications } from '../services/firebase';

interface UseCertificationsResult {
  certifications: Certification[];
  loading: boolean;
  error: Error | null;
}

export function useCertifications(): UseCertificationsResult {
  const [certifications, setCertifications] = useState<Certification[]>([]);
  const [loading, setLoading]               = useState(true);
  const [error, setError]                   = useState<Error | null>(null);

  useEffect(() => {
    let cancelled = false;

    const load = async () => {
      try {
        const loaded = await getAllCertifications();
        const sorted = [...loaded].sort(
          (a, b) => new Date(b.issue_date).getTime() - new Date(a.issue_date).getTime()
        );
        if (!cancelled) setCertifications(sorted);
      } catch (err) {
        if (!cancelled) setError(err instanceof Error ? err : new Error('Error cargando certificaciones'));
      } finally {
        if (!cancelled) setLoading(false);
      }
    };

    load();
    return () => { cancelled = true; };
  }, []);

  return { certifications, loading, error };
}
