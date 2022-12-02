import {configureStore} from "@reduxjs/toolkit";
import cartSlice from "./slices/cartSlice.js";
import productSlice from "./slices/productSlice";
import authSlice from "./slices/authSlice.js";
import categorySlice from "./slices/categorySlice.js";

export const store = configureStore({
    reducer:{
        cart: cartSlice,
        product: productSlice,
        category: categorySlice,
        auth: authSlice,
    }
})

