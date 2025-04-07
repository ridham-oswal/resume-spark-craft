
import React from "react";
import { Education } from "@/lib/resumeData";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Plus, Trash } from "lucide-react";

interface EducationFormProps {
  education: Education[];
  updateEducation: (id: string, field: string, value: any) => void;
  addEducation: () => void;
  removeEducation: (id: string) => void;
}

const EducationForm = ({
  education,
  updateEducation,
  addEducation,
  removeEducation
}: EducationFormProps) => {
  return (
    <div className="space-y-6">
      {education.map((edu, index) => (
        <Card key={edu.id} className="relative">
          <Button 
            variant="ghost" 
            size="icon" 
            className="absolute right-2 top-2 text-resume-gray-light hover:text-destructive"
            onClick={() => removeEducation(edu.id)}
          >
            <Trash className="h-4 w-4" />
          </Button>
          <CardContent className="p-6 space-y-4">
            <Badge variant="outline" className="mb-2">{`Education ${index + 1}`}</Badge>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor={`institution-${edu.id}`}>Institution</Label>
                <Input 
                  id={`institution-${edu.id}`} 
                  value={edu.institution} 
                  onChange={(e) => updateEducation(edu.id, "institution", e.target.value)} 
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor={`degree-${edu.id}`}>Degree</Label>
                <Input 
                  id={`degree-${edu.id}`} 
                  value={edu.degree} 
                  onChange={(e) => updateEducation(edu.id, "degree", e.target.value)} 
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor={`location-${edu.id}`}>Location</Label>
              <Input 
                id={`location-${edu.id}`} 
                value={edu.location} 
                onChange={(e) => updateEducation(edu.id, "location", e.target.value)} 
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor={`field-${edu.id}`}>Field of Study</Label>
              <Input 
                id={`field-${edu.id}`} 
                value={edu.field} 
                onChange={(e) => updateEducation(edu.id, "field", e.target.value)} 
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <Label htmlFor={`edu-start-date-${edu.id}`}>Start Date</Label>
                <Input 
                  id={`edu-start-date-${edu.id}`} 
                  type="month"
                  value={edu.startDate} 
                  onChange={(e) => updateEducation(edu.id, "startDate", e.target.value)} 
                />
              </div>
              <div className="space-y-2">
                <Label 
                  htmlFor={`edu-end-date-${edu.id}`}
                  className={edu.current ? "text-gray-400" : ""}
                >
                  End Date
                </Label>
                <Input 
                  id={`edu-end-date-${edu.id}`} 
                  type="month"
                  value={edu.endDate} 
                  onChange={(e) => updateEducation(edu.id, "endDate", e.target.value)} 
                  disabled={edu.current}
                />
              </div>
              <div className="flex items-center space-x-2">
                <input 
                  id={`current-${edu.id}`} 
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300"
                  checked={edu.current} 
                  onChange={(e) => {
                    updateEducation(edu.id, "current", e.target.checked);
                    if (e.target.checked) {
                      updateEducation(edu.id, "endDate", "");
                    }
                  }} 
                />
                <Label htmlFor={`current-${edu.id}`}>Current Student</Label>
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor={`edu-description-${edu.id}`}>Description (Optional)</Label>
              <Textarea 
                id={`edu-description-${edu.id}`} 
                rows={2}
                value={edu.description || ''} 
                onChange={(e) => updateEducation(edu.id, "description", e.target.value)} 
              />
            </div>
          </CardContent>
        </Card>
      ))}
      
      <Button 
        onClick={addEducation} 
        variant="outline" 
        className="w-full flex gap-2 items-center"
      >
        <Plus className="h-4 w-4" /> Add Education
      </Button>
    </div>
  );
};

export default EducationForm;
