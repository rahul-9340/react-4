import React, { useEffect } from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Mode } from "../redux/features/TogleReducer";
import { useNavigate } from "react-router-dom";


const Navbar = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    console.log("hii");
  }, []);

const Navigate = useNavigate()
  let styling = useSelector((state) => state.Toggle);
  const [bg, setbg] = useState("");
  const[toggleclass,SetToggleClass]=useState("mode")
  let style = {
    backgroundColor: bg,
  };

  function togglefn(e) {
    console.log("toggle called")
    if (e.target.classList.contains("move")) {
      SetToggleClass("move-again");
      e.target.style.backgroundColor = "black";

      setbg("black");
      dispatch(Mode("white"));
    } else {
        SetToggleClass("move");
      e.target.style.backgroundColor = "red";
      setbg("grey");
      dispatch(Mode("black"));
    }
  }

  return (
    <div style={style} className="main-nav">
      <div className="Navbar">
        <div className="nav-div-1">Shopping Cart</div>
        <div className="nav-div-2">
          <div className="toggle">
            <div
              onClick={(e) => {
                togglefn(e);
              }}
              className={`mode ${toggleclass}`}
            ></div>
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
