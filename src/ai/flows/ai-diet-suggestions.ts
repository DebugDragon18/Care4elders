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
      'A list of meal suggestions tailored to the user, including breakfast, lunch, and dinner options.'
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
  prompt: `You are a registered dietitian creating personalized meal suggestions for users.

  Based on the user's age, health conditions, and dietary needs, provide tailored meal suggestions for breakfast, lunch, and dinner.

  Age: {{{age}}}
  Health Conditions: {{{healthConditions}}}
  Dietary Needs: {{{dietaryNeeds}}}

  Provide a diverse range of meal suggestions, considering nutritional balance and taste.
  Format the output as a list of meal options for each meal (breakfast, lunch and dinner).
  Each suggestion should be one sentence long and should provide at least 3 suggestions for each meal.
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
