
import React, { useState } from "react";
import { ResumeData } from "@/lib/resumeData";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Plus, Trash } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface ResumeFormProps {
  resumeData: ResumeData;
  onUpdateResumeData: (data: ResumeData) => void;
}

const ResumeForm = ({ resumeData, onUpdateResumeData }: ResumeFormProps) => {
  // Helper function to update personal info
  const updatePersonalInfo = (field: string, value: string) => {
    onUpdateResumeData({
      ...resumeData,
      personalInfo: {
        ...resumeData.personalInfo,
        [field]: value
      }
    });
  };

  // Helper function to add a new experience
  const addExperience = () => {
    const newExp = {
      id: `exp${Date.now()}`,
      company: "",
      position: "",
      startDate: "",
      endDate: "",
      current: false,
      description: ""
    };
    
    onUpdateResumeData({
      ...resumeData,
      experience: [...resumeData.experience, newExp]
    });
  };

  // Helper function to update experience
  const updateExperience = (id: string, field: string, value: any) => {
    const updatedExperience = resumeData.experience.map(exp => {
      if (exp.id === id) {
        return { ...exp, [field]: value };
      }
      return exp;
    });
    
    onUpdateResumeData({
      ...resumeData,
      experience: updatedExperience
    });
  };

  // Helper function to remove experience
  const removeExperience = (id: string) => {
    const updatedExperience = resumeData.experience.filter(exp => exp.id !== id);
    
    onUpdateResumeData({
      ...resumeData,
      experience: updatedExperience
    });
  };

  // Helper function to add education
  const addEducation = () => {
    const newEdu = {
      id: `edu${Date.now()}`,
      institution: "",
      degree: "",
      field: "",
      startDate: "",
      endDate: "",
      current: false,
      description: ""
    };
    
    onUpdateResumeData({
      ...resumeData,
      education: [...resumeData.education, newEdu]
    });
  };

  // Helper function to update education
  const updateEducation = (id: string, field: string, value: any) => {
    const updatedEducation = resumeData.education.map(edu => {
      if (edu.id === id) {
        return { ...edu, [field]: value };
      }
      return edu;
    });
    
    onUpdateResumeData({
      ...resumeData,
      education: updatedEducation
    });
  };

  // Helper function to remove education
  const removeEducation = (id: string) => {
    const updatedEducation = resumeData.education.filter(edu => edu.id !== id);
    
    onUpdateResumeData({
      ...resumeData,
      education: updatedEducation
    });
  };

  // Helper function to add skill
  const addSkill = () => {
    const newSkill = {
      id: `skill${Date.now()}`,
      name: "",
      level: 50
    };
    
    onUpdateResumeData({
      ...resumeData,
      skills: [...resumeData.skills, newSkill]
    });
  };

  // Helper function to update skill
  const updateSkill = (id: string, field: string, value: any) => {
    const updatedSkills = resumeData.skills.map(skill => {
      if (skill.id === id) {
        return { ...skill, [field]: value };
      }
      return skill;
    });
    
    onUpdateResumeData({
      ...resumeData,
      skills: updatedSkills
    });
  };

  // Helper function to remove skill
  const removeSkill = (id: string) => {
    const updatedSkills = resumeData.skills.filter(skill => skill.id !== id);
    
    onUpdateResumeData({
      ...resumeData,
      skills: updatedSkills
    });
  };

  return (
    <div className="space-y-6 mb-8">
      <h2 className="text-2xl font-semibold">Resume Content</h2>
      
      <Tabs defaultValue="personal">
        <TabsList className="mb-6">
          <TabsTrigger value="personal">Personal Info</TabsTrigger>
          <TabsTrigger value="experience">Experience</TabsTrigger>
          <TabsTrigger value="education">Education</TabsTrigger>
          <TabsTrigger value="skills">Skills</TabsTrigger>
        </TabsList>
        
        <TabsContent value="personal" className="space-y-6">
          <Card>
            <CardContent className="p-6 space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input 
                    id="name" 
                    value={resumeData.personalInfo.name} 
                    onChange={(e) => updatePersonalInfo("name", e.target.value)} 
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="title">Professional Title</Label>
                  <Input 
                    id="title" 
                    value={resumeData.personalInfo.title} 
                    onChange={(e) => updatePersonalInfo("title", e.target.value)} 
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input 
                    id="email" 
                    type="email"
                    value={resumeData.personalInfo.email} 
                    onChange={(e) => updatePersonalInfo("email", e.target.value)} 
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input 
                    id="phone" 
                    value={resumeData.personalInfo.phone} 
                    onChange={(e) => updatePersonalInfo("phone", e.target.value)} 
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="location">Location</Label>
                  <Input 
                    id="location" 
                    value={resumeData.personalInfo.location} 
                    onChange={(e) => updatePersonalInfo("location", e.target.value)} 
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="website">Website (Optional)</Label>
                  <Input 
                    id="website" 
                    value={resumeData.personalInfo.website || ''} 
                    onChange={(e) => updatePersonalInfo("website", e.target.value)} 
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="summary">Professional Summary</Label>
                <Textarea 
                  id="summary" 
                  rows={4}
                  value={resumeData.personalInfo.summary} 
                  onChange={(e) => updatePersonalInfo("summary", e.target.value)} 
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="experience" className="space-y-6">
          {resumeData.experience.map((exp, index) => (
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
        </TabsContent>
        
        <TabsContent value="education" className="space-y-6">
          {resumeData.education.map((edu, index) => (
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
        </TabsContent>
        
        <TabsContent value="skills" className="space-y-6">
          <Card>
            <CardContent className="p-6 space-y-4">
              {resumeData.skills.map((skill, index) => (
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
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ResumeForm;
