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
  const [locationError, setLocationError] = useState<string | null>(null);

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
          setLocationError(null);
        },
        (error) => {
          // Handle error or user denial
          console.error("Error getting user's location:", error.message);
          setLocationError('Location access was denied. Please enable location permissions in your browser settings to see your current position.');
        }
      );
    } else {
      setLocationError('Geolocation is not supported by this browser.');
    }
  }, []);

  if (locationError) {
    return (
      <div className="flex h-full w-full items-center justify-center bg-muted p-4 text-center">
        <p className="text-muted-foreground">{locationError}</p>
      </div>
    );
  }

  if (!isLoaded) return <div className="flex h-full w-full items-center justify-center bg-muted"><p>Loading Map...</p></div>;
  if (!currentPosition) return <div className="flex h-full w-full items-center justify-center bg-muted"><p>Getting location...</p></div>;

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
