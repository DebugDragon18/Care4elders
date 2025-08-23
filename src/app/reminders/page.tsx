import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Bell, Clock, Check } from 'lucide-react';
import Image from 'next/image';

const reminders = [
  { time: '8:00 AM', medicine: 'Metformin', dosage: '1 tablet' },
  { time: '2:00 PM', medicine: 'Lisinopril', dosage: '1 tablet' },
  { time: '9:00 PM', medicine: 'Atorvastatin', dosage: '1 tablet' },
];

export default function RemindersPage() {
  return (
    <div className="space-y-6">
      <header className="flex items-center gap-3">
        <Bell className="h-10 w-10 text-primary" />
        <div>
          <h1 className="text-4xl font-bold">Your Reminders</h1>
          <p className="text-lg text-muted-foreground">
            Stay on track with your medications.
          </p>
        </div>
      </header>
      
      <Card className='overflow-hidden'>
        <div className="relative h-40 w-full">
           <Image 
            src="https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Pills and calendar"
            fill
            style={{ objectFit: 'cover' }}
            data-ai-hint="pills calendar"
          />
        </div>
      </Card>

      <div className="space-y-4">
        {reminders.map((reminder, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle className="flex items-center justify-between text-2xl">
                <span>{reminder.time}</span>
                <span className="text-lg font-normal text-muted-foreground">
                  Upcoming
                </span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <p className="text-xl font-semibold">{reminder.medicine}</p>
                  <p className="text-muted-foreground text-md">{reminder.dosage}</p>
                </div>
                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    className="w-full h-12 text-md"
                  >
                    <Clock className="mr-2 h-5 w-5" /> Snooze
                  </Button>
                  <Button
                    className="w-full h-12 text-md"
                    style={{ backgroundColor: 'hsl(var(--accent))', color: 'hsl(var(--accent-foreground))' }}
                  >
                    <Check className="mr-2 h-5 w-5" /> Acknowledge
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
