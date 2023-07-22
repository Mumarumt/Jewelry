import React from "react";

export default function Repairs() {
  return (
    <div>
      <section className="text-gray-600 body-font">
      <div className="container px-5 py-15 mx-auto">

            <div className="e-font sm:text-4xl text-3xl px-2 py-10 mb-4 font-medium hover: text-blue-800 flex justify-center">
              Wellcome to our Services
              </div>

              <img
  className="lg:max-w-lg lg:w-full md:w-2/3 w-90 h-64 object-cover object-center rounded hover:scale-105"
  alt="rep.jpg"
  src={process.env.PUBLIC_URL + '/slo.avif'}
  style={{ maxWidth: '100%', width: '96%', marginLeft: '2%', marginRight: '2%' }}
/>

          <div className="flex flex-col text-center w-full mb-12">

            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-blue-800">
              REPAIRS & SERVICES
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              We offer an extensive range of services to assist you with all
              your jewellery needs, these include:
            </p>

  
            <br />
            <br />
            <br />



            <div className="flex flex-col text-center w-full mb-12">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-blue-800">
                JEWELLERY CLEANING
              </h1>
              <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
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
            </div>
            <br />
            <br />
            <div className="flex flex-col text-center w-full mb-12">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-blue-800">
                JEWELLERY REPAIRS
              </h1>
              <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                Broken bits of jewellery collecting dust in your jewellery box?
                Bring it in to My Jewellery Shop . <br /> we can give you a quote on
                having it repaired or perhaps remodelled into something new.
                
              </p>
<br /><br />
              <p className="text-blue-800">
              <strong>Our most common repairs include</strong> 
              </p>
            <br />
              <pre>
              - Ring re-sizing<br/><br/>
              - Rhodium Plating<br/><br/>
              - Ring re-sizing<br/><br/>
              - Watch Batteries & Repairs<br/><br/>
              - Soldering<br/><br/>
              - Replacing missing stones<br/><br/>
              </pre>
            </div>
          </div>

          <div className="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 py-10 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
            <div className="relative flex-grow w-full">
                <h2> <strong>Send us email before getting our services
                  </strong></h2>
              <label
                for="full-name"
                className="leading-7 text-sm text-gray-600"
              >
                Full Name
              </label>
              <input
                type="text"
                id="full-name"
                name="full-name"
                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative flex-grow w-full">
              <label for="email" className="leading-7 text-sm text-gray-600">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <button className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              Button
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
