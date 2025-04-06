
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { ZoomIn, ZoomOut, Cpu } from "lucide-react";
import ResumePreview from "@/components/ResumePreview";
import { ResumeData, TemplateType } from "@/lib/resumeData";

interface ResumePreviewPaneProps {
  resumeData: ResumeData;
  template: TemplateType;
  onAnalyzeClick: () => void;
  isAnalyzing: boolean;
}

const ResumePreviewPane = ({ 
  resumeData, 
  template, 
  onAnalyzeClick, 
  isAnalyzing 
}: ResumePreviewPaneProps) => {
  const [previewScale, setPreviewScale] = useState<number>(0.7);

  return (
    <div className="lg:sticky lg:top-20 self-start">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold">Preview</h2>
        <div className="flex items-center gap-2 no-print">
          <Button 
            onClick={onAnalyzeClick}
            variant="outline" 
            className="gap-2 absolute left-1/2 transform -translate-x-1/2 top-0"
            disabled={isAnalyzing}
          >
            <Cpu className={`h-4 w-4 ${isAnalyzing ? 'animate-spin' : ''}`} />
            {isAnalyzing ? "Analyzing..." : "Analyze with AI"}
          </Button>
          <span className="text-sm text-gray-500">Zoom:</span>
          <Button 
            variant="outline" 
            size="sm" 
            onClick={() => setPreviewScale(prev => Math.max(0.4, prev - 0.1))}
            className="gap-1"
          >
            <ZoomOut className="h-3.5 w-3.5" />
          </Button>
          <span className="text-sm w-12 text-center">{Math.round(previewScale * 100)}%</span>
          <Button 
            variant="outline" 
            size="sm" 
            onClick={() => setPreviewScale(prev => Math.min(1, prev + 0.1))}
            className="gap-1"
          >
            <ZoomIn className="h-3.5 w-3.5" />
          </Button>
        </div>
      </div>
      <div className="border rounded-lg overflow-auto shadow-lg max-h-[calc(100vh-250px)] preview-container">
        <div style={{ transform: `scale(${previewScale})`, transformOrigin: 'top left', width: `${100 / previewScale}%` }}>
          <ResumePreview resumeData={resumeData} template={template} />
        </div>
      </div>
    </div>
  );
};

export default ResumePreviewPane;
