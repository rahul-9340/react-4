
import React from "react";
import { createSlice,createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";


const initialState = {
loading:false,
post:[],
error:"",
AddCart:[]
}

export const fetchProducts = createAsyncThunk("post/fetchProducts",()=>{
return axios.get('https://dummyjson.com/products')
.then((response)=>response.data)
})

const{pending,fulfilled,rejected} = fetchProducts;


const ProductSlice = createSlice({
name:'Product',
initialState:initialState,
reducers:{
AddCart:(state,action)=>{
const[newItem, itemId] = action.payload;
let flag = false

state.AddCart.forEach((item)=>{
    if(item.id==itemId){
        flag = true
    }

})
if(!flag){
    state.AddCart.push(newItem)
}

},
RemoveCart:(state,action)=>{state.AddCart=state.AddCart.filter((items)=>(action.payload!==items.id))},
Clear:(state)=>{state.AddCart=[]}

}
,
//state.AddCart.push(action.payload)
extraReducers:(builder)=>{
builder.addCase(pending,state=>{
    state.loading = true;
})
builder.addCase(fulfilled,(state,action)=>{
state.loading = false;
state.post = action.payload;
state.error = ''
})
builder.addCase(rejected,(state,action)=>{
state.loading = false;
state.post = [];
state.error = action.error.message
})
}

}
)




export const {AddCart,RemoveCart,Clear} = ProductSlice.actions

export default ProductSlice.reducer;














































