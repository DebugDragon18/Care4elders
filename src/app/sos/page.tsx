'use client';

import { useState, useEffect } from 'react';
import { Siren, PhoneOutgoing } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function SosPage() {
  const [isNotifying, setIsNotifying] = useState(false);
  const [countdown, setCountdown] = useState<number | null>(null);

  useEffect(() => {
    if (countdown === null || countdown <= 0) {
      if (countdown === 0) {
        setIsNotifying(true);
      }
      return;
    }

    const timer = setTimeout(() => {
      setCountdown(countdown - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [countdown]);

  useEffect(() => {
    let resetTimer: NodeJS.Timeout;
    if (isNotifying) {
      // In a real app, this would trigger notifications via an API.
      resetTimer = setTimeout(() => {
        setIsNotifying(false);
        setCountdown(null);
      }, 5000);
    }
    return () => clearTimeout(resetTimer);
  }, [isNotifying]);
  

  const handleSosClick = () => {
    setCountdown(5);
  };

  const handleCancelClick = () => {
    setCountdown(null);
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
      ) : countdown !== null ? (
        <>
          <h1 className="text-6xl font-bold text-destructive animate-pulse">
            {countdown}
          </h1>
           <p className="text-lg text-muted-foreground max-w-md">
            Sending alert in {countdown} seconds...
          </p>
          <Button
            onClick={handleCancelClick}
            variant="outline"
            size="lg"
            className="h-14 text-lg"
          >
            Cancel
          </Button>
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
            className="w-64 h-64 rounded-full bg-red-600 hover:bg-red-700 shadow-2xl text-white flex flex-col items-center justify-center gap-2 transition-transform active:scale-95"
          >
            <Siren className="h-24 w-24" />
            <span className="text-3xl font-bold">SEND ALERT</span>
          </Button>
        </>
      )}
    </div>
  );
}
