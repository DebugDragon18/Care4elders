import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { HeartHandshake } from 'lucide-react';

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center bg-background p-4 sm:p-8 text-center">
      <Image
        src="https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?q=80&w=1887&auto=format&fit=crop&ixlib-rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Creative background"
        fill
        className="absolute inset-0 z-0 object-cover opacity-90"
        data-ai-hint="abstract pastel"
      />
      <div className="absolute inset-0 bg-background/50 backdrop-blur-sm" />
      <div className="z-10 flex flex-col items-center gap-8">
        <div className="flex flex-col items-center gap-4 text-primary-foreground">
          <HeartHandshake className="h-24 w-24 text-primary" />
          <h1 className="text-6xl font-bold tracking-tight text-primary">
            Care4Elders
          </h1>
          <p className="text-xl text-foreground max-w-lg mt-2">
            Your trusted companion for a simpler, safer life.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 w-full max-w-xs">
          <Button asChild size="lg" className="w-full h-14 text-lg">
            <Link href="/login">Log In</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="w-full h-14 text-lg bg-background/80">
            <Link href="/login">Sign Up</Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
