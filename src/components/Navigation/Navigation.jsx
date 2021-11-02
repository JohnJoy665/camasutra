import React from "react";
import n from "./navigation.module.css"
import {NavLink} from "react-router-dom";

const Navigation = () => {
    return (
        <nav className={n.navigation}>
          <div  className={n.navigation__item}>
              <NavLink className={n.navigation__link} activeClassName={n.activeLink} to="/profile">Profile</NavLink>
          </div>
          <div  className={n.navigation__item}>
              <NavLink className={n.navigation__link} activeClassName={n.activeLink} to="/dialogs">Dialogs</NavLink>
          </div>
          <div className={n.navigation__item}>
              <NavLink className={n.navigation__link} activeClassName={n.activeLink} to="/news">News</NavLink>
          </div>
          <div className={n.navigation__item}>
              <NavLink className={n.navigation__link} activeClassName={n.activeLink} to="/music">Music</NavLink>
          </div>
          <div className={n.navigation__item}>
              <NavLink className={n.navigation__link} activeClassName={n.activeLink} to="/settings">Settings</NavLink>
          </div>
        </nav>
    )
}

export default Navigation;