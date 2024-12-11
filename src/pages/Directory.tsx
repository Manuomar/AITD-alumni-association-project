import React, { useState, useMemo } from 'react';
import { Users } from 'lucide-react';
import { alumniData } from '../data/directoryData';
import AlumniCard from '../components/AlumniCard';
import SearchFilters from '../components/directory/SearchFilters';

export default function Directory() {
  const [searchQuery, setSearchQuery] = useState('');
  const [departmentFilter, setDepartmentFilter] = useState('');
  const [yearFilter, setYearFilter] = useState('');

  const filteredAlumni = useMemo(() => {
    return alumniData.filter(alumni => {
      const matchesSearch = alumni.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          alumni.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          alumni.location.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesDepartment = !departmentFilter || alumni.department === departmentFilter;
      const matchesYear = !yearFilter || alumni.graduationYear === parseInt(yearFilter);

      return matchesSearch && matchesDepartment && matchesYear;
    });
  }, [searchQuery, departmentFilter, yearFilter]);

  return (
    <div className="min-h-screen bg-gray-500">
      {/* Hero Section */}
      <div className="bg-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <Users className="w-16 h-16 mx-auto mb-6" />
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Alumni Directory
          </h1>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto">
            Connect with fellow graduates and expand your professional network
          </p>
        </div>
      </div>

      {/* Search and Filters */}
      <SearchFilters
        onSearchChange={setSearchQuery}
        onDepartmentChange={setDepartmentFilter}
        onYearChange={setYearFilter}
      />

      {/* Alumni Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredAlumni.map(alumni => (
              <AlumniCard key={alumni.id} alumni={alumni} />
            ))}
          </div>
          
          {filteredAlumni.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No alumni found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}