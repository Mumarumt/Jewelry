import React from "react";
import Statistic from "../component/Statistic/Statistic";

export default function About() {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-blue-800">
              About Us
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Welcome to our exquisite jewelry store, where beauty and elegance
              meet craftsmanship and style. With over 13,000 satisfied customers
              and a collection of 500+ diverse products, we are dedicated to
              providing you with an unparalleled shopping experience. At our
              jewelry store, we understand that jewelry holds a special place in
              people's hearts. It is a symbol of love, celebration, and personal
              expression. That's why we curate a wide range of jewelry pieces,
              catering to various tastes, occasions, and budgets. Whether you
              are looking for a timeless diamond ring, a statement necklace,
              elegant earrings, or a personalized bracelet, we have something
              for everyone.
            </p>
            <br />
            <br />
          </div>

          <Statistic />
        </div>
      </section>
    </div>
  );
}
