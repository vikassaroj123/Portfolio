"use client";

import { useState } from "react";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(prevMenuOpen => !prevMenuOpen);
  };

  return (
    <nav className="bg-transparent">
      <div className="flex items-center justify-between py-5 px-4">
        {/* Logo or Home Link */}
        <Link href="/" className="text-[#16f2b3] text-3xl font-bold">
          VIKAS SAROJ
        </Link>

        {/* Hamburger Menu Button */}
        <button
          className="md:hidden text-white z-50"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {menuOpen ? <FiX size={30} /> : <FiMenu  size={32} />}
        </button>

        <ul
          className={`absolute top-0 right-0 w-full h-full bg-gray-900 bg-opacity-100 p-10 transition-transform duration-300 ease-in-out transform ${menuOpen ? 'translate-x-0' : '-translate-x-full'
            } md:flex md:items-center z-10 md:justify-end md:static md:w-auto md:h-auto md:bg-transparent md:p-0 md:transform-none`}
        >
          {/* Add an onClick event handler to each link to close the menu on mobile view */}
          {[
            { href: "#about", label: "ABOUT" },
            { href: "#experience", label: "EXPERIENCE" },
            { href: "#skills", label: "SKILLS" },
            { href: "#education", label: "EDUCATION" },
            { href: "#blogs", label: "BLOGS" },
            { href: "#projects", label: "PROJECTS" },
          ].map((item, index) => (
            <li key={index} onClick={toggleMenu}>
              <Link href={item.href}>
                <div className="block px-4 py-2 text-xl text-white transition-colors duration-300 hover:text-pink-600 md:hover:text-pink-600">
                  {item.label}
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
