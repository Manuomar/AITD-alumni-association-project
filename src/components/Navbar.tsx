import React from 'react';
import { Menu, User, Calendar, Home, Info, Mail } from 'lucide-react';
// const collegeLogo = require('../photos/aitd_img-removebg-preview.png');
// import glogo from '../photos/aitd_img-removebg-preview.png';

import logo from '../photos/aitd img.jpg';
interface NavbarProps {
  onNavigate: (page: string) => void;
  currentPage: string;
}

export default function Navbar({ onNavigate, currentPage }: NavbarProps) {
  return (
    <nav className="bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2 cursor-pointer" onClick={() => onNavigate('home')}>
            {/* <Home className="w-6 h-6" /> */}
            <img src={logo} alt="college logo" className='w-[50px] rounded-[100px] mr-3 mt-2'/>
            <span className="font-bold text-xl">Alumni Connect</span>
          </div>
          
          <div className="hidden md:flex space-x-8">
            <NavLink 
              href="#" 
              icon={<Home className="w-4 h-4" />} 
              text="Home" 
              onClick={() => onNavigate('home')}
              active={currentPage === 'home'}
            />
            <NavLink 
              href="#" 
              icon={<Info className="w-4 h-4" />} 
              text="About" 
              onClick={() => onNavigate('about')}
              active={currentPage === 'about'}
            />
            <NavLink 
              href="#" 
              icon={<Calendar className="w-4 h-4" />} 
              text="Events" 
              onClick={() => onNavigate('events')}
              active={currentPage === 'events'}
            />
            <NavLink 
              href="#" 
              icon={<User className="w-4 h-4" />} 
              text="Directory" 
              onClick={() => onNavigate('directory')}
              active={currentPage === 'directory'}
            />
            <NavLink 
              href='#'
              icon={<Mail className="w-4 h-4" />} 
              text="Contact" 
              onClick={() => onNavigate('Contact')}
              active={currentPage === 'Contact'}
            />
          </div>

          {/* <div className="hidden md:flex items-center space-x-4">
            <button className="bg-blue-700 hover:bg-blue-600 px-4 py-2 rounded-md">
              Sign In
            </button>
          </div> */}

          <div className="md:hidden">
            <button className="p-2">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

interface NavLinkProps {
  href: string;
  icon: React.ReactNode;
  text: string;
  onClick?: () => void;
  active?: boolean;
}

function NavLink({ href, icon, text, onClick, active }: NavLinkProps) {
  return (
    <a
      href={href}
      onClick={(e) => {
        e.preventDefault();
        onClick?.();
      }}
      className={`flex items-center space-x-1 transition-colors ${
        active ? 'text-blue-200' : 'hover:text-blue-200'
      }`}
    >
      {icon}
      <span>{text}</span>
    </a>
  );
}