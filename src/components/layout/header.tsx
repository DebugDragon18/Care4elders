import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Siren } from 'lucide-react';
import { Avatar, AvatarFallback } from '../ui/avatar';

export default function Header() {
  return (
    <header className="sticky top-0 z-40 flex h-20 items-center justify-between gap-4 border-b bg-card px-4 sm:px-6">
      <div className="flex items-center gap-2">
        <Link href="/dashboard">
          <h1 className="text-2xl font-bold text-primary">Care4Elders</h1>
        </Link>
      </div>
      <div className="flex items-center gap-4">
        <Link href="/sos" passHref>
          <Button
            variant="destructive"
            size="lg"
            className="h-12 text-lg animate-pulse"
          >
            <Siren className="mr-2 h-6 w-6" />
            SOS
          </Button>
        </Link>
        <Avatar>
          <AvatarFallback className="text-lg">U</AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
}
