import React from "react";
import { NavLink } from "react-router-dom";

const NavWrap = () => {
  return (
    <div className="menu">
      <div className="nav-home">
        <p>
          <NavLink
            to={process.env.PUBLIC_URL + "/"}
            exact
            activeClassName="active-start"
          >
            Start
          </NavLink>
        </p>
      </div>
      <nav className="navigation">
        <ul>
          <li>
            <NavLink
              to={process.env.PUBLIC_URL + "/about"}
              activeClassName="active-about"
            >
              O mnie <span />
            </NavLink>
          </li>
          <li>
            <NavLink
              to={process.env.PUBLIC_URL + "/projects"}
              activeClassName="active-projects"
            >
              Projekty
              <span />
            </NavLink>
          </li>
          <li>
            <NavLink
              to={process.env.PUBLIC_URL + "/contact"}
              activeClassName="active-contact"
            >
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
