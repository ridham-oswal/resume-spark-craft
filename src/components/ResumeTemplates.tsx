
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TemplateType } from "@/lib/resumeData";

interface ResumeTemplateProps {
  selectedTemplate: TemplateType;
  onSelectTemplate: (template: TemplateType) => void;
}

const ResumeTemplates = ({ selectedTemplate, onSelectTemplate }: ResumeTemplateProps) => {
  const templates: { id: TemplateType; name: string; description: string }[] = [
    {
      id: "classic",
      name: "Classic",
      description: "A traditional resume layout with a clean, professional look."
    },
    {
      id: "modern",
      name: "Modern",
      description: "A contemporary design with bold elements and creative layout."
    },
    {
      id: "minimal",
      name: "Minimal",
      description: "A sleek, minimalist approach that lets your content shine."
    }
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold">Choose a Template</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {templates.map((template) => (
          <Card 
            key={template.id} 
            className={`overflow-hidden transition-all cursor-pointer ${
              selectedTemplate === template.id 
                ? "ring-2 ring-resume-blue scale-[1.02]" 
                : "hover:shadow-lg"
            }`}
            onClick={() => onSelectTemplate(template.id)}
          >
            <div 
              className={`h-40 bg-gradient-to-br ${
                template.id === "classic" 
                  ? "from-resume-blue to-resume-blue-light" 
                  : template.id === "modern"
                    ? "from-purple-600 to-blue-500"
                    : "from-gray-700 to-gray-900"
              }`}
            />
            <CardContent className="p-4">
              <h3 className="font-semibold text-lg">{template.name}</h3>
              <p className="text-sm text-resume-gray mt-2">{template.description}</p>
              <Button 
                variant={selectedTemplate === template.id ? "default" : "outline"} 
                className="w-full mt-4"
                onClick={() => onSelectTemplate(template.id)}
              >
                {selectedTemplate === template.id ? "Selected" : "Select"}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ResumeTemplates;
