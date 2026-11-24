import { useEffect, useState } from 'react';
import type { Commerce } from '../types/commerce';
import { fetchCommerces } from '../services/commerceService';

interface UseCommercesResult {
  commerces: Commerce[];
  loading: boolean;
  error: string | null;
}

/** Charge la liste des commerces depuis le service de données. */
export function useCommerces(): UseCommercesResult {
  const [commerces, setCommerces] = useState<Commerce[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    fetchCommerces()
      .then((data) => {
        if (!cancelled) setCommerces(data);
      })
      .catch(() => {
        if (!cancelled) setError('Impossible de charger les commerces.');
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  return { commerces, loading, error };
}
