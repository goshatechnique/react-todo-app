import React from "react";
import { NavLink } from "react-router-dom";

const Header = props => {
  return (
    <nav className="header">
      <div className="logo">{props.headerTitle}</div>
      <NavLink to="/home" className="nav-link">
        Главная
      </NavLink>
      <NavLink to="about" className="nav-link">
        Информация
      </NavLink>
    </nav>
  );
};

export default Header;
