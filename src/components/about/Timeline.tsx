import React from 'react';
import { Achievement } from '../../types/about';

export default function Timeline({ achievements }: { achievements: Achievement[] }) {
  return (
    <div className="relative">
      <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200"></div>
      <div className="space-y-12">
        {achievements.map((achievement, index) => (
          <div key={achievement.id} className={`flex items-center ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}>
            <div className="w-5/12"></div>
            <div className="w-2/12 flex justify-center z-10">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center ">
                <span className="text-white text-sm ">{achievement.year}</span>
              </div>
            </div>
            <div className="w-5/12 bg-white p-4 rounded-lg shadow-md">
              <h3 className="font-bold text-lg">{achievement.title}</h3>
              <p className="text-gray-600">{achievement.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}