import React from "react";

import Logo from "../../images-svg/logo.png";
import PadlockSvg from "../../images-svg/lock.svg";

const Navbar = () => {
  return (
    <nav className="navbar">
      <img src={Logo} alt="logo" className="navbar_logo" />
      <button className="navbar_loginBtn">
        <img src={PadlockSvg} alt="paddlock" className="navbar_loginBtn_icon" />{" "}
        Login
      </button>
    </nav>
  );
};

export default Navbar;
