import {Navigate, Route, Routes} from "react-router-dom";
import {Home} from "../pages/Home";
import {Shop} from "../pages/Shop";
import {ProductDetails} from "../pages/ProductDetails";
import {Cart} from "../pages/Cart";
import {Checkout} from "../pages/Checkout";
import {Login} from "../pages/Login";
import {Signup} from "../pages/Signup";
import {Reset} from "../pages/Reset";
import {Category} from "../pages/Category.jsx";

export const Routers = () => {
  return (
      <Routes>
          <Route path="/" element={<Navigate to="home"/>}/>
         <Route path="home" element={<Home/>}/>
         <Route path="shop" element={<Shop/>}/>
         <Route path="shop/:id" element={<ProductDetails/>}/>
         <Route path="category/:name" element={<Category/>}/>
         <Route path="cart" element={<Cart/>}/>
         <Route path="checkout" element={<Checkout/>}/>
         <Route path="login" element={<Login/>}/>
         <Route path="signup" element={<Signup/>}/>
         <Route path="reset" element={<Reset/>}/>
      </Routes>
  )
}
