import { useState, useEffect } from 'react';
import { Project } from '../types/portfolio';
import { getAllProjects } from '../services/firebase';

export function useProjects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function fetchProjects() {
      try {
        const data = await getAllProjects();
        setProjects(data);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Error al cargar proyectos'));
      } finally {
        setLoading(false);
      }
    }

    fetchProjects();
  }, []);

  return { projects, loading, error };
}
