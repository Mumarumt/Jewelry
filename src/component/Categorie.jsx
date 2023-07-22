import React from 'react'

export default function Categorie() {
  return (
    <div>
      
      <>
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-15 mx-auto">
                   <div className="flex flex-col text-center w-full mb-20">
              <h1 className="text-2xl font-medium title-font mb-4 text-blue-800 tracking-widest">
                PRODUCT CATEGORY
              </h1>
              <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                Let us help you create an Engagement Ring that <br />
                she will be proud to wear and show off for the rest of her life!
              </p>
            </div>
            <div className="flex flex-wrap -m-4">
              <div className="p-4 lg:w-1/2">
                <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left hover:scale-105">
                  <img
                    alt="cac.png"
                    className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
                    src={process.env.PUBLIC_URL + "/rrr.jpg"}
                  />

                  <div className="flex-grow sm:pl-8">
                    <h2 className="title-font font-medium text-lg text-blue-800">
                      ENGAGEMENT & WEDDING RING
                    </h2>
                    <p className="mb-4">
                      We SPECIALISE in making ENGAGEMENT & WEDDING RING
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-4 lg:w-1/2">
                <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left hover:scale-105">
                  <img
                    alt="rrr.jpg"
                    className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
                    src={process.env.PUBLIC_URL + "/rich.jpg"}
                  />
                  <div className="flex-grow sm:pl-8">
                    <h2 className="title-font font-medium text-lg text-blue-800">
                      CUSTOM JEWELLERY
                    </h2>
                    <h3 className="text-gray-500 mb-3">Designer</h3>
                    <p className="mb-4">
                      Sit down with one of our design specialists to begin the
                      exciting journey of creating your new bespoke piece.
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-4 lg:w-1/2">
                <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left hover:scale-105">
                  <img
                    alt="team"
                    className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
                    src={process.env.PUBLIC_URL + "/remo.jpg"}
                  />
                  <div className="flex-grow sm:pl-8">
                    <h2 className="title-font font-medium text-lg text-blue-800">
                      REMODELS & REDESIGN
                    </h2>
                    <h3 className="text-gray-500 mb-3">REMODELS & REDESIGN</h3>
                    <p className="mb-4">
                      We specialise in remodelling and redesigning existing
                      pieces.
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-4 lg:w-1/2">
                <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left hover:scale-105">
                  <img
                    alt="team"
                    className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
                    src={process.env.PUBLIC_URL + "/cac.png"}
                  />
                  <div className="flex-grow sm:pl-8">
                    <h2 className="title-font font-medium text-lg text-blue-800">
                      Gold Things
                    </h2>
                    <h3 className="text-gray-500 mb-3">Designer</h3>
                    <p className="mb-4">
                      We are expert of making all kind of jewelry of Gold. Try
                      our service alteast once.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <br />


        </section>
      </>

    </div>
  )
}
