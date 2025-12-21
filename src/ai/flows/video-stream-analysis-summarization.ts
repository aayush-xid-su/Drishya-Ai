'use server';
/**
 * @fileOverview Summarizes key events detected in a processed video stream.
 *
 * - summarizeVideoStreamAnalysis - A function that summarizes the analysis of a video stream.
 * - SummarizeVideoStreamAnalysisInput - The input type for the summarizeVideoStreamAnalysis function.
 * - SummarizeVideoStreamAnalysisOutput - The return type for the summarizeVideoStreamAnalysis function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SummarizeVideoStreamAnalysisInputSchema = z.object({
  analysisResults: z
    .string()
    .describe(
      'A detailed analysis of the video stream, including detected objects, facial landmarks, hand gestures, and pose estimations.'
    ),
});
export type SummarizeVideoStreamAnalysisInput = z.infer<
  typeof SummarizeVideoStreamAnalysisInputSchema
>;

const SummarizeVideoStreamAnalysisOutputSchema = z.object({
  summary: z
    .string()
    .describe(
      'A concise summary of the key events and insights from the video stream analysis.'
    ),
});
export type SummarizeVideoStreamAnalysisOutput = z.infer<
  typeof SummarizeVideoStreamAnalysisOutputSchema
>;

export async function summarizeVideoStreamAnalysis(
  input: SummarizeVideoStreamAnalysisInput
): Promise<SummarizeVideoStreamAnalysisOutput> {
  return summarizeVideoStreamAnalysisFlow(input);
}

const prompt = ai.definePrompt({
  name: 'videoStreamAnalysisSummaryPrompt',
  input: {schema: SummarizeVideoStreamAnalysisInputSchema},
  output: {schema: SummarizeVideoStreamAnalysisOutputSchema},
  prompt: `You are an AI video analysis expert. Summarize the key events and insights from the following video stream analysis:

  Analysis Results: {{{analysisResults}}}
  `,
});

const summarizeVideoStreamAnalysisFlow = ai.defineFlow(
  {
    name: 'summarizeVideoStreamAnalysisFlow',
    inputSchema: SummarizeVideoStreamAnalysisInputSchema,
    outputSchema: SummarizeVideoStreamAnalysisOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
