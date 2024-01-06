import React from "react";

import { createSlice } from "@reduxjs/toolkit";

let initialState ={
 backgroundColor:"white"
}

const ToggleSlice = createSlice({
    name:"Toggle",
    initialState:initialState,
    reducers:{
        Mode:(state,action)=>{state.backgroundColor=action.payload},
    }
   
})


export const {Mode} = ToggleSlice.actions; 


export default ToggleSlice.reducer;


