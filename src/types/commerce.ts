/** Identifiants des catégories de commerce. Ajouter une catégorie ici puis dans constants/categories.ts. */
export type CategoryId =
  | 'alimentation'
  | 'mode'
  | 'artisanat'
  | 'restauration'
  | 'culture'
  | 'bien-etre';

export interface Category {
  id: CategoryId;
  label: string;
  /** Couleur du marqueur et de la pastille de filtre. */
  color: string;
  icon: string;
}

/** Un commerce tel qu'il sera renvoyé plus tard par l'API / la base de données. */
export interface Commerce {
  id: string;
  name: string;
  category: CategoryId;
  address: string;
  /** Latitude et longitude (WGS84). */
  position: { lat: number; lng: number };
  description?: string;
}
