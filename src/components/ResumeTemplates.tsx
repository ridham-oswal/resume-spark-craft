
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TemplateType } from "@/lib/resumeData";
import { Badge } from "@/components/ui/badge";

interface ResumeTemplateProps {
  selectedTemplate: TemplateType;
  onSelectTemplate: (template: TemplateType) => void;
}

const ResumeTemplates = ({ selectedTemplate, onSelectTemplate }: ResumeTemplateProps) => {
  const templates: { 
    id: TemplateType; 
    name: string; 
    description: string; 
    atsScore: number;
    gradient: string;
    popular?: boolean;
  }[] = [
    {
      id: "classic",
      name: "Classic",
      description: "A traditional resume layout with a clean, professional look.",
      atsScore: 95,
      gradient: "from-resume-blue to-resume-blue-light",
      popular: true
    },
    {
      id: "modern",
      name: "Modern",
      description: "A contemporary design with bold elements and creative layout.",
      atsScore: 88,
      gradient: "from-purple-600 to-blue-500"
    },
    {
      id: "minimal",
      name: "Minimal",
      description: "A sleek, minimalist approach that lets your content shine.",
      atsScore: 92,
      gradient: "from-gray-700 to-gray-900"
    },
    {
      id: "executive",
      name: "Executive",
      description: "Sophisticated design for senior professionals and executives.",
      atsScore: 97,
      gradient: "from-slate-800 to-gray-700",
      popular: true
    },
    {
      id: "professional",
      name: "Professional",
      description: "Clean and organized layout focusing on readability and structure.",
      atsScore: 99,
      gradient: "from-emerald-600 to-teal-500"
    },
    {
      id: "creative",
      name: "Creative",
      description: "Bold design for creative roles while maintaining ATS compatibility.",
      atsScore: 85,
      gradient: "from-amber-500 to-orange-400"
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold">Choose a Template</h2>
        <div className="flex items-center gap-2">
          <span className="text-sm text-resume-gray">ATS-Friendly</span>
          <Badge variant="outline" className="bg-blue-50 text-resume-blue">?</Badge>
        </div>
      </div>
      <p className="text-resume-gray text-sm">All templates are ATS-friendly with varying optimization scores. Select a template that best suits your desired role and industry.</p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {templates.map((template) => (
          <Card 
            key={template.id} 
            className={`overflow-hidden transition-all hover:shadow-md ${
              selectedTemplate === template.id 
                ? "ring-2 ring-resume-blue scale-[1.02]" 
                : "hover:shadow-lg"
            }`}
            onClick={() => onSelectTemplate(template.id as TemplateType)}
          >
            <div className="relative">
              <div 
                className={`h-40 bg-gradient-to-br ${template.gradient}`}
              />
              {template.popular && (
                <Badge className="absolute top-2 right-2 bg-white/80 text-resume-blue shadow-sm backdrop-blur-sm">
                  Popular
                </Badge>
              )}
            </div>
            <CardContent className="p-4">
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-semibold text-lg">{template.name}</h3>
                <div className="flex items-center">
                  <Badge variant={template.atsScore >= 90 ? "default" : "outline"} className={
                    template.atsScore >= 90 
                      ? "bg-green-100 text-green-800 hover:bg-green-100" 
                      : "bg-yellow-100 text-yellow-800 hover:bg-yellow-100"
                  }>
                    ATS {template.atsScore}%
                  </Badge>
                </div>
              </div>
              <p className="text-sm text-resume-gray mb-4">{template.description}</p>
              <Button 
                variant={selectedTemplate === template.id ? "default" : "outline"} 
                className="w-full"
                onClick={() => onSelectTemplate(template.id as TemplateType)}
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
