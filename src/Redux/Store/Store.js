import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "../Features/CartSlice";

export const Store = configureStore({
    reducer:{
       cart: CartSlice
    }
})