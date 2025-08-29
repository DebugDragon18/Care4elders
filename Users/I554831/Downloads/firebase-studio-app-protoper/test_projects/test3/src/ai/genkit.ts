import {genkit} from 'genkit';
import {googleAI} from '@gen-kit/google-ai';
import {config} from 'dotenv';

config();

export const ai = genkit({
  plugins: [
    googleAI({
      apiKey: process.env.GEMINI_API_KEY,
    }),
  ],
});
