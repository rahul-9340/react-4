import React, { useEffect } from "react";
import Navbar from "./Navbar";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { RemoveCart } from "../redux/features/ProductReducer";
import { useState } from "react";
import { Clear } from "../redux/features/ProductReducer";


const MyCart = ()=>{
const[checkout,setcheckout] = useState(false) 

let styling = useSelector((state)=>state.Toggle)
const dispatch = useDispatch()
const CartDetails= useSelector((state)=>state.Product.AddCart)
console.log(CartDetails)



const totalPrice = CartDetails.reduce(
    (accumulator, product) => accumulator + (typeof product.price === 'number' ? product.price : 0),
    0
  );
  
  console.log(totalPrice);
// const Cart= useSelector((state)=>state)
// console.log(Cart)

// useEffect(()=>{
// setcheckout(CartDetails)
// },[CartDetails])

// console.log(checkout)

function RemoveCartfn(id){
dispatch(RemoveCart(id))
}


function clearcart(){
    dispatch(Clear())
    setcheckout(true)
 if(checkout){
 alert("Add items")   
}
else{
 alert("items have been checkout out.")
}
    

}

let count = 1





return(

<div>
<Navbar/>
<h1>My Cart</h1>
<div className="mycart">

<div className = "products-list">
      {CartDetails.length>0 &&
        CartDetails.map((items) => (
          <div key={items.id} className="product">

        

            {
           items.images[1]&&(<p> 
            <img src = {items.images[1]}
            alt={`Product ${items.id} Image`}
            />
            </p>
            )}       
           

           <p>Title:{items.title}</p>
           <p>Price:{items.price}</p>
           <button onClick={()=>{RemoveCartfn(items.id)}}>Remove from Cart</button>
          </div>
        ))}

</div>

<div className="checkoutlist">

    <div className="check">Checkout List</div>
    {
        
CartDetails.length>0&&

CartDetails.map((items)=>(
    
<span className ="span">

<p>{count++}{". "}{items.title}</p>
<p>{items.price}</p>
</span>
))


    }
 <hr></hr>
<div className="span1"> 

<p>Total</p>
<p>{ totalPrice}</p>

</div>
<hr></hr>

<button onClick={()=>{clearcart()}} className="btn">Add to checkout</button>

    </div>





</div>








</div>

)}



export default MyCart








