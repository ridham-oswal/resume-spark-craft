
import React from "react";
import { Skill } from "@/lib/resumeData";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Plus, Trash } from "lucide-react";

interface SkillsFormProps {
  skills: Skill[];
  updateSkill: (id: string, field: string, value: any) => void;
  addSkill: () => void;
  removeSkill: (id: string) => void;
}

const SkillsForm = ({
  skills,
  updateSkill,
  addSkill,
  removeSkill
}: SkillsFormProps) => {
  return (
    <Card>
      <CardContent className="p-6 space-y-4">
        {skills.map((skill, index) => (
          <div key={skill.id} className="flex items-center gap-4">
            <div className="flex-grow">
              <div className="flex items-center gap-4 mb-2">
                <Label htmlFor={`skill-${skill.id}`} className="w-24">Skill {index + 1}</Label>
                <Input 
                  id={`skill-${skill.id}`} 
                  className="flex-grow"
                  value={skill.name} 
                  onChange={(e) => updateSkill(skill.id, "name", e.target.value)} 
                />
              </div>
              <div className="flex items-center gap-4">
                <Label htmlFor={`level-${skill.id}`} className="w-24">Level</Label>
                <input 
                  id={`level-${skill.id}`} 
                  type="range"
                  min="0"
                  max="100"
                  className="flex-grow h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  value={skill.level || 50} 
                  onChange={(e) => updateSkill(skill.id, "level", parseInt(e.target.value))} 
                />
                <span className="w-10 text-center">{skill.level || 50}%</span>
              </div>
            </div>
            <Button 
              variant="ghost" 
              size="icon" 
              className="text-resume-gray-light hover:text-destructive mt-1"
              onClick={() => removeSkill(skill.id)}
            >
              <Trash className="h-4 w-4" />
            </Button>
          </div>
        ))}
        
        <Separator className="my-4" />
        
        <Button 
          onClick={addSkill} 
          variant="outline" 
          className="w-full flex gap-2 items-center"
        >
          <Plus className="h-4 w-4" /> Add Skill
        </Button>
      </CardContent>
    </Card>
  );
};

export default SkillsForm;
