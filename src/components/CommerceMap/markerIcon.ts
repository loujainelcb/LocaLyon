import L from 'leaflet';
import type { Category } from '../../types/commerce';

const iconCache = new Map<string, L.DivIcon>();

/**
 * Crée (et met en cache) une icône de marqueur colorée selon la catégorie.
 * L'utilisation de divIcon évite les problèmes d'images par défaut de Leaflet avec Vite.
 */
export function getMarkerIcon(category: Category): L.DivIcon {
  const cached = iconCache.get(category.id);
  if (cached) return cached;

  const icon = L.divIcon({
    className: 'commerce-marker',
    html: `<span class="commerce-marker__pin" style="--marker-color:${category.color}">
             <span class="commerce-marker__icon">${category.icon}</span>
           </span>`,
    iconSize: [36, 36],
    iconAnchor: [18, 36],
    popupAnchor: [0, -34],
  });

  iconCache.set(category.id, icon);
  return icon;
}
