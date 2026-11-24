import { useMemo, useState } from 'react';
import type { CategoryId, Commerce } from '../types/commerce';

/** Normalise une chaîne pour une recherche insensible à la casse et aux accents. */
function normalize(text: string): string {
  return text.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();
}

/** Gère la recherche texte et les filtres par catégorie. */
export function useCommerceFilters(commerces: Commerce[]) {
  const [query, setQuery] = useState('');
  // Ensemble vide = aucune catégorie sélectionnée = tout afficher.
  const [selectedCategories, setSelectedCategories] = useState<Set<CategoryId>>(new Set());

  const toggleCategory = (id: CategoryId) => {
    setSelectedCategories((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const clearCategories = () => setSelectedCategories(new Set());

  const filteredCommerces = useMemo(() => {
    const q = normalize(query.trim());
    return commerces.filter((commerce) => {
      const matchesCategory =
        selectedCategories.size === 0 || selectedCategories.has(commerce.category);
      const matchesQuery =
        q === '' ||
        normalize(commerce.name).includes(q) ||
        normalize(commerce.address).includes(q);
      return matchesCategory && matchesQuery;
    });
  }, [commerces, query, selectedCategories]);

  return {
    query,
    setQuery,
    selectedCategories,
    toggleCategory,
    clearCategories,
    filteredCommerces,
  };
}
