import Map from './Map';
import LoadedScript from './LoadedScript';
import { GeoLocation } from './types';

type MapViewProps = {
  geoData?: GeoLocation;
};

const MapView = ({ geoData }: MapViewProps) => {
  return (
    <LoadedScript>
      <div style={{ height: '100%' }}>
        <Map center={geoData} zoom={10} />
      </div>
    </LoadedScript>
  );
};

export default MapView;
