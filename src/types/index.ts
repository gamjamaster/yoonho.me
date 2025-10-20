export interface PersonalInfo {
  name: string;
  title: string;
  university: string;
  major: string;
  year: string;
  email: string;
  bio: string;
}

export interface Skill {
  name: string;
  level: number;
  category: 'primary' | 'secondary';
}

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  features: string[];
  githubUrl?: string;
  liveUrl?: string;
  image?: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  expiryDate?: string;
  description: string;
  credentialUrl?: string;
  skills: string[];
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  date: string;
  category: 'academic' | 'competition' | 'project' | 'certification' | 'other';
  level: 'local' | 'regional' | 'national' | 'international';
  details?: string[];
}