import { useRef } from "react";
import {FaBars, FaTimes } from "react-icons/fa";
import "../Styles/main.css";
import { slide as Menu } from 'react-burger-menu'

function NavbarComp() {

  const navRef = useRef();
  
  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  }

  return (
    <header className="upper-nav">
      <nav ref={navRef}>
          <a href="/#">SHOP</a>
      </nav>
    </header>
  );
}

export default NavbarComp;
