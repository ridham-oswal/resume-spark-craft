
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Download, ArrowLeft } from "lucide-react";
import { initialResumeData, ResumeData, TemplateType } from "@/lib/resumeData";
import ResumeTemplates from "@/components/ResumeTemplates";
import ResumeForm from "@/components/ResumeForm";
import ResumePreview from "@/components/ResumePreview";
import { exportToPDF } from "@/lib/pdfExport";
import { useToast } from "@/components/ui/use-toast";
import Header from "@/components/Header";

const Builder = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [resumeData, setResumeData] = useState<ResumeData>(initialResumeData);
  const [activeTab, setActiveTab] = useState<string>("content");
  const [selectedTemplate, setSelectedTemplate] = useState<TemplateType>("classic");

  const handleUpdateResumeData = (data: ResumeData) => {
    setResumeData(data);
  };

  const handleDownload = () => {
    exportToPDF(resumeData, selectedTemplate);
    toast({
      title: "Success",
      description: "Your resume has been downloaded",
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
            <Button 
              onClick={handleDownload}
              className="gap-2"
            >
              <Download className="h-4 w-4" />
              Download PDF
            </Button>
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
            <h2 className="text-2xl font-semibold mb-6">Preview</h2>
            <div className="border rounded-lg overflow-hidden shadow-lg scale-[0.8] origin-top-left">
              <ResumePreview resumeData={resumeData} template={selectedTemplate} />
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
