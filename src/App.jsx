
import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import MyCart from "./components/MyCart";
import { Route,Routes } from "react-router-dom";
const App = ()=>{


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







