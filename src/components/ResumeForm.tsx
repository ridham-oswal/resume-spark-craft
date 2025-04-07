
import React from "react";
import { ResumeData } from "@/lib/resumeData";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PersonalInfoForm from "./resume/PersonalInfoForm";
import ExperienceForm from "./resume/ExperienceForm";
import EducationForm from "./resume/EducationForm";
import SkillsForm from "./resume/SkillsForm";

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
      location: "",
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
      location: "",
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
          <PersonalInfoForm
            personalInfo={resumeData.personalInfo}
            updatePersonalInfo={updatePersonalInfo}
          />
        </TabsContent>
        
        <TabsContent value="experience" className="space-y-6">
          <ExperienceForm
            experiences={resumeData.experience}
            updateExperience={updateExperience}
            addExperience={addExperience}
            removeExperience={removeExperience}
          />
        </TabsContent>
        
        <TabsContent value="education" className="space-y-6">
          <EducationForm
            education={resumeData.education}
            updateEducation={updateEducation}
            addEducation={addEducation}
            removeEducation={removeEducation}
          />
        </TabsContent>
        
        <TabsContent value="skills" className="space-y-6">
          <SkillsForm
            skills={resumeData.skills}
            updateSkill={updateSkill}
            addSkill={addSkill}
            removeSkill={removeSkill}
          />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ResumeForm;
