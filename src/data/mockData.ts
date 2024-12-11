import { Alumni, Event } from '../types';

export const mockAlumni: Alumni[] = [
  {
    id: '1',
    name: 'Srajan Agrawal',
    email: 'sarah.j@example.com',
    graduationYear: 2024,
    department: 'Computer Science and Engineering',
    currentPosition: 'Software Engineer',
    company: 'Microsoft',
    location: 'Bengaluru, Karnatka',
    imageUrl: 'https://yt3.googleusercontent.com/B1o8Q5gLpFzw0HsrI3hlOg8MSolRnzJ_YmXVc3caOHBkKwx5ww4Pix9le84LSLn1DTg0I2VN=s900-c-k-c0x00ffffff-no-rj',
    bio: 'Highly motivated individual with a strong work ethic and a drive to succeed. I look forward to the next step in my journey and to continue to grow and learn in the field of computers.',
    linkedin : 'https://www.linkedin.com/in/srajan-agrawal-98459321a',
  },
  {
    id: '2',
    name: 'Anant Vaish',
    email: 'michael.c@example.com',
    graduationYear: 2022,
    department: 'Computer Science and Engineering',
    currentPosition: 'Founder and CEO',
    company: 'Euphelity.pvt',
    location: 'Kanpur',
    imageUrl: 'https://miro.medium.com/v2/resize:fit:2400/1*yIdcDcwaYG_iqvF0UxYWjQ.jpeg',
    bio: 'A passionate Computer Science Engineer and TEDx Speaker dedicated to driving impactful change. As a PwD Advocate.I work to create safe digital spaces while fostering innovation as a Social Entrepreneur.',
    linkedin: 'https://www.linkedin.com/in/anantvaish/',
  },
];

export const mockEvents: Event[] = [
  {
    id: '1',
    title: 'Annual Alumni Meet 2025',
    description: 'Join us for an evening of networking and reconnecting with fellow alumni.',
    date: '2025-05-12',
    location: 'Dr.AITD College campus',
    imageUrl: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622',
    // rsvpCount: 45,
  },
  {
    id: '2',
    title: 'Tech Industry Panel Discussion',
    description: 'Leading alumni discuss current trends and opportunities in technology.',
    date: '2025-02-02',
    location: 'Virtual Event',
    imageUrl: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b',
    // rsvpCount: 120,
  },
];