import { useState } from "react";
import { Menu, X } from "lucide-react";
import { NavLink } from "react-router-dom";

function NavLinks() {
  const baseStyle =
    "text-white text-lg font-medium hover:text-amber-200 transition-colors";
  return (
    <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 items-center">
      <NavLink to="/" className={baseStyle}>
        Home
      </NavLink>
      <NavLink to="#" className={baseStyle}>
        Feature 1
      </NavLink>
      <NavLink to="#" className={baseStyle}>
        Feature 2
      </NavLink>
    </div>
  );
}

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleBar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Desktop Navbar */}
      <nav className="hidden sm:flex justify-between items-center px-8 py-4 bg-gradient-to-r from-indigo-500 to-blue-600 shadow-lg rounded-b-2xl">
        <h1 className="text-white text-2xl font-bold tracking-wide">
          LearnAnything
        </h1>
        <NavLinks />
      </nav>

      {/* Mobile Navbar Header */}
      <div className="sm:hidden flex justify-between items-center px-4 py-3 bg-gradient-to-r from-indigo-500 to-blue-600 shadow-md">
        <h1 className="text-white text-xl font-bold">LearnAnything</h1>
        <button onClick={toggleBar} className="text-white">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`sm:hidden fixed top-0 left-0 w-full h-full bg-gradient-to-br from-indigo-600 to-blue-700 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        } flex flex-col items-center justify-center space-y-8`}
        onClick={toggleBar}
      >
        <button
          onClick={toggleBar}
          className="absolute top-5 right-5 text-white"
        >
          <X size={32} />
        </button>
        <NavLinks />
      </div>
    </>
  );
}

export default Navbar;
