import React from 'react';
import { Users, Award, Building, Globe } from 'lucide-react';
import { Statistic } from '../../types/about';

const iconMap = {
  Users,
  Award,
  Building,
  Globe,
};

export default function Stats({ statistics }: { statistics: Statistic[] }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
      {statistics.map((stat) => {
        const Icon = iconMap[stat.icon as keyof typeof iconMap];
        return (
          <div key={stat.id} className="text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-4">
              <Icon className="w-6 h-6 text-blue-600" />
            </div>
            <div className="text-3xl font-bold text-blue-900 mb-2">{stat.value}</div>
            <div className="text-gray-600">{stat.label}</div>
          </div>
        );
      })}
    </div>
  );
}