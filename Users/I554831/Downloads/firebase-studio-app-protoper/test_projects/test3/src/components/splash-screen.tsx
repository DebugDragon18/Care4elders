'use client';

import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { HeartHandshake } from 'lucide-react';

export default function SplashScreen() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
    }, 3000); // Show splash screen for 3 seconds

    return () => clearTimeout(timer);
  }, []);

  if (!show) {
    return null;
  }

  return (
    <div
      className={cn(
        'fixed inset-0 z-50 flex items-center justify-center bg-background',
        'animate-fade-out animation-delay-2s'
      )}
    >
      <div className="animate-pulse flex flex-col items-center gap-4">
        <HeartHandshake className="h-20 w-20 text-primary" />
        <h1 className="text-5xl font-bold text-primary tracking-tight">
          Care4Elders
        </h1>
      </div>
    </div>
  );
}
