// ============================================================
// Portfolio shared types
// ============================================================

export interface PersonalInfo {
  name: string;
  title: string;
  description: string;
  email: string;
  phone: string;
  location: string;
}

export interface SocialMedia {
  id?: string;
  platform: string;
  url: string;
  username: string;
  icon: string;
  isActive: boolean;
}

export interface Skill {
  id?: string;
  name: string;
  category: string;
  icon: string;
  years_experience: number;
}

export interface Certification {
  id?: string;
  name: string;
  issuer: string;
  issue_date: string;
  icon: string;
  expiry_date?: string;
  credential_id?: string;
  credential_url?: string;
  description?: string;
  image_url?: string;
}

export interface Project {
  id?: string;
  title: string;
  description: string;
  tags: string[];
  disciplines: string[];
  github_url?: string;
  live_url?: string;
  image_url?: string;
  featured?: boolean;
}
