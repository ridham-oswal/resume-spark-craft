
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import { Download, ArrowLeft, FileImage, FileText, Printer, ZoomIn, ZoomOut } from "lucide-react";
import { initialResumeData, ResumeData, TemplateType } from "@/lib/resumeData";
import ResumeTemplates from "@/components/ResumeTemplates";
import ResumeForm from "@/components/ResumeForm";
import ResumePreview from "@/components/ResumePreview";
import { exportToPDF, exportToJPEG } from "@/lib/pdfExport";
import { useToast } from "@/components/ui/use-toast";
import Header from "@/components/Header";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Builder = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [resumeData, setResumeData] = useState<ResumeData>(initialResumeData);
  const [activeTab, setActiveTab] = useState<string>("content");
  const [selectedTemplate, setSelectedTemplate] = useState<TemplateType>("classic");
  const [previewScale, setPreviewScale] = useState<number>(0.7);
  const [isExporting, setIsExporting] = useState<boolean>(false);

  const handleUpdateResumeData = (data: ResumeData) => {
    setResumeData(data);
  };

  const handleDownloadPDF = () => {
    if (isExporting) return;
    
    setIsExporting(true);
    toast({
      title: "Processing",
      description: "Preparing your PDF. This may take a moment...",
    });
    
    // Ensure the preview is at full size before exporting
    const previewContainer = document.getElementById('preview-container');
    const previewElement = document.getElementById('resume-preview');
    
    if (previewElement && previewContainer) {
      // Save the original styles to restore later
      const originalTransform = previewElement.style.transform;
      const originalWidth = previewElement.style.width;
      const originalContainerWidth = previewContainer.style.width;
      const originalContainerOverflow = previewContainer.style.overflow;
      
      // Set to full size for export
      previewElement.style.transform = 'none';
      previewElement.style.width = '210mm';
      previewContainer.style.width = '210mm';
      previewContainer.style.overflow = 'visible';
      
      // Wait for styles to apply
      setTimeout(() => {
        try {
          exportToPDF(resumeData, selectedTemplate);
        } catch (error) {
          console.error('Error in PDF export:', error);
          toast({
            title: "Error",
            description: "Failed to export as PDF. Please try again.",
            variant: "destructive",
          });
        }
        
        // Restore original styles
        setTimeout(() => {
          previewElement.style.transform = originalTransform;
          previewElement.style.width = originalWidth;
          previewContainer.style.width = originalContainerWidth;
          previewContainer.style.overflow = originalContainerOverflow;
          setIsExporting(false);
        }, 1500);
      }, 500);
    } else {
      try {
        exportToPDF(resumeData, selectedTemplate);
      } catch (error) {
        console.error('Error in PDF export:', error);
        toast({
          title: "Error",
          description: "Failed to export as PDF. Please try again.",
          variant: "destructive",
        });
      }
      setIsExporting(false);
    }
  };
  
  const handleDownloadJPEG = () => {
    if (isExporting) return;
    
    setIsExporting(true);
    toast({
      title: "Processing",
      description: "Preparing your JPEG. This may take a moment...",
    });
    
    // Ensure the preview is at full size before exporting
    const previewContainer = document.getElementById('preview-container');
    const previewElement = document.getElementById('resume-preview');
    
    if (previewElement && previewContainer) {
      // Save the original styles to restore later
      const originalTransform = previewElement.style.transform;
      const originalWidth = previewElement.style.width;
      const originalContainerWidth = previewContainer.style.width;
      const originalContainerOverflow = previewContainer.style.overflow;
      
      // Set to full size for export
      previewElement.style.transform = 'none';
      previewElement.style.width = '210mm';
      previewContainer.style.width = '210mm';
      previewContainer.style.overflow = 'visible';
      
      // Wait for styles to apply
      setTimeout(() => {
        try {
          exportToJPEG(resumeData);
        } catch (error) {
          console.error('Error in JPEG export:', error);
          toast({
            title: "Error",
            description: "Failed to export as JPEG. Please try again.",
            variant: "destructive",
          });
        }
        
        // Restore original styles
        setTimeout(() => {
          previewElement.style.transform = originalTransform;
          previewElement.style.width = originalWidth;
          previewContainer.style.width = originalContainerWidth;
          previewContainer.style.overflow = originalContainerOverflow;
          setIsExporting(false);
        }, 1500);
      }, 500);
    } else {
      try {
        exportToJPEG(resumeData);
      } catch (error) {
        console.error('Error in JPEG export:', error);
        toast({
          title: "Error",
          description: "Failed to export as JPEG. Please try again.",
          variant: "destructive",
        });
      }
      setIsExporting(false);
    }
  };
  
  const handlePrint = () => {
    window.print();
    toast({
      title: "Print dialog opened",
      description: "Use your browser's print function to print your resume",
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      
      <div className="container py-8 flex-1">
        <div className="flex items-center justify-between mb-8">
          <Button 
            variant="ghost" 
            onClick={() => navigate("/")}
            className="gap-2"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Home
          </Button>
          
          <div className="flex gap-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button 
                  className="gap-2" 
                  disabled={isExporting}
                >
                  <Download className="h-4 w-4" />
                  {isExporting ? "Processing..." : "Download"}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={handleDownloadPDF} className="gap-2" disabled={isExporting}>
                  <FileText className="h-4 w-4" />
                  <span>PDF Format</span>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={handleDownloadJPEG} className="gap-2" disabled={isExporting}>
                  <FileImage className="h-4 w-4" />
                  <span>JPEG Format</span>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={handlePrint} className="gap-2">
                  <Printer className="h-4 w-4" />
                  <span>Print</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <Tabs 
              value={activeTab} 
              onValueChange={setActiveTab}
              className="w-full"
            >
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="content">Resume Content</TabsTrigger>
                <TabsTrigger value="template">Choose Template</TabsTrigger>
              </TabsList>
              
              <Card className="mt-4 overflow-hidden">
                <TabsContent value="content" className="p-0">
                  <div className="p-6">
                    <ResumeForm 
                      resumeData={resumeData} 
                      onUpdateResumeData={handleUpdateResumeData} 
                    />
                  </div>
                </TabsContent>
                
                <TabsContent value="template" className="p-0">
                  <div className="p-6">
                    <ResumeTemplates 
                      selectedTemplate={selectedTemplate} 
                      onSelectTemplate={setSelectedTemplate} 
                    />
                  </div>
                </TabsContent>
              </Card>
            </Tabs>
          </div>
          
          <div className="lg:sticky lg:top-20 self-start">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-semibold">Preview</h2>
              <div className="flex items-center gap-2 no-print">
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
              <div 
                id="preview-container"
                style={{ 
                  transform: `scale(${previewScale})`, 
                  transformOrigin: 'top left', 
                  width: `${100 / previewScale}%` 
                }}
              >
                <ResumePreview resumeData={resumeData} template={selectedTemplate} />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <footer className="bg-white border-t py-8 no-print">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <span className="text-lg font-semibold text-resume-blue">ResumeSpark</span>
              <span className="text-sm text-resume-gray">© {new Date().getFullYear()}</span>
            </div>
            <div className="flex gap-6">
              <a href="#" className="text-sm text-resume-gray hover:text-resume-blue transition-colors">Privacy</a>
              <a href="#" className="text-sm text-resume-gray hover:text-resume-blue transition-colors">Terms</a>
              <a href="#" className="text-sm text-resume-gray hover:text-resume-blue transition-colors">Help</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Builder;
