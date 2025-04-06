
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import ResumeForm from "@/components/ResumeForm";
import ResumeTemplates from "@/components/ResumeTemplates";
import { ResumeData, TemplateType } from "@/lib/resumeData";

interface ResumeBuilderTabsProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  resumeData: ResumeData;
  onUpdateResumeData: (data: ResumeData) => void;
  selectedTemplate: TemplateType;
  onSelectTemplate: (template: TemplateType) => void;
}

const ResumeBuilderTabs = ({
  activeTab,
  setActiveTab,
  resumeData,
  onUpdateResumeData,
  selectedTemplate,
  onSelectTemplate,
}: ResumeBuilderTabsProps) => {
  return (
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
              onUpdateResumeData={onUpdateResumeData} 
            />
          </div>
        </TabsContent>
        
        <TabsContent value="template" className="p-0">
          <div className="p-6">
            <ResumeTemplates 
              selectedTemplate={selectedTemplate} 
              onSelectTemplate={onSelectTemplate} 
            />
          </div>
        </TabsContent>
      </Card>
    </Tabs>
  );
};

export default ResumeBuilderTabs;
