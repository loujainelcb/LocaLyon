import { MapContainer, TileLayer } from 'react-leaflet';
import type { Commerce } from '../../types/commerce';
import { DEFAULT_ZOOM, LYON_CENTER, TILE_LAYER } from '../../constants/map';
import { CommerceMarker } from './CommerceMarker';
import 'leaflet/dist/leaflet.css';
import './CommerceMap.css';

interface CommerceMapProps {
  commerces: Commerce[];
}

export function CommerceMap({ commerces }: CommerceMapProps) {
  return (
    <MapContainer
      center={LYON_CENTER}
      zoom={DEFAULT_ZOOM}
      scrollWheelZoom
      className="commerce-map"
    >
      <TileLayer url={TILE_LAYER.url} attribution={TILE_LAYER.attribution} />
      {commerces.map((commerce) => (
        <CommerceMarker key={commerce.id} commerce={commerce} />
      ))}
    </MapContainer>
  );
}
