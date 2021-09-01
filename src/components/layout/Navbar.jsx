import React, { useEffect, useState } from "react";

import Logo from "../../images-svg/logo.png";
import PadlockSvg from "../../images-svg/lock.svg";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  let prevScrollPosition = 0;
  const handleNavOnScroll = () => {
    let currentScrollPosition = window.scrollY;

    currentScrollPosition >= 0 ? setIsScrolled(true) : setIsScrolled(false);
    prevScrollPosition = currentScrollPosition;
  };

  useEffect(() => {
    window.addEventListener("scroll", handleNavOnScroll);
    return () => window.removeEventListener("scroll", handleNavOnScroll);
  }, []);

  return (
    <nav className={`navbar ${isScrolled && "active"}`}>
      <a href="#" className="navbar_logo">
        <img src={Logo} alt="logo" className="navbar_logo" />
      </a>
      <button className="navbar_loginBtn">
        <img src={PadlockSvg} alt="paddlock" className="navbar_loginBtn_icon" />{" "}
        Login
      </button>
    </nav>
  );
};

export default Navbar;
