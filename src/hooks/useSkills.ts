'use client';

import { useState, useEffect, useMemo } from 'react';
import { Skill, getAllSkills } from '../services/firebase';

interface UseSkillsResult {
  skills: Skill[];
  categories: string[];
  loading: boolean;
  error: Error | null;
}

export function useSkills(): UseSkillsResult {
  const [skills, setSkills]   = useState<Skill[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError]     = useState<Error | null>(null);

  useEffect(() => {
    let cancelled = false;

    const load = async () => {
      try {
        const loaded = await getAllSkills();
        if (!cancelled) setSkills(loaded);
      } catch (err) {
        if (!cancelled) setError(err instanceof Error ? err : new Error('Error cargando skills'));
      } finally {
        if (!cancelled) setLoading(false);
      }
    };

    load();
    return () => { cancelled = true; };
  }, []);

  const categories = useMemo(
    () => Array.from(new Set(skills.map(s => s.category))).sort(),
    [skills]
  );

  return { skills, categories, loading, error };
}
