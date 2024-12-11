import { ContactInfo, SocialLink } from '../types/contact';

export const contactInfo: ContactInfo[] = [
  {
    id: '1',
    icon: 'MapPin',
    title: 'Visit Us',
    details: [
      'Alumni Relations Office',
      'University Campus, Building A',
      'New York, NY 10001'
    ]
  },
  {
    id: '2',
    icon: 'Phone',
    title: 'Call Us',
    details: [
      '+1 (555) 123-4567',
      'Mon-Fri 9:00 AM - 5:00 PM EST'
    ]
  },
  {
    id: '3',
    icon: 'Mail',
    title: 'Email Us',
    details: [
      'alumni@university.edu',
      'support@university.edu'
    ]
  }
];

export const socialLinks: SocialLink[] = [
  {
    id: '1',
    platform: 'LinkedIn',
    icon: 'Linkedin',
    url: 'https://linkedin.com'
  },
  {
    id: '2',
    platform: 'Twitter',
    icon: 'Twitter',
    url: 'https://twitter.com'
  },
  {
    id: '3',
    platform: 'Facebook',
    icon: 'Facebook',
    url: 'https://facebook.com'
  }
];