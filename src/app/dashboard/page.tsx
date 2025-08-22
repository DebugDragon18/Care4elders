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
    href: 'https://pharmeasy.in/online-medicine-order?isSEM=true&utm_source=google&utm_medium=cpc&utm_campaign=ITW_Generic_FP_Medical_Exact_TROAS&utm_content={adgroupname}&utm_creative=730076067580&gad_source=1&gad_campaignid=22145937534&gbraid=0AAAAADBjd5-BEoV73ao3hu7zgT_x7-BPD&gclid=Cj0KCQjwqqDFBhDhARIsAIHTlkvEuO3WNAQAlCDjMdUUWFnDQsJ8YNEiKw33bFaHERP-ImJ1uOENUNMaAjjREALw_wcB',
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
    href: 'https://www.bigbasket.com/',
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
            src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Happy senior couple"
            fill
            style={{ objectFit: 'cover' }}
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
          <Link href={feature.href} key={feature.title} className="group" target={feature.href.startsWith('http') ? '_blank' : '_self'}>
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
