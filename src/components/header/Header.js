import React from 'react';
import "./header.css";
import CTA from "./CTA";
import ME from "../../assets/me.png"

const Header = () => {
  return (
    <header>
     <div className="container header_container">
       <h5>Hello I'm</h5>
       <h1>GOULMANE Mouad</h1>
       <h5 className="text-light">Full Stack Developer</h5>
       <CTA />
       <div className="me">
         <img src={ME} alt="me"/>
       </div>
     </div>
    </header>
  )
}
 
export default Header