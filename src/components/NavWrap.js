import React from "react";
import { NavLink } from "react-router-dom";

const NavWrap = () => {
  return (
    <div className="menu">
      <div className="nav-home">
        <p>
          <NavLink to="/" exact activeClassName="active-start">
            Start
          </NavLink>
        </p>
      </div>
      <nav className="navigation">
        <ul>
          <li>
            <NavLink to="/about" activeClassName="active-about">
              O mnie <span />
            </NavLink>
          </li>
          <li>
            <NavLink to="/projects" activeClassName="active-projects">
              Projekty
              <span />
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" activeClassName="active-contact">
              Kontakt
              <span />
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavWrap;
