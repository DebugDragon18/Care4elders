'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  LayoutDashboard,
  Bell,
  ShoppingCart,
  UtensilsCrossed,
  MapPin,
} from 'lucide-react';
import { cn } from '@/lib/utils';

const navItems = [
  { href: '/dashboard', icon: LayoutDashboard, label: 'Home' },
  { href: '/reminders', icon: Bell, label: 'Reminders' },
  { href: '/ordering', icon: ShoppingCart, label: 'Orders' },
  { href: '/diet-planner', icon: UtensilsCrossed, label: 'Diet Plan' },
  { href: '/gps-tracker', icon: MapPin, label: 'Tracker' },
];

export default function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-card border-t shadow-t-lg">
      <div className="grid h-20 grid-cols-5 max-w-lg mx-auto">
        {navItems.map(({ href, icon: Icon, label }) => {
          const isActive = pathname === href;
          return (
            <Link
              key={href}
              href={href}
              className={cn(
                'inline-flex flex-col items-center justify-center px-5 hover:bg-muted group',
                isActive
                  ? 'text-primary'
                  : 'text-muted-foreground'
              )}
            >
              <Icon className="w-7 h-7 mb-1" />
              <span className="text-xs font-medium">{label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
