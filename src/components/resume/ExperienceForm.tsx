
import React from "react";
import { Experience } from "@/lib/resumeData";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Plus, Trash } from "lucide-react";

interface ExperienceFormProps {
  experiences: Experience[];
  updateExperience: (id: string, field: string, value: any) => void;
  addExperience: () => void;
  removeExperience: (id: string) => void;
}

const ExperienceForm = ({
  experiences,
  updateExperience,
  addExperience,
  removeExperience
}: ExperienceFormProps) => {
  return (
    <div className="space-y-6">
      {experiences.map((exp, index) => (
        <Card key={exp.id} className="relative">
          <Button 
            variant="ghost" 
            size="icon" 
            className="absolute right-2 top-2 text-resume-gray-light hover:text-destructive"
            onClick={() => removeExperience(exp.id)}
          >
            <Trash className="h-4 w-4" />
          </Button>
          <CardContent className="p-6 space-y-4">
            <Badge variant="outline" className="mb-2">{`Position ${index + 1}`}</Badge>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor={`company-${exp.id}`}>Company</Label>
                <Input 
                  id={`company-${exp.id}`} 
                  value={exp.company} 
                  onChange={(e) => updateExperience(exp.id, "company", e.target.value)} 
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor={`position-${exp.id}`}>Position</Label>
                <Input 
                  id={`position-${exp.id}`} 
                  value={exp.position} 
                  onChange={(e) => updateExperience(exp.id, "position", e.target.value)} 
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor={`location-${exp.id}`}>Location</Label>
              <Input 
                id={`location-${exp.id}`} 
                value={exp.location} 
                onChange={(e) => updateExperience(exp.id, "location", e.target.value)} 
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <Label htmlFor={`start-date-${exp.id}`}>Start Date</Label>
                <Input 
                  id={`start-date-${exp.id}`} 
                  type="month"
                  value={exp.startDate} 
                  onChange={(e) => updateExperience(exp.id, "startDate", e.target.value)} 
                />
              </div>
              <div className="space-y-2">
                <Label 
                  htmlFor={`end-date-${exp.id}`}
                  className={exp.current ? "text-gray-400" : ""}
                >
                  End Date
                </Label>
                <Input 
                  id={`end-date-${exp.id}`} 
                  type="month"
                  value={exp.endDate} 
                  onChange={(e) => updateExperience(exp.id, "endDate", e.target.value)} 
                  disabled={exp.current}
                />
              </div>
              <div className="flex items-center space-x-2">
                <input 
                  id={`current-${exp.id}`} 
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300"
                  checked={exp.current} 
                  onChange={(e) => {
                    updateExperience(exp.id, "current", e.target.checked);
                    if (e.target.checked) {
                      updateExperience(exp.id, "endDate", "");
                    }
                  }} 
                />
                <Label htmlFor={`current-${exp.id}`}>Current Position</Label>
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor={`description-${exp.id}`}>Description</Label>
              <Textarea 
                id={`description-${exp.id}`} 
                rows={3}
                value={exp.description} 
                onChange={(e) => updateExperience(exp.id, "description", e.target.value)} 
              />
            </div>
          </CardContent>
        </Card>
      ))}
      
      <Button 
        onClick={addExperience} 
        variant="outline" 
        className="w-full flex gap-2 items-center"
      >
        <Plus className="h-4 w-4" /> Add Experience
      </Button>
    </div>
  );
};

export default ExperienceForm;
