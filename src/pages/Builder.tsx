
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Download, ArrowLeft, FileImage, FileText, Printer } from "lucide-react";
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

  const handleUpdateResumeData = (data: ResumeData) => {
    setResumeData(data);
  };

  const handleDownloadPDF = () => {
    exportToPDF(resumeData, selectedTemplate);
  };
  
  const handleDownloadJPEG = () => {
    exportToJPEG(resumeData);
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
                <Button className="gap-2">
                  <Download className="h-4 w-4" />
                  Download
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={handleDownloadPDF} className="gap-2">
                  <FileText className="h-4 w-4" />
                  <span>PDF Format</span>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={handleDownloadJPEG} className="gap-2">
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
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-500">Zoom:</span>
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={() => setPreviewScale(prev => Math.max(0.4, prev - 0.1))}
                >-</Button>
                <span className="text-sm">{Math.round(previewScale * 100)}%</span>
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={() => setPreviewScale(prev => Math.min(1, prev + 0.1))}
                >+</Button>
              </div>
            </div>
            <div className="border rounded-lg overflow-auto shadow-lg max-h-[calc(100vh-250px)]">
              <div style={{ transform: `scale(${previewScale})`, transformOrigin: 'top left', width: `${100 / previewScale}%` }}>
                <ResumePreview resumeData={resumeData} template={selectedTemplate} />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <footer className="bg-white border-t py-8">
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
