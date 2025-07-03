
import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-[#ff0808] border-b border-gray-200 h-24">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-center">
        <div className="flex items-center">
          <img src="/logo_blanco.png" className='w-36 h-36 pb-10' />
        </div>
        
        {/* <div className="flex items-center">
          <a href="#terms" 
          className="text-gray-700 hover:text-red-600 transition-colors font-medium">
            Términos y Condiciones
          </a>
        </div> */}
      </div>
    </nav>
  );
};

export default Navbar;
