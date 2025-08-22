'use client';

import { useState } from 'react';
import { Siren, PhoneOutgoing } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function SosPage() {
  const [isNotifying, setIsNotifying] = useState(false);

  const handleSosClick = () => {
    setIsNotifying(true);
    // In a real app, this would trigger notifications via an API.
    setTimeout(() => {
      // Reset after some time for demo purposes
      setIsNotifying(false);
    }, 5000);
  };

  return (
    <div className="flex flex-col items-center justify-center text-center h-[60vh] gap-8">
      {isNotifying ? (
        <>
          <PhoneOutgoing className="h-32 w-32 text-green-500 animate-pulse" />
          <h1 className="text-4xl font-bold text-green-500">
            Help is on the way!
          </h1>
          <p className="text-lg text-muted-foreground max-w-md">
            Your emergency contacts have been notified with your current location.
          </p>
        </>
      ) : (
        <>
          <h1 className="text-4xl font-bold">Emergency SOS</h1>
          <p className="text-lg text-muted-foreground max-w-md">
            Press and hold the button below to instantly notify your emergency
            contacts.
          </p>
          <Button
            onClick={handleSosClick}
            className="w-64 h-64 rounded-full bg-red-600 hover:bg-red-700 shadow-2xl text-white flex flex-col items-center justify-center gap-2"
          >
            <Siren className="h-24 w-24" />
            <span className="text-3xl font-bold">SEND ALERT</span>
          </Button>
        </>
      )}
    </div>
  );
}
