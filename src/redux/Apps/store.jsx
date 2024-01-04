import React from "react";
import ProductSlice from "../features/ProductReducer"
import { configureStore } from "@reduxjs/toolkit";


const store = configureStore({
    reducer:{
    Product:ProductSlice
    }
})



export default store
