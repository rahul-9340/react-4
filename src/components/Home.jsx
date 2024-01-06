import React from "react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../redux/features/ProductReducer";
import { AddCart } from "../redux/features/ProductReducer";
import { Mode } from "../redux/features/TogleReducer";
import Navbar from "./Navbar";

const Home = () => {
  const dispatch = useDispatch();
  const post = useSelector((state) => state.Product.post.products);
  // console.log(post);

  let styling = useSelector((state)=>state.Toggle)
  
  useEffect(()=>{
      dispatch(fetchProducts())
  },[dispatch])

function AddCartfn(items){
dispatch(AddCart([items,items.id]))
}




//.Product.post.products
  return (
<div className="app" style={styling} >
      <Navbar/>



    <div  className="HomePage">
      
      <h1>All Items</h1>


    <div className = "products-list">
      {post &&
        post.map((items) => (
          <div className="product">



            {

           items.images[1]&&(<p> 
            <img src = {items.images[0]}
            alt={`Product ${items.id} Image`}
            />
            </p>
            )}       
           

           <p>Title:{items.title}</p>
           <p>Price:{items.price}</p>
           <button onClick={()=>{AddCartfn(items)}}>Add TO Cart</button>
          </div>
        ))}

</div>


    </div>
    </div>
  );
};

export default Home;
