
import { v4 as uuidv4 } from 'uuid';

export type TemplateType = 'classic' | 'modern' | 'minimal' | 'executive' | 'professional' | 'creative' | 'corporate' | 'tech';

export interface PersonalInfo {
  name: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  website: string;
  summary: string;
}

export interface Experience {
  id: string;
  position: string;
  company: string;
  location: string;
  startDate: string;
  endDate?: string;
  current: boolean;
  description: string;
}

export interface Education {
  id: string;
  institution: string;
  location: string;
  degree: string;
  field: string;
  startDate: string;
  endDate?: string;
  current: boolean;
  description: string;
}

export interface Skill {
  id: string;
  name: string;
  level?: number;
}

export interface Project {
  id: string;
  name: string;
  description: string;
  startDate: string;
  endDate?: string;
  current: boolean;
  url?: string;
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  date: string;
  expires?: string;
  url?: string;
}

export interface ResumeData {
  personalInfo: PersonalInfo;
  experience: Experience[];
  education: Education[];
  skills: Skill[];
  projects: Project[];
  certifications: Certification[];
}

export const initialResumeData: ResumeData = {
  personalInfo: {
    name: 'John Doe',
    title: 'Software Engineer',
    email: 'john.doe@example.com',
    phone: '(555) 123-4567',
    location: 'San Francisco, CA',
    website: 'johndoe.com',
    summary: 'Experienced software engineer with a passion for building user-friendly applications. Over 5 years of experience developing web and mobile solutions with modern technologies including React, TypeScript, and Node.js.',
  },
  experience: [
    {
      id: uuidv4(),
      position: 'Senior Software Engineer',
      company: 'Tech Solutions Inc.',
      location: 'San Francisco, CA',
      startDate: '2021-06-15',
      current: true,
      description: 'Lead front-end development for a SaaS platform using React and TypeScript. Implemented responsive designs, state management with Redux, and improved page load times by 40%.',
    },
    {
      id: uuidv4(),
      position: 'Software Engineer',
      company: 'WebDev Innovations',
      location: 'San Jose, CA',
      startDate: '2019-03-01',
      endDate: '2021-06-01',
      current: false,
      description: 'Developed responsive web applications using React and Node.js. Collaborated with designers and product managers to deliver high-quality user experiences.',
    },
    {
      id: uuidv4(),
      position: 'Junior Developer',
      company: 'StartApp Studio',
      location: 'Oakland, CA',
      startDate: '2018-01-15',
      endDate: '2019-02-28',
      current: false,
      description: 'Assisted in the development of mobile applications. Implemented UI components and integrated RESTful APIs.',
    }
  ],
  education: [
    {
      id: uuidv4(),
      institution: 'University of California, Berkeley',
      location: 'Berkeley, CA',
      degree: 'Bachelor of Science',
      field: 'Computer Science',
      startDate: '2014-09-01',
      endDate: '2018-05-15',
      current: false,
      description: 'Focus on Software Engineering and Machine Learning. Dean\'s List for academic excellence.',
    }
  ],
  skills: [
    { id: uuidv4(), name: 'React', level: 95 },
    { id: uuidv4(), name: 'TypeScript', level: 90 },
    { id: uuidv4(), name: 'Node.js', level: 85 },
    { id: uuidv4(), name: 'JavaScript', level: 95 },
    { id: uuidv4(), name: 'HTML/CSS', level: 90 },
    { id: uuidv4(), name: 'Redux', level: 80 },
    { id: uuidv4(), name: 'REST APIs', level: 85 },
    { id: uuidv4(), name: 'Git', level: 90 }
  ],
  projects: [],
  certifications: []
};

// Helper function to create a new experience
export const createNewExperience = (): Experience => ({
  id: uuidv4(),
  position: '',
  company: '',
  location: '',
  startDate: '',
  current: false,
  description: '',
});

// Helper function to create a new education
export const createNewEducation = (): Education => ({
  id: uuidv4(),
  institution: '',
  location: '',
  degree: '',
  field: '',
  startDate: '',
  current: false,
  description: '',
});

// Helper function to create a new skill
export const createNewSkill = (): Skill => ({
  id: uuidv4(),
  name: '',
  level: 50,
});

// Helper function to create a new project
export const createNewProject = (): Project => ({
  id: uuidv4(),
  name: '',
  description: '',
  startDate: '',
  current: false,
});

// Helper function to create a new certification
export const createNewCertification = (): Certification => ({
  id: uuidv4(),
  name: '',
  issuer: '',
  date: '',
});
