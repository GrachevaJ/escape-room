import { useEffect, useRef } from 'react';
import type { Location } from '../../types/types';
import { useMap } from '../../hooks/use-map';
import { Icon, Marker } from 'leaflet';
import 'leaflet/dist/leaflet.css';


const URL_MARKER_DEFAULT = 'img/svg/pin-default.svg';

const defaultIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [40,40],
  iconAnchor: [20,40]
});

type MapProps = {
  locations: Location[];
}

const Map = ({locations}: MapProps): JSX.Element => {
  const mapRef = useRef(null);
  const map = useMap(mapRef, locations);

  useEffect(() => {
    if (map) {
      locations.forEach(({coords: [lat, lng]}) => {
        const marker = new Marker({
          lat,
          lng
        });

        marker
          .setIcon(defaultIcon)
          .addTo(map);
      });
    }
  }, [map, locations]);

  return <div className="map" ref={mapRef}/>;
};

export default Map;
