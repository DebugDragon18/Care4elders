import { UtensilsCrossed } from 'lucide-react';
import DietPlannerForm from '@/components/diet-planner-form';

export default function DietPlannerPage() {
  return (
    <div className="space-y-6">
      <header className="flex items-center gap-3">
        <UtensilsCrossed className="h-10 w-10 text-primary" />
        <div>
          <h1 className="text-4xl font-bold">AI Diet Planner</h1>
          <p className="text-lg text-muted-foreground">
            Get smart meal suggestions tailored just for you.
          </p>
        </div>
      </header>
      <DietPlannerForm />
    </div>
  );
}
