import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div>
      <footer className="text-gray-600 body-font borde border-t-2 mx-1">
        <div className="container px-10 py-6 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
            <Link
              className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900"
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
              <span className="ml-3 text-xl hover:text-blue-800">
                {" "}
                <Link to="/">Fancy Jewelry Store</Link>
              </span>
            </Link>
          </div>
          
          
                             {/*Pages  */}

          <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center ">
            <div className="lg:w-1/4 md:w-1/2 w-full  px-6">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                <strong>Pages</strong>
              </h2>
              <nav className="list-none mb-10">
                <ol>
                  <li>
                    <Link
                      className="text-gray-600 hover:text-blue-800 hover:scale-110"
                      to="/"
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-gray-600 hover:text-blue-800 hover:scale-110"
                      to="/DynamicProducts"
                    >
                      Product
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-gray-600 hover:text-blue-800 hover:scale-110"
                      to="/About"
                    >
                      About
                    </Link>
                  </li>
                  <li>

                  <Link
              className="mr-5 hover:text-gray-900 hover:scale-110"
              to="/ContactUS"
            >
              <pre>Contact us</pre>
            </Link>
                  </li>
                </ol>
              </nav>
            </div>
          </div>
          <br />

          <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center ">
            <div className="lg:w-1/4 md:w-1/2 w-full  px-6">
              <h2 className="title-font font-medium hover:text-blue-800 tracking-widest text-sm mb-3">
                <strong>Services</strong>
              </h2>
              <nav className="list-none mb-10">
                <ol>
                  <li>
                    <Link
                      className="mg-2 hover:text-blue-800 hover:scale-110"
                      to="/services/Custom_Design"
                    >
                      <pre>CUSTOM DESIGNS</pre>
                    </Link>
                  </li>
                  
                  <li>
                    <Link
                      className="mr-5 hover:text-blue-800 hover:scale-110"
                      to="/services/val"
                    >VALUATIONS                    
                    </Link>
                  </li>

                  <li>
                    <Link
                      className="mr-5 hover:text-blue-800 hover:scale-110"
                      to="/services/Repairs"
                    >
                     <pre>REPAIRS & SERVICES </pre> 
                    </Link>
                    </li>
                </ol>
              </nav>
            </div>
          </div>


                                                        {/*Categories  */}

          <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center ">
            <div className="lg:w-1/4 md:w-1/2 w-full  px-6">
              <h2 className="title-font font-medium hover:text-blue-800 tracking-widest text-sm mb-3">
                <strong>Categories</strong>
              </h2>
              <nav className="list-none mb-10">
                <ol>
                  <li>
                  <Link className="mr-5 hover:text-blue-800 hover:scale-110" to='/Category/Bracelet'>
                      Bracelet
                    </Link>
                  </li>
                  
                  <li>

                      <Link className="mr-5 hover:text-blue-800 hover:scale-110" to='/Category/Rings'>Rings </Link>                    
                   
                  </li>

                  <li>
                    <Link
                      className="mr-5 hover:text-blue-800 hover:scale-110"
                      to="/Category/Necklace"
                    >
                     Necklace
                    </Link>
                    </li>

                    <li>
                    <Link
                      className="mr-5 hover:text-blue-800 hover:scale-110"
                      to="/Category/Earring"
                    >
                    Earring
                    </Link>
                    </li>
                </ol>
              </nav>
            </div>
          </div>

          
        </div>


        <div className="bg-gray-100 ">
        
        <Link to='/'>
        <div className="container mx-auto py-4 px-5  flex-wrap flex-col sm:flex-row flex justify-center">
        

          <p className="
            container mx-auto flex flex-wrap p-5 flex-col md:flex-row justify-center text-white items-center bg-indigo-500 border-0 py-2 px-4 focus:outline-none hover:bg-indigo-700 rounded text-base mt-4 md:mt-0">
              © 2024 Jewelry Store @UMT                
            </p>
          </div>
          </Link>
        </div>
      </footer>
    </div>
  );
}
