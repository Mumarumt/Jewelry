import React from 'react'
import { Link } from 'react-router-dom'

export default function Product({ products = [] }) {
  return (
    <div>
      <section className="text-gray-600 body-font cursor-pointer">

        <div className="container px-5 py-15 mx-auto">
          <div className="e-font sm:text-4xl text-3xl px-2 py-10 mb-4 font-medium hover: text-blue-800 flex justify-center">
            Wellcome to our Products
          </div>
        </div>

        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            {
              products.map((products) => {
                console.log(products, "Product")
                const { id, title, description, image, catogary, price } = products;


                return (
                  <Link to={`/SingleProduct/${id}`} className="lg:w-1/4 md:w-1/2 p-4 w-full">
                    <a className="block relative h-48 rounded overflow-hidden hover:scale-110 ">
                      <img alt="cac.png" className="object-contain object-center w-full h-full block" src={image} />
                    </a>
                    <div className="mt-4">
                      <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{catogary}</h3>
                      <h2 className="text-gray-900 title-font text-lg font-medium hover:scale-110">{title}</h2>
                      <p className="mt-1">${price}</p>
                    </div>
                  </Link>

                )

              })
            }
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full ">
              <Link className="block relative h-48 rounded overflow-hidden hover:scale-110 " to='/Category/Bracelet'>
                <img alt="cac.png" className="object-cover object-center w-full h-full block" src="cac.png" />
              </Link>
              <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1 ">CATEGORY-Bracelet</h3>
                <h2 className="text-gray-900 title-font text-lg font-medium hover:scale-110">Bracelet</h2>
                <p className="mt-1 hover:scale-110">$16.00</p>
              </div>
            </div>

            <div className="lg:w-1/4 md:w-1/2 p-2 w-full">
              <Link className="block relative h-48 w-40 rounded overflow-hidden hover:scale-110" to='/Category/Rings'>
                <img alt="rrr.jpg" className="object-cover object-center w-full h-full block" src="rrr.jpg" />
              </Link>
              <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY-RINGS</h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">ENGAGEMENT & WEDDING RING</h2>
                <p className="mt-1">$21.15</p>
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a className="block relative h-48 rounded overflow-hidden hover:scale-110">
                <img alt="teo.webp" className="object-cover object-center w-full h-full block" src="teo.webp" />
              </a>

              <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">Neptune</h2>
                <p className="mt-1">$12.00</p>
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <Link className="block relative h-48 rounded overflow-hidden hover:scale-110" to='/Category/Necklace'>
                <img alt="44.jpg" className="object-cover object-center w-full h-full block" src="44.jpg" />
              </Link>
              <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY-Necklace</h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">Necklace</h2>
                <p className="mt-1">$18.40</p>
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a className="block relative h-48 w-4/6 rounded overflow-hidden hover:scale-110">
                <img alt="6tt.jpg" className="object-cover object-center w-full h-full block" src="6tt.jpg" />
              </a>
              <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Ring</h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">Diamond Ring</h2>
                <p className="mt-1">$16.00</p>
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">

              <Link className="block relative h-48 rounded overflow-hidden hover:scale-110" to='/Category/Earring'>
                <img alt="hor.jpg" className="object-cover object-center w-full h-full block" src="ear1.avif" />
              </Link>
              <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY-Earrings</h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">Shooting Earrings</h2>
                <p className="mt-1">$21.15</p>
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a className="block relative h-48 rounded overflow-hidden hover:scale-110">
                <img alt="images (3).jpeg" className="object-cover object-center w-full h-full block" src="images (3).jpeg" />
              </a>
              <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">Neptune</h2>
                <p className="mt-1">$12.00</p>
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a className="block relative h-48 rounded overflow-hidden hover:scale-110">
                <img alt="images (2).jpeg" className="object-cover object-center w-full h-full block" src="images (2).jpeg" />
              </a>
              <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">The 400 Blows</h2>
                <p className="mt-1">$18.40</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
