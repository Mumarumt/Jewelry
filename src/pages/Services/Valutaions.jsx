import React from "react";
export default function Valutaions() {
  return (
    <>
      <div>
        <section className="text-gray-600 body-font  ">


            <div className="e-font sm:text-4xl text-3xl px-2 py-10 mb-4 font-medium hover: text-blue-800 flex justify-center">
              Wellcome to our Services
              </div>
              <div className="flex justify-center">
    
<img
  className="lg:max-w-lg lg:w-full md:w-2/3 w-95 h-60 object-cover object-center rounded hover:scale-105"
  alt="hor.jpg"
  src={process.env.PUBLIC_URL + '/hor.jpg'}
  style={{ maxWidth: '100%', width: '90%', marginLeft: '5%', marginRight: '5%' }}
/>

            </div>


              <div className="flex flex-col text-center w-full mb-12">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-blue-800">
              Valutaion
              </h1>
              <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              We enlist the services of a fully independent jewellery
                valuation specialist to complete valuations. For customers this
                is an important point of difference. It means our Jewellery Store
                has no conflict of interest and work solely with you to deliver
                accurate, unprejudiced valuations.
              </p>
            </div>
            <br />
              
              <div className="flex flex-col text-center w-full mb-12">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-blue-800">
              REASONS FOR A VALUATION
              </h1>
              <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Having your jewellery independently valued is important for your
                own protection – <br />
                you are taking a risk by not having it valued. Here are three
                key reasons:
              </p>
            </div>

            <div className="flex flex-col text-center w-full mb-12">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-blue-800">
              INSURANCE CLAIMS
              </h1>
              <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Many valuations are for insurance purposes with most insurers
                insisting on an update every two to four years.<br/>  Your insurance company may refuse to compensate you for the full
                value of your precious jewellery and<br />gemstones if they have not
                been professionally assessed.A claim for lost or stolen
                jewellery <br /> is far more likely to be favourably processed if you
                have a current valuation certificate.
              </p>
            </div>
        </section>
      </div>
    </>
  );
} 
