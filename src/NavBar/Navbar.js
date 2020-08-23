import React from "react";
import "./Navbar.css"

function Navbar() {

  return (
    <div id="myMenu" className={"navbar-menu"}>
      <span><a data-menuanchor="About" href="#About">About</a></span>
      <span><a data-menuanchor="Resume" href="#Resume">Resume</a></span>
      <span><a data-menuanchor="Projects" href="#Projects">Projects</a></span>
      <span><a data-menuanchor="Gallery" href="#Gallery">Gallery</a></span>
      <span><a data-menuanchor="Contact" href="#Contact">Contact</a></span>
    </div>
    )
}

export default Navbar;