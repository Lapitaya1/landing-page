
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900  py-8 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-2">
        <p className='text-gray-300'>
          Contacto:<br/>
          -info@lapitayastore.com,<br/>-atencionalcliente@lapitayastore.com
        </p>
        <div className=" border-gray-800 mt-0 pt-0 text-center self-center">
          <p className="text-gray-400">
            © 2024 Pitaya. Todos los derechos reservados. 
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
