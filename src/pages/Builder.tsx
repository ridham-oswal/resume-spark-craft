
import React, { useState } from "react";
import { initialResumeData, ResumeData, TemplateType } from "@/lib/resumeData";
import { analyzeResume, AiAnalysisResult } from "@/lib/aiAnalyzer";
import { useToast } from "@/components/ui/use-toast";
import BuilderLayout from "@/components/BuilderLayout";
import DownloadOptions from "@/components/DownloadOptions";
import ResumeBuilderTabs from "@/components/ResumeBuilderTabs";
import ResumePreviewPane from "@/components/ResumePreviewPane";
import AiAnalysisModal from "@/components/AiAnalysisModal";

const Builder = () => {
  const { toast } = useToast();
  const [resumeData, setResumeData] = useState<ResumeData>(initialResumeData);
  const [activeTab, setActiveTab] = useState<string>("content");
  const [selectedTemplate, setSelectedTemplate] = useState<TemplateType>("classic");
  
  // AI Analysis state
  const [isAnalyzing, setIsAnalyzing] = useState<boolean>(false);
  const [analysisModalOpen, setAnalysisModalOpen] = useState<boolean>(false);
  const [analysisResult, setAnalysisResult] = useState<AiAnalysisResult | null>(null);

  const handleUpdateResumeData = (data: ResumeData) => {
    setResumeData(data);
  };

  const handleAnalyzeResume = async () => {
    setIsAnalyzing(true);
    setAnalysisModalOpen(true);
    setAnalysisResult(null);
    
    try {
      const result = await analyzeResume(resumeData);
      setAnalysisResult(result);
    } catch (error) {
      console.error("Resume analysis error:", error);
      toast({
        title: "Analysis Failed",
        description: "Failed to analyze your resume. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsAnalyzing(false);
    }
  };

  return (
    <BuilderLayout>
      <div className="flex justify-end mb-8">
        <DownloadOptions 
          resumeData={resumeData} 
          selectedTemplate={selectedTemplate} 
        />
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          <ResumeBuilderTabs
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            resumeData={resumeData}
            onUpdateResumeData={handleUpdateResumeData}
            selectedTemplate={selectedTemplate}
            onSelectTemplate={setSelectedTemplate}
          />
        </div>
        
        <ResumePreviewPane
          resumeData={resumeData}
          template={selectedTemplate}
          onAnalyzeClick={handleAnalyzeResume}
          isAnalyzing={isAnalyzing}
        />
      </div>
      
      <AiAnalysisModal 
        open={analysisModalOpen} 
        onOpenChange={setAnalysisModalOpen} 
        analyzing={isAnalyzing}
        result={analysisResult}
      />
    </BuilderLayout>
  );
};

export default Builder;
