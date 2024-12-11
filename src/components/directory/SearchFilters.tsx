import React from 'react';
import { Search, Filter } from 'lucide-react';

interface SearchFiltersProps {
  onSearchChange: (value: string) => void;
  onDepartmentChange: (value: string) => void;
  onYearChange: (value: string) => void;
}

export default function SearchFilters({
  onSearchChange,
  onDepartmentChange,
  onYearChange,
}: SearchFiltersProps) {
  return (
    <div className="bg-white shadow-sm py-4">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-wrap gap-4">
          <div className="relative flex-1">
            <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search alumni..."
              onChange={(e) => onSearchChange(e.target.value)}
              className="pl-10 w-full border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          
          <div className="flex items-center space-x-4">
            <Filter className="w-5 h-5 text-gray-500" />
            <select
              onChange={(e) => onDepartmentChange(e.target.value)}
              className="border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">All Departments</option>
              <option value="Computer Science and Engineering">Computer Science and Engineering</option>
              <option value="Biotechnology">Biotechnology</option>
              <option value="Mechanical Engineering">Mechanical Engineering</option>
              <option value="Electronics Engineering">Electronics Engineering</option>
              <option value="Information Technology">Information Technology</option>
              <option value="Chemical Engineering">Chemical Engineering</option>
            </select>
            
            <select
              onChange={(e) => onYearChange(e.target.value)}
              className="border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">All Years</option>

              <option value="2024">2024</option>
              <option value="2023">2023</option>
              <option value="2022">2022</option>
              <option value="2021">2021</option>
              <option value="2020">2020</option>
              <option value="2015">2015</option>
              {/* <option value="2012">2012</option> */}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}