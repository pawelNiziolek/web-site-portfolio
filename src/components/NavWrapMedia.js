import React from "react";
import { NavLink } from "react-router-dom";

const NavMenuMedia = props => {
  const { toogleHam, hamburgerActive } = props;
  return (
    <div className="menu-media">
      <div className="media-home">
        <NavLink
          to="/"
          exact
          activeClassName="active-start"
          onClick={hamburgerActive ? toogleHam : null}
        >
          Start
        </NavLink>
        <div className="show" onClick={toogleHam}>
          <span className={hamburgerActive ? "s-one go" : "s-one out"} />
          <span className={hamburgerActive ? "s-two go" : "s-two out"} />
          <span className={hamburgerActive ? "s-three go" : "s-three out"} />
        </div>
      </div>
      <nav className={hamburgerActive ? "media-menu" : "media-menu go"}>
        <ul>
          <li>
            <NavLink
              to="/about"
              className={hamburgerActive ? "a-ab on" : "a-ab off"}
              activeClassName="active-about"
              onClick={toogleHam}
            >
              O mnie <span />
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/projects"
              className={hamburgerActive ? "a-pr on" : "a-pr off"}
              activeClassName="active-projects"
              onClick={toogleHam}
            >
              Projekty
              <span />
            </NavLink>
          </li>
          <li>
            <NavLink
              to=
              className={hamburgerActive ? "a-co on" : "a-co off"}
              activeClassName="active-contact"
              onClick={toogleHam}
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

export default NavMenuMedia;
