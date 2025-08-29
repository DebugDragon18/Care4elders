'use client';

import Image from 'next/image';
import { cn } from '@/lib/utils';

export default function SplashScreenTwo() {
  return (
    <div
      className={cn(
        'fixed inset-0 z-40 flex items-center justify-center',
        'animate-fade-out animation-delay-2s'
      )}
    >
      <Image
        src="https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Creative background"
        fill
        className="object-cover"
        data-ai-hint="abstract pastel"
      />
      <div className="absolute inset-0 bg-black/30" />
      <div className="z-10 animate-pulse">
        <h1 className="text-6xl font-bold text-white tracking-tight">
          Care4Elders
        </h1>
      </div>
    </div>
  );
}
