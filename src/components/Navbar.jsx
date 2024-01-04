import React from "react";
import { NavLink } from "react-router-dom";


const Navbar = ()=>{

return(

    <div className="main-nav">
    <div className ="Navbar">

<div className="nav-div-1">Shopping Cart</div>
<div className="nav-div-2">
    <div><NavLink to ="/">Home Page</NavLink></div>
    <div><NavLink to ="/MyCart">Cart Page</NavLink></div>
</div>


</div>
    </div>
)

}

export default Navbar

