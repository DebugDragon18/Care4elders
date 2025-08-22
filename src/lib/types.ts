import type { AiDietSuggestionsOutput } from '@/ai/flows/ai-diet-suggestions';

export type DietPlannerState = {
  suggestions: AiDietSuggestionsOutput | null;
  error: string | null;
};
