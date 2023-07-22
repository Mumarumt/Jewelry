import React from "react";

export default function Custom_Design() {
  return (
    <div>
      <>
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-15 mx-auto">
            <div className="e-font sm:text-4xl text-3xl px-2 py-10 mb-4 font-medium hover: text-blue-800 flex justify-center">
              Wellcome to our Services
            </div>

            <img
              className="lg:max-w-lg lg:w-full md:w-2/3 w-95 h-60 object-cover object-center rounded hover:scale-105"
              alt="hor2.jpg"
              src={process.env.PUBLIC_URL + "/44.jpg"}
              style={{
                maxWidth: "100%",
                width: "90%",
                marginLeft: "5%",
                marginRight: "5%",
              }}
            />

            <div className="flex flex-col text-center w-full mb-20">
              <h1 className="text-2xl font-medium title-font mb-4 text-blue-800 tracking-widest">
                WE SPECIALISE IN ...
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

          <div class="container px-5 py-24 mx-auto">
            <div class="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                class="inline-block w-8 h-8 text-gray-400 mb-8"
                viewBox="0 0 975.036 975.036"
              >
                <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
              </svg>
              <p class="leading-relaxed text-lg">
                <h1>
                  {" "}
                  <strong className="text-blue-800">
                    CUSTOM DESIGN ENGAGEMENT RINGS
                  </strong>
                </h1>
                our job is to create a dream engagement ring that your special
                someone will be excited to wear forever! You might already have
                a design in mind or maybe you have no clue about jewellery or
                diamonds and don't know where to start. Think of us as your
                experienced guides who not only want to help you design a
                beautiful custom ring but will take the time to help educate you
                on the exciting world of fine jewellery. We want you to have
                confidence throughout this journey and a finished result that
                YOU are proud of.
              </p>
              <span class="inline-block h-1 w-10 rounded bg-indigo-500 mt-8 mb-6"></span>

              <p class="leading-relaxed text-lg">
                <h1>
                  {" "}
                  <strong className="text-blue-800">
                    REMODELS & REDESIGN{" "}
                  </strong>
                </h1>
                We get it – jewellery carries meaning and memories. But hey,
                styles change, and sometimes those pieces just don't match your
                current tastes. That's where our experts come in, ready to work
                their magic and transform your sentimental jewellery into
                stunning pieces that reflect your current style and preferences.
                The process begins with a consultation, where we listen closely
                to your story and dive into your dreams for the redesign. We'll
                share our expertise, give you some creative suggestions, and
                together, we'll come up with a plan to breathe new life into
                your jewellery. Whether it's adding some extra sparkle, changing
                up the metal setting, or completely reimagining the design, our
                goal is to deliver a remodelled piece that exceeds your wildest
                expectations.
              </p>
              <span class="inline-block h-1 w-10 rounded bg-indigo-500 mt-8 mb-6"></span>
            </div>
          </div>
        </section>
      </>
    </div>
  );
}
