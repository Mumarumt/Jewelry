import React from "react";
import { Link } from "react-router-dom";

export default function Feature() {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-15 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h2 className="text-1000px text-blue-500 tracking-widest font-medium title-font mb-1">
              Services
            </h2>
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
              Our Top class services
            </h1>
          </div>

          <div className="flex flex-wrap -m-4">
            <div className="p-4 md:w-1/3">
              <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col hover:scale-105">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-500 text-white flex-shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                    </svg>
                  </div>
                  <h2 className="text-gray-900 text-lg title-font font-medium">
                    CUSTOM_DESIGN
                  </h2>
                </div>
                <div className="flex-grow">
                  <p className="leading-relaxed text-base">
                  Let us help you create an Engagement Ring that
                she will be proud to wear and show off for the rest of her life!
                  </p>

                  <Link className="mt-3 text-blue-500 inline-flex items-center" to="/services/Custom_Design">
                    Learn More
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                    >
                      {/* arrow */}
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>


            <div className="p-4 md:w-1/3">
              <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col hover:scale-105">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-500 text-white flex-shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                  </div>
                  <h2 className="text-gray-900 text-lg title-font font-medium">
                    VALUTAIONS
                  </h2>
                </div>
                <div className="flex-grow">
                  <p className="leading-relaxed text-base">
                  We enlist the services of a fully independent jewellery
                valuation specialist to complete valuations. For customers this
                is an important point of difference. It means our Jewellery Store
                has no conflict of interest and work solely with you to deliver
                accurate, unprejudiced valuations.
                  </p>
                  
                  <Link className="mt-3 text-blue-500 inline-flex items-center" to="/services/Valutaions">
                    Learn More
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>


            <div className="p-4 md:w-1/3">
              <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col hover:scale-105 ">
                <div className="flex items-center mb-3 hover:scale-105">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-500 text-white flex-shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <circle cx="6" cy="6" r="3"></circle>
                      <circle cx="6" cy="18" r="3"></circle>
                      <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                    </svg>
                  </div>
                  <h2 className="text-gray-900 text-lg title-font font-medium">
                  JEWELLERY CLEANING
                  </h2>
                </div>
                <div className="flex-grow">
                  <p className="leading-relaxed text-base">
                  Our cleaning service is available in store for $10 per piece. We
                use a range of tools and cleaning solutions to bring your
                beautiful jewels back to life. <br />
                It is very important to keep your pieces clean to ensure any
                breaks or damages can be picked up early and repaired as soon as
                possible.
                <br /> This is a same-day service however it is best if you can
                leave your jewellery with us for a couple of hours to ensure we
                can give your items a thorough clean.
                  </p>

       
                  <Link className="mt-3 text-blue-500 inline-flex items-center" to="/services/Repairs">
                    Learn More
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                      
                    </svg>
                  </Link>



                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
