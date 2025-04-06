
import React, { useState } from "react";
import { AiAnalysisResult } from "@/lib/aiAnalyzer";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { AlertCircle, CheckCircle, Circle } from "lucide-react";

interface AiAnalysisModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  analyzing: boolean;
  result: AiAnalysisResult | null;
}

const AiAnalysisModal = ({ open, onOpenChange, analyzing, result }: AiAnalysisModalProps) => {
  const [activeTab, setActiveTab] = useState<string>("all");
  const categories = ["all", "personal", "experience", "education", "skills", "general"];

  // Filter suggestions by category
  const filteredSuggestions = result?.suggestions.filter(
    (suggestion) => activeTab === "all" || suggestion.category === activeTab
  ) || [];

  const priorityIcon = (priority: string) => {
    switch (priority) {
      case "high":
        return <AlertCircle className="h-4 w-4 text-destructive" />;
      case "medium":
        return <Circle className="h-4 w-4 text-amber-500" />;
      case "low":
        return <CheckCircle className="h-4 w-4 text-green-500" />;
      default:
        return null;
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px] max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-xl">AI Resume Analysis</DialogTitle>
          <DialogDescription>
            Expert AI-powered insights to optimize your resume
          </DialogDescription>
        </DialogHeader>

        {analyzing ? (
          <div className="flex flex-col items-center py-12 space-y-6">
            <div className="relative w-28 h-28">
              <div className="absolute inset-0 rounded-full border-4 border-dashed border-primary animate-spin"></div>
              <div className="absolute inset-3 bg-white dark:bg-background rounded-full flex items-center justify-center">
                <div className="text-4xl font-bold text-primary">AI</div>
              </div>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-medium mb-2">Analyzing Resume</h3>
              <p className="text-muted-foreground mb-4">
                Evaluating content, format, and ATS compatibility...
              </p>
              <Progress value={undefined} className="w-48 mx-auto animate-pulse" />
            </div>
          </div>
        ) : result ? (
          <div className="space-y-6 pt-4">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-lg">Resume Score</h3>
              <div className="flex items-center gap-2">
                <Progress 
                  value={result.score} 
                  className="w-40" 
                  indicatorClassName={
                    result.score < 50 ? "bg-destructive" : 
                    result.score < 75 ? "bg-amber-500" : 
                    "bg-green-500"
                  }
                />
                <span className="font-medium text-sm">{result.score}/100</span>
              </div>
            </div>

            {result.suggestions.length > 0 ? (
              <>
                <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab}>
                  <TabsList className="grid grid-cols-3 lg:grid-cols-6">
                    {categories.map((category) => (
                      <TabsTrigger key={category} value={category} className="capitalize">
                        {category}
                      </TabsTrigger>
                    ))}
                  </TabsList>

                  <div className="mt-6 space-y-4">
                    {filteredSuggestions.length === 0 ? (
                      <p className="text-center py-4 text-muted-foreground">
                        No suggestions for this category
                      </p>
                    ) : (
                      filteredSuggestions.map((suggestion, index) => (
                        <div 
                          key={index} 
                          className="border rounded-md p-4 shadow-sm"
                        >
                          <div className="flex items-center justify-between">
                            <h4 className="font-medium flex items-center gap-2">
                              {priorityIcon(suggestion.priority)}
                              {suggestion.title}
                            </h4>
                            <span className="text-xs px-2 py-1 rounded-full bg-muted font-medium capitalize">
                              {suggestion.category}
                            </span>
                          </div>
                          <p className="mt-2 text-sm text-muted-foreground">{suggestion.description}</p>
                        </div>
                      ))
                    )}
                  </div>
                </Tabs>
              </>
            ) : (
              <div className="py-10 text-center">
                <CheckCircle className="mx-auto h-12 w-12 text-green-500 mb-4" />
                <h3 className="text-lg font-medium mb-2">Your Resume Looks Great!</h3>
                <p className="text-muted-foreground">
                  No significant issues were found. Your resume is well-optimized.
                </p>
              </div>
            )}
          </div>
        ) : (
          <div className="py-10 text-center">
            <p className="text-muted-foreground">
              No analysis data available. Please try again.
            </p>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default AiAnalysisModal;
