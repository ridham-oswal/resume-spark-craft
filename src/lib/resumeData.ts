
export interface ResumeData {
  personalInfo: {
    name: string;
    title: string;
    email: string;
    phone: string;
    location: string;
    website?: string;
    summary: string;
  };
  experience: {
    id: string;
    company: string;
    position: string;
    startDate: string;
    endDate: string;
    current: boolean;
    description: string;
  }[];
  education: {
    id: string;
    institution: string;
    degree: string;
    field: string;
    startDate: string;
    endDate: string;
    current: boolean;
    description?: string;
  }[];
  skills: {
    id: string;
    name: string;
    level?: number;
  }[];
}

export type TemplateType = 'classic' | 'modern' | 'minimal' | 'executive' | 'professional' | 'creative';

export const initialResumeData: ResumeData = {
  personalInfo: {
    name: "John Doe",
    title: "Software Developer",
    email: "john@example.com",
    phone: "(555) 123-4567",
    location: "San Francisco, CA",
    website: "johndoe.com",
    summary: "Experienced software developer with a passion for creating elegant solutions to complex problems. Skilled in JavaScript, React, and Node.js."
  },
  experience: [
    {
      id: "exp1",
      company: "Tech Solutions Inc.",
      position: "Senior Developer",
      startDate: "2020-01",
      endDate: "",
      current: true,
      description: "Lead development of customer-facing web applications. Implemented CI/CD pipelines and mentored junior developers."
    },
    {
      id: "exp2",
      company: "Digital Innovations",
      position: "Web Developer",
      startDate: "2017-03",
      endDate: "2019-12",
      current: false,
      description: "Built and maintained responsive websites and web applications using React and Node.js."
    }
  ],
  education: [
    {
      id: "edu1",
      institution: "University of California",
      degree: "Bachelor of Science",
      field: "Computer Science",
      startDate: "2013-09",
      endDate: "2017-05",
      current: false,
      description: "Focus on software engineering and database systems. Graduated with honors."
    }
  ],
  skills: [
    { id: "skill1", name: "JavaScript", level: 90 },
    { id: "skill2", name: "React", level: 85 },
    { id: "skill3", name: "Node.js", level: 80 },
    { id: "skill4", name: "HTML/CSS", level: 90 },
    { id: "skill5", name: "Python", level: 70 }
  ]
};
