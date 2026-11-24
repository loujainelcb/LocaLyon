import type { LatLngTuple } from 'leaflet';

/** Centre de Lyon (Presqu'île, place Bellecour). */
export const LYON_CENTER: LatLngTuple = [45.7578, 4.832];
export const DEFAULT_ZOOM = 13;

export const TILE_LAYER = {
  url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
};
