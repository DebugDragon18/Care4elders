'use client';

import { useState, useEffect } from 'react';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '100%',
};

interface MapProps {
  apiKey: string;
}

export default function Map({ apiKey }: MapProps) {
  const [currentPosition, setCurrentPosition] = useState<{ lat: number; lng: number } | null>(null);

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: apiKey,
  });

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setCurrentPosition({ lat: latitude, lng: longitude });
        },
        () => {
          // Handle error or user denial
          console.error("Error getting user's location");
          // As a fallback, let's use a default location
          setCurrentPosition({ lat: 37.7749, lng: -122.4194 }); 
        }
      );
    }
  }, []);

  if (!isLoaded) return <div>Loading Map...</div>;
  if (!currentPosition) return <div>Getting location...</div>;

  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={currentPosition}
      zoom={15}
    >
      <Marker position={currentPosition} />
    </GoogleMap>
  );
}