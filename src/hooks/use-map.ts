import { MutableRefObject, useEffect, useRef, useState } from 'react';
import { Location } from '../types/types';
import { Map, TileLayer } from 'leaflet';

export const useMap = (mapRef: MutableRefObject<HTMLElement | null>, addresses: Location[]): Map | null => {
  const [map, setMap] = useState<Map | null>(null);
  const isRenderedRef = useRef<boolean>(false);

  useEffect(() => {
    if (!addresses?.[0]?.coords?.[0] || !addresses?.[0]?.coords?.[1]) {
      return;
    }

    if (mapRef.current !== null && !isRenderedRef.current) {
      const instance = new Map(mapRef.current, {
        center: {
          lat: addresses[0].coords[0],
          lng: addresses[0].coords[1]
        },
        zoom: 10
      });

      const layer = new TileLayer(
        'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
        {
          attribution:
                        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
        }
      );

      instance.addLayer(layer);

      setMap(instance);
      isRenderedRef.current = true;
    }

  }, [mapRef, addresses]);

  return map;
};
