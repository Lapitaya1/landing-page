
import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-red-600 to-red-500 bg-clip-text text-transparent">
            PITAYA
          </h1>
        </div>
        
        <div className="flex items-center">
          <a href="#terms" className="text-gray-700 hover:text-red-600 transition-colors font-medium">
            Términos y Condiciones
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
