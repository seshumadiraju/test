import { useState } from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import Menu from "./Menu";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md shadow-primary-600 font-poppins relative">
      <div className="container mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-5 md:py-6">
          {/* Logo */}
          <div className="text-xl font-bold text-gray-800">
            <Link to="/">
              <img src={logo} alt="file My IP Logo" className="max-w-[124px]" />{" "}
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden">
            <Menu />
          </div>

          {/* Hamburger Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-grays-600 focus:outline-none"
            >
              {isOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-9 w-9 bg-primary-500 rounded-md text-white px-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10  bg-primary-50 rounded-md px-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden flex flex-col space-y-2 pb-4">
            <Menu />
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
