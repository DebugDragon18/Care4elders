'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { getDietSuggestions } from '@/app/diet-planner/actions';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Alert, AlertDescription, AlertTitle } from './ui/alert';
import { Lightbulb, LoaderCircle, ServerCrash } from 'lucide-react';
import type { DietPlannerState } from '@/lib/types';

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" className="w-full h-14 text-lg" disabled={pending}>
      {pending ? (
        <>
          <LoaderCircle className="mr-2 h-6 w-6 animate-spin" />
          Getting Suggestions...
        </>
      ) : (
        'Get Suggestions'
      )}
    </Button>
  );
}

const MealSection = ({ title, suggestions }: { title: string, suggestions: string[] }) => (
  <div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <ul className="list-disc list-inside space-y-1 text-md text-muted-foreground">
      {suggestions.map((suggestion, index) => (
        <li key={index}>{suggestion.replace('- ', '').trim()}</li>
      ))}
    </ul>
  </div>
);

export default function DietPlannerForm() {
  const initialState: DietPlannerState = { suggestions: null, error: null };
  const [state, dispatch] = useFormState(getDietSuggestions, initialState);

  const formatSuggestions = (text: string | undefined) => {
    if (!text) return { breakfast: [], lunch: [], dinner: [] };
    const lines = text.split('\n').filter(line => line.trim() !== '');
    
    const breakfast: string[] = [];
    const lunch: string[] = [];
    const dinner: string[] = [];
    
    let currentSection: 'breakfast' | 'lunch' | 'dinner' | null = null;

    lines.forEach(line => {
      if (line.toLowerCase().startsWith('breakfast:')) {
        currentSection = 'breakfast';
      } else if (line.toLowerCase().startsWith('lunch:')) {
        currentSection = 'lunch';
      } else if (line.toLowerCase().startsWith('dinner:')) {
        currentSection = 'dinner';
      } else {
        if (currentSection === 'breakfast') breakfast.push(line);
        if (currentSection === 'lunch') lunch.push(line);
        if (currentSection === 'dinner') dinner.push(line);
      }
    });

    return { breakfast, lunch, dinner };
  }

  const { breakfast, lunch, dinner } = formatSuggestions(state.suggestions?.mealSuggestions);

  return (
    <div className="grid md:grid-cols-2 gap-8">
      <Card>
        <form action={dispatch}>
          <CardHeader>
            <CardTitle className="text-3xl">Personalize Your Diet</CardTitle>
            <CardDescription className="text-md">
              Tell us a bit about yourself for tailored meal suggestions.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="age" className="text-lg">
                Your Age
              </Label>
              <Input
                id="age"
                name="age"
                type="number"
                placeholder="e.g., 65"
                required
                className="h-14 text-lg"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="healthConditions" className="text-lg">
                Health Conditions (optional)
              </Label>
              <Textarea
                id="healthConditions"
                name="healthConditions"
                placeholder="e.g., Diabetes, High blood pressure"
                className="text-lg"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="dietaryNeeds" className="text-lg">
                Dietary Needs (optional)
              </Label>
              <Textarea
                id="dietaryNeeds"
                name="dietaryNeeds"
                placeholder="e.g., Vegetarian, Low-sodium"
                className="text-lg"
              />
            </div>
          </CardContent>
          <CardFooter>
            <SubmitButton />
          </CardFooter>
        </form>
      </Card>

      <div className="space-y-4">
        {state.error && (
           <Alert variant="destructive">
            <ServerCrash className="h-4 w-4" />
             <AlertTitle>Error</AlertTitle>
             <AlertDescription>{state.error}</AlertDescription>
           </Alert>
        )}

        {state.suggestions ? (
          <Card className="h-full">
            <CardHeader>
              <CardTitle className="text-3xl">Your Meal Suggestions</CardTitle>
              <CardDescription className="text-md">Here are some ideas based on your profile.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {breakfast.length > 0 && <MealSection title="Breakfast" suggestions={breakfast} />}
              {lunch.length > 0 && <MealSection title="Lunch" suggestions={lunch} />}
              {dinner.length > 0 && <MealSection title="Dinner" suggestions={dinner} />}
            </CardContent>
          </Card>
        ) : (
          <div className="flex h-full flex-col items-center justify-center rounded-lg border-2 border-dashed bg-card p-12 text-center">
            <Lightbulb className="mx-auto h-12 w-12 text-muted-foreground" />
            <h3 className="mt-4 text-xl font-semibold">Your suggestions will appear here</h3>
            <p className="mt-1 text-md text-muted-foreground">
              Fill out the form to get started.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
