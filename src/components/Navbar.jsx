import React, { useEffect } from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Mode } from "../redux/features/TogleReducer";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    console.log("hii");
  }, []);

const Navigate = useNavigate()
  let styling = useSelector((state) => state.Toggle.backgroundColor);
  console.log(styling)

let className = useSelector((state)=>state.Toggle.class)
console.log(className)

 const [bg, setbg] = useState("");
 const[toggleclass,SetToggleClass]=useState("")

  // let style = {
  //   backgroundColor: bg,
  // };

  function togglefn(e) {
    console.log(bg, toggleclass);
    if (e.target.classList.contains("move")) {
      // SetToggleClass("move-again");
      // e.target.style.backgroundColor = "black";

      setbg("black");
      dispatch(Mode(["white","move-again"]));
      // SetToggleClass(className)
      // e.target.classList.add(className)

    } else {
        SetToggleClass("move");
      // e.target.style.backgroundColor = "red";
      setbg("grey");
      dispatch(Mode(["black","move"]));
      // SetToggleClass(className)
      // e.target.classList.add(className)
    }
  }


  return (
    <div style={{backgroundColor: bg}} className="main-nav">
      <div className="Navbar">
        <div className="nav-div-1">Shopping Cart</div>
        
        <div className="nav-div-2">
          <div className="icons">
        <div className="icon">
          <FontAwesomeIcon icon={faSun} />
          </div>
          <div className="toggle">

            <div
              onClick={(e) => {
                togglefn(e);
              }}
              className={`mode ${className}`}
            ></div>
          </div>
          <div className="icon">
          <FontAwesomeIcon icon={faMoon} />
          </div>
          </div>
          <div className="pointer" onClick={(e)=>{Navigate("/")}}>
                  Home 
          </div>
          <div className="pointer" onClick={(e)=>{Navigate("/MyCart")}}>
                Cart Page
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;






