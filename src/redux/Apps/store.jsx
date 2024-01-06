import React from "react";
import ProductSlice from "../features/ProductReducer"
import { configureStore } from "@reduxjs/toolkit";
import TogleReducer from "../features/TogleReducer";

const store = configureStore({
    reducer:{
    Product:ProductSlice,
    Toggle:TogleReducer
    }
})



export default store
