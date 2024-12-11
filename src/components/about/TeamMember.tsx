import React from 'react';
import { TeamMember as TeamMemberType } from '../../types/about';

export default function TeamMember({ member }: { member: TeamMemberType }) {
  return (
    <div className="text-center">
      <img
        src={member.imageUrl}
        alt={member.name}
        className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
      />
      <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
      <p className="text-gray-600">{member.position}</p>
    </div>
  );
}