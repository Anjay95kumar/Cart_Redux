import React from "react";
import '../Component/Landing.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
function Landing() {
  const carts = useSelector((state) => state.cart);
  return (
    <div className="Main-Container">
        
      <div className="Container-Left">
      <img src='/Capture.PNG' alt="Logo" />
      </div>
      
      
      <div className="Container-Right">
      <Link to="/Home" className="links" style={{color:"red"}}>Home</Link>
        <Link to="/About" className="links">About</Link>
        <Link to="Service" className="links">Service</Link>
        <Link to="Catogary" className="links">Catogary</Link>
        <Link to="Contactus" className="links">Contact Us</Link>
        <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
        <Link to="/CartPage" className="links">
          
          <div style={{display:"flex" , justifyContent:"center",alignItems:"center"}}>
          <FontAwesomeIcon icon={faCartPlus}  style={{fontSize:30}}/>
          <sup><p>{carts?.data?.length}</p></sup>
          </div>
          </Link>
        
        </div>
        
      </div>
    </div>
  );
}
export default Landing;




