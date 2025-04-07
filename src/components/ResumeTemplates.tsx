
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { TemplateType } from "@/lib/resumeData";

interface ResumeTemplatesProps {
  selectedTemplate: TemplateType;
  onSelectTemplate: (template: TemplateType) => void;
}

const ResumeTemplates = ({ selectedTemplate, onSelectTemplate }: ResumeTemplatesProps) => {
  // All available templates
  const templates = [
    { id: "classic", name: "Classic", description: "Traditional and professional layout" },
    { id: "modern", name: "Modern", description: "Clean design with a colored header" },
    { id: "minimal", name: "Minimal", description: "Simple and elegant design" },
    { id: "executive", name: "Executive", description: "Professional layout for executives" },
    { id: "professional", name: "Professional", description: "Elegant design with green accents" },
    { id: "creative", name: "Creative", description: "Unique layout with amber sidebar" },
    { id: "corporate", name: "Corporate", description: "Business-oriented design with slate accents" },
    { id: "tech", name: "Tech", description: "Modern tech industry focused layout" },
  ];

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold">Choose a Template</h2>
      <p className="text-resume-gray">
        Select a template that best represents your professional identity.
      </p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
        {templates.map((template) => (
          <Card 
            key={template.id}
            className={`cursor-pointer transition-all ${
              selectedTemplate === template.id 
                ? "border-primary ring-2 ring-primary ring-opacity-50" 
                : "hover:border-gray-300"
            }`}
            onClick={() => onSelectTemplate(template.id as TemplateType)}
          >
            <CardContent className="p-4">
              <div className="flex flex-col h-full">
                <div className="mb-3 flex justify-between items-center">
                  <h3 className="font-medium">{template.name}</h3>
                  
                  {selectedTemplate === template.id && (
                    <span className="text-primary text-xs font-medium bg-primary/10 px-2 py-0.5 rounded">
                      Selected
                    </span>
                  )}
                </div>
                
                <p className="text-sm text-resume-gray">
                  {template.description}
                </p>
                
                <div className={`mt-3 h-24 bg-gray-100 rounded flex items-center justify-center ${
                  template.id === "classic" ? "bg-white border" : ""
                }`}>
                  <div className={`w-full h-full rounded flex flex-col p-2`}>
                    {/* Template preview thumbnail */}
                    {template.id === "classic" && (
                      <div className="flex flex-col h-full">
                        <div className="h-4 w-24 bg-resume-blue mb-1 mx-auto"></div>
                        <div className="h-2 w-16 bg-gray-300 mb-2 mx-auto"></div>
                        <div className="h-2 w-full bg-gray-200 mb-1"></div>
                        <div className="h-2 w-full bg-gray-200 mb-1"></div>
                        <div className="h-2 w-3/4 bg-gray-200"></div>
                      </div>
                    )}
                    
                    {template.id === "modern" && (
                      <div className="flex flex-col h-full">
                        <div className="h-5 bg-resume-blue w-full mb-1"></div>
                        <div className="h-2 w-full bg-gray-200 mt-1 mb-1"></div>
                        <div className="h-2 w-full bg-gray-200 mb-2"></div>
                        <div className="flex">
                          <div className="w-8/12 pr-1">
                            <div className="h-2 w-full bg-gray-300 mb-1"></div>
                            <div className="h-2 w-full bg-gray-300 mb-1"></div>
                          </div>
                          <div className="w-4/12 pl-1">
                            <div className="h-2 w-full bg-resume-blue-light mb-1"></div>
                            <div className="h-2 w-full bg-resume-blue-light"></div>
                          </div>
                        </div>
                      </div>
                    )}
                    
                    {template.id === "minimal" && (
                      <div className="flex flex-col h-full">
                        <div className="h-3 w-20 bg-gray-700 mb-1"></div>
                        <div className="h-2 w-16 bg-gray-300 mb-3"></div>
                        <div className="h-2 w-12 bg-gray-500 uppercase text-xs mb-1"></div>
                        <div className="h-2 w-full bg-gray-200 mb-1"></div>
                        <div className="h-2 w-full bg-gray-200 mb-1"></div>
                        <div className="h-2 w-3/4 bg-gray-200"></div>
                      </div>
                    )}
                    
                    {template.id === "executive" && (
                      <div className="flex flex-col h-full">
                        <div className="h-4 bg-gray-800 w-full mb-2"></div>
                        <div className="flex h-full">
                          <div className="w-1/3 pr-1 border-r border-gray-300">
                            <div className="h-2 w-full bg-gray-400 mb-1"></div>
                            <div className="h-2 w-full bg-gray-400"></div>
                          </div>
                          <div className="w-2/3 pl-2">
                            <div className="h-2 w-full bg-gray-300 mb-1"></div>
                            <div className="h-2 w-full bg-gray-300 mb-1"></div>
                            <div className="h-2 w-3/4 bg-gray-300"></div>
                          </div>
                        </div>
                      </div>
                    )}
                    
                    {template.id === "professional" && (
                      <div className="flex flex-col h-full">
                        <div className="h-4 w-full border-b-2 border-resume-green mb-1"></div>
                        <div className="h-2 w-24 bg-resume-green mb-2"></div>
                        <div className="h-2 w-full bg-gray-200 mb-1"></div>
                        <div className="h-2 w-full bg-gray-200 mb-1"></div>
                        <div className="flex mt-1">
                          <div className="w-1 h-1 rounded-full bg-resume-green mr-1"></div>
                          <div className="h-2 w-16 bg-gray-200"></div>
                        </div>
                      </div>
                    )}
                    
                    {template.id === "creative" && (
                      <div className="flex h-full">
                        <div className="w-1/3 bg-resume-amber h-full"></div>
                        <div className="w-2/3 pl-1">
                          <div className="h-2 w-16 bg-resume-amber mb-1"></div>
                          <div className="h-2 w-full bg-gray-200 mb-1"></div>
                          <div className="h-2 w-full bg-gray-200 mb-1"></div>
                          <div className="h-2 w-3/4 bg-gray-200"></div>
                        </div>
                      </div>
                    )}
                    
                    {template.id === "corporate" && (
                      <div className="flex flex-col h-full">
                        <div className="h-4 bg-slate-800 w-full mb-2"></div>
                        <div className="flex items-center mb-1">
                          <div className="w-1 h-3 bg-slate-800 mr-1"></div>
                          <div className="h-2 w-16 bg-slate-700"></div>
                        </div>
                        <div className="h-2 w-full bg-gray-200 mb-1"></div>
                        <div className="h-2 w-full bg-gray-200 mb-1"></div>
                        <div className="h-2 w-3/4 bg-gray-200"></div>
                      </div>
                    )}
                    
                    {template.id === "tech" && (
                      <div className="flex h-full">
                        <div className="w-2/3 pr-1">
                          <div className="flex items-center mb-1">
                            <div className="w-1 h-1 bg-indigo-700 mr-1"></div>
                            <div className="h-2 w-16 bg-indigo-700"></div>
                          </div>
                          <div className="h-2 w-full bg-gray-200 mb-1"></div>
                          <div className="h-2 w-full bg-gray-200 mb-1"></div>
                          <div className="h-2 w-full bg-gray-200"></div>
                        </div>
                        <div className="w-1/3 bg-indigo-50 h-full pl-1">
                          <div className="h-2 w-full bg-indigo-200 mb-1"></div>
                          <div className="h-1 w-full bg-indigo-500 mb-1"></div>
                          <div className="h-2 w-full bg-indigo-200 mb-1"></div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ResumeTemplates;
