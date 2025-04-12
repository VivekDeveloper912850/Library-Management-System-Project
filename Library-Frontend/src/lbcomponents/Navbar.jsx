

{/*
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Library Management</h1>

        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white">
            ☰
          </button>
        </div>

        <ul className={`md:flex space-x-6 ${isOpen ? "block" : "hidden"} md:block`}>
          <li><a href="/" className="hover:text-gray-400">Home</a></li>
          <li><a href="/register" className="hover:text-gray-400">Register</a></li>
          <li><a href="/login" className="hover:text-gray-400">Login</a></li>
          <li><a href="/admin" className="hover:text-gray-400">Admin</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
*/}

import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-800 text-white shadow-lg">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <Link to="/" className="text-3xl font-extrabold tracking-wide">
          📚 Library System
        </Link>

        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        <ul
          className={`md:flex md:space-x-8 md:items-center absolute md:static bg-blue-800 w-full left-0 top-16 md:top-0 transition-all duration-300 ease-in-out z-10 md:w-auto md:bg-transparent p-4 md:p-0 shadow-md md:shadow-none ${isOpen ? "block" : "hidden"}`}
        >
          <li><Link to="/" className="block py-2 px-4 text-lg hover:text-yellow-300">Home</Link></li>
          <li><Link to="/register" className="block py-2 px-4 text-lg hover:text-yellow-300">Register</Link></li>
          <li><Link to="/login" className="block py-2 px-4 text-lg hover:text-yellow-300">Login</Link></li>
          <li><Link to="/admin" className="block py-2 px-4 text-lg hover:text-yellow-300">Admin</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
