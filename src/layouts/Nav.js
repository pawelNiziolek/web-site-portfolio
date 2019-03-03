import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/nav.css";

const Nav = () => {
  return (
    <>
      <div className="menu">
        <div className="nav-home">
          <p>
            <NavLink to="/" exact className="on-">
              Home
            </NavLink>
          </p>
        </div>
        <nav className="navigation">
          <ul>
            <li>
              <NavLink to="/about" className="on-">
                O mnie <span />
              </NavLink>
            </li>
            <li>
              <NavLink to="/projects" className="on-">
                Projekty
                <span />
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className="on-">
                Kontakt
                <span />
              </NavLink>
            </li>
          </ul>
        </nav>
        {/* <nav className="navigation-media">
          <ul>
            <li>
              <NavLink to="/about">O mnie</NavLink>
            </li>
            <li>
              <NavLink to="/projects">Projekty</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Kontakt</NavLink>
            </li>
          </ul>
        </nav> */}
      </div>
    </>
  );
};

export default Nav;
