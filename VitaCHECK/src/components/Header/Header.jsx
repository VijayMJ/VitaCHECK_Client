import React from "react";
import "./Header.scss";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header-container">
      <Link to="/">
        <h3 className="header-container__logo">VitaCHECK</h3>
      </Link>
    </header>
  );
}

export default Header;
