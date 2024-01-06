
import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import MyCart from "./components/MyCart";
import { Route,Routes } from "react-router-dom";
import { useSelector } from "react-redux";

const App = ()=>{
    let styling = useSelector((state)=>state.Toggle)

return(
<div>
    
<Routes>
<Route path="/" element ={<Home/>}/>
<Route path="/MyCart" element ={<MyCart/>}/>
</Routes>

</div>

)

}


export default App







