import type { Commerce } from '../types/commerce';
import { MOCK_COMMERCES } from '../data/mockCommerces';

/**
 * Point d'accès unique aux données des commerces.
 * Pour brancher une vraie base de données, il suffira de remplacer
 * le corps de cette fonction par un appel API, par exemple :
 *   const res = await fetch('/api/commerces');
 *   return res.json();
 */
export async function fetchCommerces(): Promise<Commerce[]> {
  return MOCK_COMMERCES;
}
