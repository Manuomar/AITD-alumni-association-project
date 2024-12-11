import React from 'react';
import Timeline from '../components/about/Timeline';
import Stats from '../components/about/Stats';
import TeamMember from '../components/about/TeamMember';
import { achievements, statistics, teamMembers } from '../data/aboutData';

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Our Story</h1>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto">
            Building a legacy of excellence through education, innovation, and community.
          </p>
        </div>
      </div>

      {/* Statistics Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <Stats statistics={statistics} />
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Journey</h2>
          <Timeline achievements={achievements} />
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {teamMembers.map(member => (
              <TeamMember key={member.id} member={member} />
            ))}
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            To foster lifelong connections among alumni, support their professional growth, 
            and strengthen the bond between graduates and their alma mater through meaningful 
            engagement and collaborative opportunities.
          </p>
        </div>
      </section>
    </div>
  );
}