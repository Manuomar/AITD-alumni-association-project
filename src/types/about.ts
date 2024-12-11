export interface Achievement {
  id: string;
  year: number;
  title: string;
  description: string;
}

export interface Statistic {
  id: string;
  value: string;
  label: string;
  icon: string;
}

export interface TeamMember {
  id: string;
  name: string;
  position: string;
  imageUrl: string;
}