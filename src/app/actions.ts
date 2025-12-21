'use server';

import { summarizeVideoStreamAnalysis } from '@/ai/flows/video-stream-analysis-summarization';

export async function getAnalysisSummary(analysisResults: string): Promise<string> {
  try {
    const { summary } = await summarizeVideoStreamAnalysis({ analysisResults });
    return summary;
  } catch (error) {
    console.error('Error getting analysis summary:', error);
    return 'Failed to generate summary. Please try again.';
  }
}
