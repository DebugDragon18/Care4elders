'use server';

/**
 * @fileOverview An AI-powered diet suggestion flow.
 *
 * - aiDietSuggestions - A function that handles the diet suggestion process.
 * - AiDietSuggestionsInput - The input type for the aiDietSuggestions function.
 * - AiDietSuggestionsOutput - The return type for the aiDietSuggestions function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AiDietSuggestionsInputSchema = z.object({
  age: z.number().describe('The age of the user.'),
  healthConditions: z
    .string()
    .describe(
      'A comma-separated list of health conditions the user may have (e.g., diabetes, high blood pressure).'
    ),
  dietaryNeeds: z
    .string()
    .describe(
      'A comma-separated list of dietary needs or preferences (e.g., vegetarian, gluten-free, low-sodium).'
    ),
});
export type AiDietSuggestionsInput = z.infer<typeof AiDietSuggestionsInputSchema>;

const AiDietSuggestionsOutputSchema = z.object({
  mealSuggestions: z
    .string()
    .describe(
      'A detailed meal plan for one day, including breakfast, lunch, and dinner. Each meal should have specific food items and quantities.'
    ),
});
export type AiDietSuggestionsOutput = z.infer<typeof AiDietSuggestionsOutputSchema>;

export async function aiDietSuggestions(
  input: AiDietSuggestionsInput
): Promise<AiDietSuggestionsOutput> {
  return aiDietSuggestionsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'aiDietSuggestionsPrompt',
  input: {schema: AiDietSuggestionsInputSchema},
  output: {schema: AiDietSuggestionsOutputSchema},
  prompt: `You are an expert nutritionist creating a personalized one-day meal plan for a senior citizen.

  Based on the user's age, health conditions, and dietary needs, provide a detailed meal plan for breakfast, lunch, and dinner.

  User Profile:
  - Age: {{{age}}}
  - Health Conditions: {{{healthConditions}}}
  - Dietary Needs: {{{dietaryNeeds}}}

  Instructions:
  1.  Create a balanced and healthy meal plan for a single day.
  2.  For each meal (Breakfast, Lunch, Dinner), list specific food items and suggest appropriate portion sizes (e.g., "1 cup of oatmeal", "100g grilled chicken breast").
  3.  Ensure the suggestions are simple, easy to prepare, and suitable for an elderly person.
  4.  Format the output clearly with headings for "Breakfast:", "Lunch:", and "Dinner:". Provide at least two food items for each meal.
`,
});

const aiDietSuggestionsFlow = ai.defineFlow(
  {
    name: 'aiDietSuggestionsFlow',
    inputSchema: AiDietSuggestionsInputSchema,
    outputSchema: AiDietSuggestionsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
