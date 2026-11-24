import { Marker, Popup } from 'react-leaflet';
import type { Commerce } from '../../types/commerce';
import { getCategory } from '../../constants/categories';
import { getMarkerIcon } from './markerIcon';

interface CommerceMarkerProps {
  commerce: Commerce;
}

export function CommerceMarker({ commerce }: CommerceMarkerProps) {
  const category = getCategory(commerce.category);

  return (
    <Marker
      position={[commerce.position.lat, commerce.position.lng]}
      icon={getMarkerIcon(category)}
      title={commerce.name}
    >
      <Popup>
        <div className="commerce-popup">
          <strong className="commerce-popup__name">{commerce.name}</strong>
          <span className="commerce-popup__category" style={{ color: category.color }}>
            {category.icon} {category.label}
          </span>
          <span className="commerce-popup__address">{commerce.address}</span>
        </div>
      </Popup>
    </Marker>
  );
}
