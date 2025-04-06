
import { ResumeData } from "./resumeData";
import { toast } from "@/components/ui/use-toast";

const OPENAI_API_KEY = "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";

export interface AiAnalysisResult {
  suggestions: {
    category: "personal" | "experience" | "education" | "skills" | "general";
    title: string;
    description: string;
    priority: "high" | "medium" | "low";
  }[];
  score: number;
}

export const analyzeResume = async (resumeData: ResumeData): Promise<AiAnalysisResult> => {
  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${OPENAI_API_KEY}`
      },
      body: JSON.stringify({
        model: "gpt-4o",
        messages: [
          {
            role: "system", 
            content: `You are an expert resume reviewer with years of experience in HR and recruiting. 
            Analyze the following resume data and provide actionable suggestions for improvement in JSON format. 
            Focus on improving ATS compatibility, fixing weak sections, enhancing clarity, addressing gaps, and optimizing impact.`
          },
          {
            role: "user",
            content: `Please analyze this resume data and provide suggestions: ${JSON.stringify(resumeData)}`
          }
        ],
        response_format: { type: "json_object" },
        temperature: 0.5,
      })
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(`OpenAI API Error: ${error.error?.message || 'Unknown error'}`);
    }

    const data = await response.json();
    const content = data.choices?.[0]?.message?.content;
    
    if (!content) {
      throw new Error("No analysis content received");
    }

    // Parse the JSON response from OpenAI
    const analysisResult = JSON.parse(content);

    return {
      suggestions: analysisResult.suggestions || [],
      score: analysisResult.score || 65
    };
    
  } catch (error) {
    console.error("Resume analysis failed:", error);
    toast({
      title: "Analysis Failed",
      description: "Could not complete the resume analysis. Please try again later.",
      variant: "destructive",
    });
    
    // Return empty result on error
    return {
      suggestions: [],
      score: 0
    };
  }
};
