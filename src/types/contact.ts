export interface ContactInfo {
  id: string;
  icon: string;
  title: string;
  details: string[];
}

export interface SocialLink {
  id: string;
  platform: string;
  icon: string;
  url: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}