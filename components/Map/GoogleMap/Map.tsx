import { GoogleMap } from '@react-google-maps/api';
import { ReactNode } from 'react';
import { GeoLocation } from './types';

const defaultCenter = { lat: -41.2865, lng: 174.7762 };

type MapProps = {
  children?: ReactNode;
  height?: string;
  center?: GeoLocation;
  zoom?: number;
  handleClick?: (e: google.maps.MapMouseEvent) => void;
};

const Map = ({
  children,
  height = '400px',
  center,
  zoom = 12,
  handleClick,
}: MapProps) => {
  return (
    <GoogleMap
      mapContainerStyle={{
        height: height,
      }}
      center={center ?? defaultCenter}
      zoom={zoom}
      options={{
        mapTypeControl: false,
        streetViewControl: false,
        mapTypeId: 'satellite',
      }}
      onClick={handleClick}
    >
      {children}
    </GoogleMap>
  );
};

export default Map;
