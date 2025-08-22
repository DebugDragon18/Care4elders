import Link from 'next/link';
import Image from 'next/image';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';
import {
  Bell,
  Siren,
  ShoppingCart,
  UtensilsCrossed,
  MapPin,
  Stethoscope,
} from 'lucide-react';

const features = [
  {
    title: 'Medicine Reminders',
    description: "Never miss a dose",
    href: '/reminders',
    icon: Bell,
    color: 'text-blue-500',
  },
  {
    title: 'Emergency SOS',
    description: "Get help instantly",
    href: '/sos',
    icon: Siren,
    color: 'text-red-500',
  },
  {
    title: 'Order Essentials',
    description: "Medicine & groceries",
    href: '/ordering',
    icon: ShoppingCart,
    color: 'text-green-500',
  },
  {
    title: 'AI Diet Planner',
    description: "Personalized meal plans",
    href: '/diet-planner',
    icon: UtensilsCrossed,
    color: 'text-orange-500',
  },
  {
    title: 'GPS Tracker',
    description: "Share your location",
    href: '/gps-tracker',
    icon: MapPin,
    color: 'text-purple-500',
  },
  {
    title: 'Appointments',
    description: "Manage doctor visits",
    href: '#',
    icon: Stethoscope,
    color: 'text-indigo-500',
  },
];

export default function Dashboard() {
  return (
    <div className="flex flex-col gap-6">
       <div className="relative w-full h-48 md:h-64 rounded-xl overflow-hidden shadow-lg">
          <Image
            src="https://placehold.co/600x400.png"
            alt="Happy senior couple"
            layout="fill"
            objectFit="cover"
            data-ai-hint="happy senior couple"
            className="brightness-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          <div className="absolute bottom-0 left-0 p-4 sm:p-6 text-white">
            <h1 className="text-3xl sm:text-4xl font-bold">Hello!</h1>
            <p className="text-md sm:text-lg">
              How can we help you today?
            </p>
          </div>
        </div>
      <div className="grid grid-cols-2 gap-4 sm:gap-6">
        {features.map((feature) => (
          <Link href={feature.href} key={feature.title} className="group">
            <Card className="h-full transform transition-transform duration-200 group-hover:scale-105 group-hover:shadow-lg">
              <CardHeader className="flex flex-col items-center justify-center text-center p-4 sm:p-6">
                <feature.icon className={`h-12 w-12 mb-3 ${feature.color}`} />
                <CardTitle className="text-lg sm:text-xl">{feature.title}</CardTitle>
                <CardDescription className="text-sm sm:text-base">{feature.description}</CardDescription>
              </CardHeader>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
