import React from 'react';
import { MapPin, Briefcase } from 'lucide-react';
import { Alumni } from '../types';

export default function AlumniCard({ alumni }: { alumni: Alumni }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img
        src={alumni.imageUrl}
        alt={alumni.name}
        // className="w-full h-40 object-cover"
        className="w-40 h-40 ml-[30%] rounded-[10%] mt-3"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold">{alumni.name}</h3>
        <p className="text-gray-600">{alumni.graduationYear} Graduate</p>
        
        <div className="mt-3 space-y-2">
          <div className="flex items-center text-gray-600">
            <Briefcase className="w-4 h-4 mr-2" />
            <span>{alumni.currentPosition} at {alumni.company}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <MapPin className="w-4 h-4 mr-2" />
            <span>{alumni.location}</span>
          </div>
        </div>
        
        <p className="mt-3 text-gray-700">{alumni.bio}</p>
        
        <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors">
         <a href={alumni.linkedin}> View Linkedin</a>
        </button>
      </div>
    </div>
  );
}