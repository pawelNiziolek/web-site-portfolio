import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/nav.css";

const Nav = () => {
  return (
    <>
      <div className="menu">
        <div className="nav-home">
          <p>
            <NavLink to="/" exact className="on-contac">
              Start
            </NavLink>
          </p>
        </div>
        <nav className="navigation">
          <ul>
            <li>
              <NavLink to="/about" className="on-contac">
                O mnie <span />
              </NavLink>
            </li>
            <li>
              <NavLink to="/projects" className="on-contac">
                Projekty
                <span />
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className="on-contac">
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
