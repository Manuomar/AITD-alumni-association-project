export interface Alumni {
  id: string;
  name: string;
  email: string;
  graduationYear: number;
  department: string;
  currentPosition: string;
  company: string;
  location: string;
  imageUrl: string;
  bio: string;
  linkedin: string;
}

export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  location: string;
  // category: 'cultural' | 'academic' | 'networking' | 'workshop';
  imageUrl: string;
  // rsvpCount: number;
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: 'alumni' | 'admin';
  graduationYear: number;
  department: string;
}