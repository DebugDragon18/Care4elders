import {genkit} from 'genkit';
import {googleAI} from '@gen-ai/googleai';

export const ai = genkit({
  plugins: [googleAI({apiKey: process.env.GEMINI_API_KEY})],
  model: 'gemini-1.5-flash-latest',
});
