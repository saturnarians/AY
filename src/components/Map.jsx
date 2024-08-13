import React from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';

// Define map container styles and center position
const containerStyle = {
  width: '100%',
  height: '500px',
};

const center = {
  lat: 51.505, // Latitude for London
  lng: -0.09,  // Longitude for London
};

const Map = () => {
  
  const [selected, setSelected] = React.useState(null);

  return (   
    <LoadScript
      googleMapsApiKey={import.meta.env.REACT_GOOGLE_MAPS_API_KEY} // Your API key
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={13}
      >
        <Marker
          position={center}
          onClick={() => setSelected(center)}
        />
        {selected && (
          <InfoWindow
            position={selected}
            onCloseClick={() => setSelected(null)}
          >
            <div>
              <h2>Marker Title</h2>
              <p>Additional information about this location.</p>
            </div>
          </InfoWindow>
        )}
      </GoogleMap>
    </LoadScript>

);
};

export default Map;