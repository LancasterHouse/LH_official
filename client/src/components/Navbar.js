import { useRef } from "react";
import {FaBars, FaTimes } from "react-icons/fa";
import "../Styles/main.css";

function NavbarComp() {

  const navRef = useRef();
  
  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  }

  return (
    <header>
      <nav ref={navRef}>
          <a href="/#">CART</a>
          <a href="/#">ACCOUNT</a>

          <a href="/#">SEARCH</a>

          <a href="/#">CONTACT</a>
          <button className="nav-btn nav-close-btn" onClick={showNavbar}>
            <FaTimes />
          </button>

      </nav>
      <button className="nav-btn" onClick={showNavbar}>
          <FaBars />
      </button>

      <h3>Logo</h3>

      
    </header>
  );
}

export default NavbarComp;