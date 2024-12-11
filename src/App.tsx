import React from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Events from './pages/Events';
import Directory from './pages/Directory';
import Contact from './pages/Contact';

function App() {
  const [currentPage, setCurrentPage] = React.useState('home');

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar onNavigate={setCurrentPage} currentPage={currentPage} />
      {currentPage === 'home' && <Home />}
      {currentPage === 'about' && <About />}
      {currentPage === 'events' && <Events />}
      {currentPage === 'directory' && <Directory />}
      {currentPage === 'contact' && <Contact />}
    </div>
  );
}

export default App;