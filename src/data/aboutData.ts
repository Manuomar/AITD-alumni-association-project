import { Achievement, Statistic, TeamMember } from '../types/about';
import { Users, Award, Building, Globe } from 'lucide-react';
// import manuimg from '../photos/WhatsApp Image 2024-06-11 at 00.38.25_eeab4359.jpg'
export const achievements: Achievement[] = [
  {
    id: '1',
    year: 1997,
    title: 'Institute foundation',
    description: 'Established as a premier institution for higher education.',
  },
  {
    id: '2',
    year: 2000,
    title: 'Research Excellence',
    description: 'Recognized nationally for breakthrough research initiatives.',
  },
  {
    id: '3',
    year: 2005,
    title: 'Global Partnership',
    description: 'Launched national exchange programs with leading universities.',
  },
  {
    id: '4',
    year: 2020,
    title: 'Digital Innovation',
    description: 'Pioneered remote learning solutions during global challenges.',
  },
];

export const statistics: Statistic[] = [
  {
    id: '1',
    value: '10,000+',
    label: 'Global Alumni',
    icon: 'Users',
  },
  {
    id: '2',
    value: '100+',
    label: 'Awards Won',
    icon: 'Award',
  },
  {
    id: '3',
    value: '50+',
    label: 'Partner Companies',
    icon: 'Building',
  },
  {
    id: '4',
    value: '10+',
    label: 'Countries Represented',
    icon: 'Globe',
  },
];

export const teamMembers: TeamMember[] = [
  {
    id: '1',
    name: 'Manu omar',
    position: 'CSE 3rd Year',
    imageUrl: 'https://media.licdn.com/dms/image/v2/D5603AQHEDIoM6lS7ug/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1712664966760?e=1739404800&v=beta&t=4BewT58N3IXq6IQJKYyzZqOROTUHk82rCTrGDWPzJ-I',
  },
  {
    id: '2',
    name: 'Ankit Kumar',
    position: 'CSE 3rd Year',
    imageUrl: 'https://media.licdn.com/dms/image/v2/D5603AQHa-rMQUdhwXw/profile-displayphoto-shrink_400_400/B56ZOQ4uDuGwAg-/0/1733302609072?e=1739404800&v=beta&t=ugIUWzBcVVW4HdKgIDdUw4ZfPCnlG0XE3yzlsPcPgHY',
  },
  {
    id: '3',
    name: 'Rakesh Kumar Bind',
    position: 'CSE 3rd Year',
    imageUrl: 'https://media.licdn.com/dms/image/v2/D5603AQFjF2XmgxHXtQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1726050676959?e=1739404800&v=beta&t=Fh7f_ZKiiocY_oX3G5RELJAxSK8v-kMc2_pmpFleNZw',
  },

   {
    id: '4',
    name: ' Priya Yadav',
    position: 'CSE 3rd Year',
    imageUrl: 'https://media.licdn.com/dms/image/v2/D4D03AQHInDKMwqeNZA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1692544424645?e=1739404800&v=beta&t=dCGMrSBL0rQOUHGNvQQWyS9kKv78-df2HW4tA1A-no8',
  },
];