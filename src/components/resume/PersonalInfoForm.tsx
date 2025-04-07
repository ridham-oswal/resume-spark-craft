
import React from "react";
import { PersonalInfo } from "@/lib/resumeData";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";

interface PersonalInfoFormProps {
  personalInfo: PersonalInfo;
  updatePersonalInfo: (field: string, value: string) => void;
}

const PersonalInfoForm = ({ personalInfo, updatePersonalInfo }: PersonalInfoFormProps) => {
  return (
    <Card>
      <CardContent className="p-6 space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="name">Full Name</Label>
            <Input 
              id="name" 
              value={personalInfo.name} 
              onChange={(e) => updatePersonalInfo("name", e.target.value)} 
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="title">Professional Title</Label>
            <Input 
              id="title" 
              value={personalInfo.title} 
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
              value={personalInfo.email} 
              onChange={(e) => updatePersonalInfo("email", e.target.value)} 
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Phone</Label>
            <Input 
              id="phone" 
              value={personalInfo.phone} 
              onChange={(e) => updatePersonalInfo("phone", e.target.value)} 
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="location">Location</Label>
            <Input 
              id="location" 
              value={personalInfo.location} 
              onChange={(e) => updatePersonalInfo("location", e.target.value)} 
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="website">Website (Optional)</Label>
            <Input 
              id="website" 
              value={personalInfo.website || ''} 
              onChange={(e) => updatePersonalInfo("website", e.target.value)} 
            />
          </div>
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="summary">Professional Summary</Label>
          <Textarea 
            id="summary" 
            rows={4}
            value={personalInfo.summary} 
            onChange={(e) => updatePersonalInfo("summary", e.target.value)} 
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default PersonalInfoForm;
