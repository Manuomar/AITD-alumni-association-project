import React from 'react';
import { Calendar, MapPin, Users } from 'lucide-react';
import { Event } from '../types';

export default function EventCard({ event }: { event: Event }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img
        src={event.imageUrl}
        alt={event.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold">{event.title}</h3>
        
        <div className="mt-3 space-y-2">
          <div className="flex items-center text-gray-600">
            <Calendar className="w-4 h-4 mr-2" />
            <span>{new Date(event.date).toLocaleDateString()}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <MapPin className="w-4 h-4 mr-2" />
            <span>{event.location}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <Users className="w-4 h-4 mr-2" />
            <span>{event.rsvpCount} attending</span>
          </div>
        </div>
        
        <p className="mt-3 text-gray-700">{event.description}</p>
        
        <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors">
          RSVP Now
        </button>
      </div>
    </div>
  );
}