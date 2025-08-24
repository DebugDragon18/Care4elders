'use server';

import { z } from 'zod';
import { aiDietSuggestions } from '@/ai/flows/ai-diet-suggestions';
import type { DietPlannerState } from '@/lib/types';

const DietFormSchema = z.object({
  age: z.coerce
    .number({ invalid_type_error: 'Please enter a valid age.' })
    .min(18, 'You must be at least 18 years old.'),
  healthConditions: z.string().optional(),
  dietaryNeeds: z.string().optional(),
});

export async function getDietSuggestions(
  prevState: DietPlannerState,
  formData: FormData
): Promise<DietPlannerState> {
  if (!process.env.GEMINI_API_KEY) {
    return {
      suggestions: null,
      error:
        'The AI Diet Planner is not configured. An API key for Gemini is required.',
    };
  }

  const validatedFields = DietFormSchema.safeParse({
    age: formData.get('age'),
    healthConditions: formData.get('healthConditions'),
    dietaryNeeds: formData.get('dietaryNeeds'),
  });

  if (!validatedFields.success) {
    return {
      suggestions: null,
      error: validatedFields.error.flatten().fieldErrors.age?.[0] || 'Invalid input.',
    };
  }
  
  try {
    const { age, healthConditions, dietaryNeeds } = validatedFields.data;
    const result = await aiDietSuggestions({
      age,
      healthConditions: healthConditions || 'None',
      dietaryNeeds: dietaryNeeds || 'None',
    });
    return { suggestions: result, error: null };
  } catch (error) {
    console.error(error);
    return { suggestions: null, error: 'Failed to get suggestions. Please try again.' };
  }
}
