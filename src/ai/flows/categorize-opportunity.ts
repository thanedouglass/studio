'use server';

/**
 * @fileOverview An AI agent that categorizes research opportunities.
 *
 * - categorizeOpportunity - A function that handles the categorization process.
 * - CategorizeOpportunityInput - The input type for the categorizeOpportunity function.
 * - CategorizeOpportunityOutput - The return type for the categorizeOpportunity function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const CategorizeOpportunityInputSchema = z.object({
  title: z.string().describe('The title of the research opportunity.'),
  description: z.string().describe('A detailed description of the research opportunity.'),
  qualifications: z.string().describe('The qualifications required for the opportunity.'),
});
export type CategorizeOpportunityInput = z.infer<typeof CategorizeOpportunityInputSchema>;

const CategorizeOpportunityOutputSchema = z.object({
  academicYear: z.string().describe('The academic year the opportunity is targeted towards (e.g., Freshman, Sophomore, Junior, Senior, Graduate).'),
  researchType: z.string().describe('The type of research (e.g., Wet Lab, Dry Lab, Clinical, Field Research).'),
  discipline: z.string().describe('The academic discipline of the research opportunity (e.g., Biology, Chemistry, Computer Science, Engineering).'),
  experienceLevel: z.string().describe('The experience level required for the opportunity (e.g., Beginner, Intermediate, Advanced).'),
});
export type CategorizeOpportunityOutput = z.infer<typeof CategorizeOpportunityOutputSchema>;

export async function categorizeOpportunity(input: CategorizeOpportunityInput): Promise<CategorizeOpportunityOutput> {
  return categorizeOpportunityFlow(input);
}

const prompt = ai.definePrompt({
  name: 'categorizeOpportunityPrompt',
  input: {schema: CategorizeOpportunityInputSchema},
  output: {schema: CategorizeOpportunityOutputSchema},
  prompt: `You are an expert at categorizing research opportunities based on the following information:

Title: {{{title}}}
Description: {{{description}}}
Qualifications: {{{qualifications}}}

Based on this information, categorize the research opportunity into the following categories:

- Academic Year: The academic year the opportunity is targeted towards (e.g., Freshman, Sophomore, Junior, Senior, Graduate).
- Research Type: The type of research (e.g., Wet Lab, Dry Lab, Clinical, Field Research).
- Discipline: The academic discipline of the research opportunity (e.g., Biology, Chemistry, Computer Science, Engineering).
- Experience Level: The experience level required for the opportunity (e.g., Beginner, Intermediate, Advanced).`,
});

const categorizeOpportunityFlow = ai.defineFlow(
  {
    name: 'categorizeOpportunityFlow',
    inputSchema: CategorizeOpportunityInputSchema,
    outputSchema: CategorizeOpportunityOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
