import type { Category, CategoryId } from '../types/commerce';

export const CATEGORIES: Category[] = [
  { id: 'alimentation', label: 'Alimentation', color: '#6b8f47', icon: '🥖' },
  { id: 'mode', label: 'Mode', color: '#b5532f', icon: '👗' },
  { id: 'artisanat', label: 'Artisanat', color: '#8a5a3b', icon: '🏺' },
  { id: 'restauration', label: 'Restauration', color: '#c27d1f', icon: '🍽️' },
  { id: 'culture', label: 'Culture & librairies', color: '#4f6d7a', icon: '📚' },
  { id: 'bien-etre', label: 'Bien-être', color: '#8e5f84', icon: '🌿' },
];

const CATEGORY_BY_ID = new Map(CATEGORIES.map((c) => [c.id, c]));

export function getCategory(id: CategoryId): Category {
  const category = CATEGORY_BY_ID.get(id);
  if (!category) throw new Error(`Catégorie inconnue : ${id}`);
  return category;
}
