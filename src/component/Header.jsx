import React, { useState } from "react";
import { Link } from "react-router-dom";

// Logo component
const Logo = () => (
  <Link className="flex title-font font-medium items-center  text-gray-900 mb-4 md:mb-0" to="/">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
      viewBox="0 0 24 24"
    >
      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
    </svg>
    <span className="ml-3 text-xl">Fancy Jewelry Store</span>
  </Link>
);

  


// Navigation links component
const NavLinks = ({ isMenuOpen, closeMenu }) => (
  <nav className={`md:ml-auto md:mr-auto flex flex-col  md:flex-row items-center text-base justify-center md:flex-grow ${isMenuOpen ? 'block' : 'hidden'}`}>
    <Link className="mr-5 hover:text-gray-900 hover:scale-105" to="/" onClick={closeMenu}>Home</Link>
    <Link className='mr-5 hover:text-gray-900 hover:scale-105'  to="/Product">Products</Link>
    <Link className="mr-5 hover:text-gray-900 hover:scale-105" to="/services/Custom_Design">CUSTOM DESIGNS</Link>
    <Link className="mr-5 hover:text-gray-900 hover:scale-105"to="/services/Repairs">REPAIRS & SERVICES</Link>
    <Link className="mr-5 hover:text-gray-900 hover:scale-105" to="/services/val">VALUATIONS</Link>
    <Link className="mr-5 hover:text-gray-900 hover:scale-105" to="/About" onClick={closeMenu}>About</Link>
    <Link className="mr-5 hover:text-gray-900 hover:scale-105" to="/ContactUS" onClick={closeMenu}>ContactUS</Link>
  </nav>
);

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div>
      <header className="text-gray-600 body-font mx-1 my-1">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row line-flex text-white items-center bg-indigo-500 border-0 py-2 px-4 focus:outline-none hover:bg-indigo-700 rounded text-base mt-4 md:mt-0">
          <Logo />
          <button
            className="inline-flex md:hidden text-white items-center bg-indigo-500 border-0 py-2 px-3 focus:outline-none hover:bg-indigo-700 rounded text-base mt-4 md:mt-0"
            onClick={toggleMenu}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12"></path>
              ) : (
                <path d="M4 6h16M4 12h16m-7 6h7"></path>
              )}
            </svg>
          </button>
          <div className="md:flex-grow"></div>
          <div className="md:hidden">
            <NavLinks isMenuOpen={isMenuOpen} closeMenu={closeMenu} toggleMenu={toggleMenu} />
          </div>
          <div className="hidden md:flex md:flex-row items-center">
            <NavLinks isMenuOpen={true} closeMenu={closeMenu} toggleMenu={toggleMenu} />
          </div>
          <Link to={"/ShopCart"} className="inline-flex text-white items-center  focus:outline-none hover:bg-indigo-700 rounded text-base mt-4 md:mt-0">
            Go to Cart
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </Link>
        </div>
      </header>
    </div>
  );
}
