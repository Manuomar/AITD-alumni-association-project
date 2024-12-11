import React from 'react';
import AlumniCard from '../components/AlumniCard';
import EventCard from '../components/EventCard';
import { mockAlumni, mockEvents } from '../data/mockData';
import { GraduationCap } from 'lucide-react';
import collegelogo from '../photos/aitd img.jpg'
export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <div className="bg-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <GraduationCap className="w-16 h-16 mx-auto mb-6" />
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Welcome to Alumni Connect
          </h1>
          <p className="text-xl text-blue-200 mb-8">
            <h3 className='font-bold'>Dr. AITD Kanpur </h3><br/>
            Stay connected with your alma mater and fellow graduates
          </p>
          <button className="bg-white text-blue-900 px-8 py-3 rounded-md font-semibold hover:bg-blue-50 transition-colors">
            Join the Network
          </button>
        </div>
      </div>

      {/* Featured Alumni Section */}
      <section className="py-16 max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Featured Alumni</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mockAlumni.map(alumni => (
            <AlumniCard key={alumni.id} alumni={alumni} />
          ))}
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Upcoming Events</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {mockEvents.map(event => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <img src={collegelogo} alt="AITD" className="W-[80px] h-[80px] rounded-[100%]" />
              <h3 className="text-xl font-bold mb-4">Alumni Connect</h3>
              <p className="text-blue-200">
                Connecting graduates, building futures.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-blue-200">
                <li><a href="#" className="hover:text-white">About Us</a></li>
                <li><a href="#" className="hover:text-white">Events</a></li>
                <li><a href="#" className="hover:text-white">Alumni Directory</a></li>
                <li><a href="#" className="hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Stay Connected</h3>
              <p className="text-blue-200">
                Subscribe to our newsletter for updates and announcements.
              </p>
              <div className="mt-4 flex gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 rounded-md text-gray-900"
                />
                <button type='submit'className="border-2 p-3 rounded-md font-bold">Submit</button>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}