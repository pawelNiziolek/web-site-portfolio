import React from "react";
import { NavLink } from "react-router-dom";

const NavMedia = () => {
  return (
    <>
      <div className="media-home">
        <NavLink to="/" exact activeClassName="active-start">
          Start
        </NavLink>
        <div className="show-hide">
          <div className="show">
            <span className="s-one out" />
            <span className="s-two out" />
            <span className="s-three out" />
          </div>
          {/* <div className="hide">
            <span className="h-one" />
            <span className="h-two" />
          </div> */}
        </div>
      </div>
      <nav className="media-menu">
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
    </>
  );
};

export default NavMedia;
