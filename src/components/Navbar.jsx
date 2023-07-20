import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../App.css";

import { HashLink } from "react-router-hash-link";

function Navbar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header>
      <h3>Pawan</h3>
      <div className="nav-container">
        <nav ref={navRef}>
          <HashLink to="/">Home</HashLink>
          <HashLink smooth to="#about">
            About
          </HashLink>
          <HashLink smooth to="#skills">
            Skill
          </HashLink>
          <HashLink smooth to="#services">
            Service
          </HashLink>
          <HashLink smooth to="#qualification">
            Qualification
          </HashLink>
          <HashLink smooth to="#contact">
            Contact
          </HashLink>
          <button className="nav-btn nav-close-btn" onClick={showNavbar}>
            <FaTimes />
          </button>
        </nav>
        <button className="nav-btn" onClick={showNavbar}>
          <FaBars />
        </button>
      </div>
    </header>
  );
}

export default Navbar;
