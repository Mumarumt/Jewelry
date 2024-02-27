
import Header from "./component/Header"
import Home from "./pages/Home";
import Product from "./pages/Products";
import Footer from "./component/Footer/Footer";
import About from "./pages/About";
import ContactUS from "./pages/ContactUS";
import SingleProduct from "./pages/SProduct/SingleProduct";
import ShopCart from "./pages/Cart/Cart"
import Custom_Design from "./pages/Services/Custom_Design";
import Repairs from "./pages/Services/Repairs";
import Rings from "./pages/CATEGORY/rings";
import Valutaions from "./pages/Services/Valutaions";
import Earring from "./pages/CATEGORY/Earring";
import Necklace from "./pages/CATEGORY/Necklace";
import Bracelet from "./pages/CATEGORY/Bracelet";
import DynamicProducts from "./pages/DProducts";

import {BrowserRouter as Router, Routes,Route} from 'react-router-dom';
function App() {
  
  return (
           
    <>

<Header/>
        <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/SingleProduct/:id" element={<SingleProduct/>}/>
        <Route path="/Product" element={<Product/>}/> 
        <Route path="/About" element={<About/>}/> 
        <Route path="/ContactUS" element={<ContactUS/>}/>
        <Route path="/ShopCart" element={<ShopCart/>}/>
        <Route path="/DynamicProducts" element={<DynamicProducts/>}/>
        <Route path="/services/Custom_Design" element={<Custom_Design/>}/>
        <Route path="/services/Repairs" element={<Repairs/>}/>
        <Route path="/services/val" element={<Valutaions/>}/>
        <Route path="/Category/Rings" element={<Rings/>}/>
        <Route path="/Category/Earring" element={<Earring/>}/>
        <Route path="/Category/Necklace" element={<Necklace/>}/>
        <Route path="/Category/Bracelet" element={<Bracelet/>}/>
         </Routes>

         <Footer/>

</>
  )
}
export default App;