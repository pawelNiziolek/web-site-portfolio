import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/nav.css";

const Nav = () => {
  return (
    <>
      <div className="menu">
        <div className="nav-home">
          <p>
            <NavLink to="/" exact>
              Start
            </NavLink>
          </p>
        </div>
        <nav className="navigation">
          <ul>
            <li>
              <NavLink to="/about">
                O mnie <span />
              </NavLink>
            </li>
            <li>
              <NavLink to="/projects">
                Projekty
                <span />
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact">
                Kontakt
                <span />
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Nav;
