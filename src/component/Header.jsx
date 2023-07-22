import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row line-flex text-white items-center bg-indigo-500 border-0 py-2 px-4 focus:outline-none hover:bg-indigo-700 rounded text-base mt-4 md:mt-0">
          <Link
            className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
            to="/"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="ml-3 text-xl">
              {" "}
              <Link to="/"> Jewelry Store</Link>
            </span>
          </Link>
          <div className="inline-flex text-white items-center bg-indigo-500 border-0 py-2 px-4 focus:outline-none hover:bg-indigo-700 rounded text-base mt-4 md:mt-0">
            <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
              <Link className="mr-5 hover:text-gray-900 hover:scale-110" to="/">
                Home
              </Link>
              <Link
                className="mr-5 hover:text-gray-900 hover:scale-110"
                to="/DynamicProducts"
              >
                Product
              </Link>

              <Link
              className="mr-5 hover:text-gray-900 hover:scale-110"
              to="/services/Custom_Design"
            >
              CUSTOM DESIGNS
            </Link>
            <Link
              className="mr-5 hover:text-gray-900 hover:scale-110"
              to="/services/Repairs"
            >
              REPAIRS & SERVICES
            </Link>
            <Link
              className="mr-5 hover:text-gray-900 hover:scale-110"
              to="/services/Valutaions"
            >
              VALUATIONS
            </Link>

              <Link
                className="mr-5 hover:text-gray-900 hover:scale-110"
                to="/About"
              >
                About
              </Link>

              <Link
                className="mr-5 hover:text-gray-900 hover:scale-110"
                to="/ContactUS"
              >
                ContactUS
              </Link>

            </nav>

            <Link to={"/ShopCart"} className="inline-flex text-white items-center bg-indigo-500 border-0 py-2 px-4 focus:outline-none hover:bg-indigo-700 rounded text-base mt-4 md:mt-0">
              Go to Cart
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-4 h-4 ml-1"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </Link>



          </div>
        </div>
      </header>
    </div>
  );
}
