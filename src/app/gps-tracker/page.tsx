'use client';

import { MapPin } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Suspense } from 'react';
import Map from '@/components/map';

function GpsTrackerContent() {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
  const isApiKeySet = apiKey && apiKey !== 'YOUR_API_KEY_HERE';

  return (
    <div className="space-y-6">
      <header className="flex items-center gap-3">
        <MapPin className="h-10 w-10 text-primary" />
        <div>
          <h1 className="text-4xl font-bold">GPS Tracker</h1>
          <p className="text-lg text-muted-foreground">
            Share your location with loved ones for safety.
          </p>
        </div>
      </header>

      <Card>
        <CardContent className="p-4 md:p-6 text-center space-y-4">
          <div className="aspect-video bg-muted rounded-lg overflow-hidden">
            {isApiKeySet ? (
              <Map apiKey={apiKey} />
            ) : (
              <div className="w-full h-full bg-muted flex flex-col items-center justify-center p-4">
                <h3 className="text-xl font-semibold mb-2">Google Maps Not Configured</h3>
                <p className="text-muted-foreground text-center">
                  To use the GPS Tracker, please add your Google Maps API key to the <code className="bg-gray-200 p-1 rounded-sm text-sm">.env</code> file.
                </p>
              </div>
            )}
          </div>
          <h2 className="text-2xl font-semibold">Your Location is Shared</h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Your pre-selected contacts can see your live location to ensure you are safe. You can stop sharing at any time.
          </p>
          <Button variant="outline" size="lg" className="h-12 text-lg">
            Stop Sharing Location
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}


export default function GpsTrackerPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <GpsTrackerContent />
    </Suspense>
  )
}
