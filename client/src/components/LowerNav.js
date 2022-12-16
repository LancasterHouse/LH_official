import { useRef } from "react";
import {FaBars, FaTimes } from "react-icons/fa";
import Logo from "../assets/images/LH-transparent.png";
import "../Styles/main.css";

function LowerNav() {

  const navRef = useRef();
  
  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  }

  return (
    <div className="LowHeader">
        <div>
        <img className="logo" src={Logo}  alt="Lancaster House logo"/>

        </div>


      <nav className="lowNav" ref={navRef}>
          <a href="/#">Home</a>
          <a href="/#">About Us</a>

          <a href="/#">Conferences & Training</a>

          <a href="/#">First Resort</a>

          <a href="/#">Unionized Workplace Law</a>
          <a href="/#">Events Calendar</a>

          <a href="/#">Publications</a>

          <a href="/#">Labour Arbitrition in Canada</a>
          <button className="nav-btn nav-close-btn" onClick={showNavbar}>
            <FaTimes />
          </button>

      </nav>
      <button className="nav-btn" onClick={showNavbar}>
          <FaBars />
      </button>


      
    </div>
  )
}

export default LowerNav;