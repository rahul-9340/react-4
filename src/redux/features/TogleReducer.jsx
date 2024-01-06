import React from "react";

import { createSlice } from "@reduxjs/toolkit";

let initialState ={
 backgroundColor:"white",
 class:""
}

const ToggleSlice = createSlice({
    name:"Toggle",
    initialState:initialState,
    reducers:{
        Mode:(state,action)=>{
            console.log(action)
            state.backgroundColor=action.payload[0]
            state.class = action.payload[1]
        },
    }
  
})



export const {Mode} = ToggleSlice.actions; 


export default ToggleSlice.reducer;


