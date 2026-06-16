import { useEffect, useRef } from 'react';
import type { AddressesType } from '../../types/types';
import { useMap } from '../../hooks/use-map';
import { Icon, Marker } from 'leaflet';
import 'leaflet/dist/leaflet.css';


const URL_MARKER_DEFAULT = 'img/svg/pin-default.svg';
const URL_MARKER_ACTIVE = 'img/svg/pin-active.svg';

const defaultIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [40,40],
  iconAnchor: [20,40]
});
const activeIcon = new Icon({
  iconUrl: URL_MARKER_ACTIVE,
  iconSize: [40,40],
  iconAnchor: [20,40]
});

type MapProps = {
  locations: AddressesType[];
  activeOffer: null | string;
  onMarkerClick: (id: string) => void;
}

const Map = ({locations, activeOffer, onMarkerClick}: MapProps): JSX.Element => {
  const mapRef = useRef(null);
  const map = useMap(mapRef, locations);

  useEffect(() => {
    const markers: Marker[] = [];

    if (map) {
      locations.forEach(({id, coords: [lat, lng]}) => {
        const marker = new Marker({
          lat,
          lng
        });

        marker
          .setIcon(activeOffer === id ? activeIcon : defaultIcon)
          .on('click', () => {
            onMarkerClick(id);
          })
          .addTo(map);

        markers.push(marker);
      });

      return () => {
        if (map) {
          markers.forEach((marker) => {
            map.removeLayer(marker);
          });
        }
      };
    }
  }, [map, locations, activeOffer, onMarkerClick]);

  return <div className="map" ref={mapRef}/>;
};

export default Map;
