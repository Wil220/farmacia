// src/components/Navbar.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-2 flex justify-between items-center">
      <h2 className="text-white text-2xl font-bold">
        <Link to="/" className="text-white no-underline">
          Farmacia
        </Link>
      </h2>
      <ul className="flex gap-4 list-none">
        <li>
          <Link to="/" className="text-white text-lg no-underline hover:underline">
            Home
          </Link>
        </li>
        <li>
          <Link to="/categorias" className="text-white text-lg no-underline hover:underline">
            Categorias
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
