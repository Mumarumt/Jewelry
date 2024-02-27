import React,{useState,useEffect} from "react";
import Feature from "../component/Features/Feature";
import Product from "../pages/Products"
import Statistic from "../component/Statistic/Statistic";
import Slider from "../component/Slider";
export default function Home() {


  const [products,setProducts]= useState([])
  useEffect(() => {
    const fetchProducts= async () => {
      const response = await fetch('https://fakestoreapi.com/products/category/jewelery')
      const data= await response.json()
      console.log(data)
      setProducts(data)

    }
    fetchProducts()

  },[])
  return (
    <>
      <div>
        <section className="text-gray-600 body-font">
        
        <div className="flex justify-center "><Slider/>
          </div> 
          <div className="container mx-auto flex px-5 py-5 md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-blue-800">
              WELCOME TO THE JEWELRY STORE 
                
              </h1>
              <p className="mb-8 leading-relaxed">
              Our Jewellery Store is a luxury jewelery brand that strives to 
              provide its customers with timeless pieces crafted with the highest quality materials.
              </p>

            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 hover:scale-105">
            <img
            className="object-cover object-center rounded"
            alt="Main"
            src={process.env.PUBLIC_URL + "/main.jpg"}
          />
           </div>
          </div>
          <div className="container px-5 py-10 mx-auto">
 
        

          </div>
        </section>
        
      {
        products.length > 0 ?
        <Product products={products}/>
        :
        <div>Loading....</div>
      
      }

      </div>

      <Feature />
      <Statistic />

      {/* <br /> */}
    </>
  );
}
