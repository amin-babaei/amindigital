import { useEffect, useState } from 'react';
import { Marker, useMapEvents } from 'react-leaflet';
import L from 'leaflet';

const markerIcon = new L.Icon({
  iconUrl: "/images/blue-marker.png",
  iconSize: [30, 30],
  iconAnchor: [15, 30],
});

const LocationMarker = ({
  setPosition,
  center,
}: {
  setPosition: React.Dispatch<React.SetStateAction<L.LatLng | null>>;
  center: L.LatLng | null;
}) => {
  const [position, setPositionInternal] = useState<L.LatLng | null>(center);

  const map = useMapEvents({
    click: (e) => {
      setPositionInternal(e.latlng);
      setPosition(e.latlng);
    },
  });

  useEffect(() => {
    setPositionInternal(center);
    if (center) {
      map.flyTo(center);
    }
  }, [center, map]);

  return position === null ? null : (
    <Marker position={position} icon={markerIcon} />
  );
};

export default LocationMarker;