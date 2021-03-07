import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./MainNav.module.css";

const MainNav = () => {
  return (
    <div>
      <ul className={styles.MainBar}>
        <li className={styles.navLi}>
          <NavLink
            exact
            to="/"
            className={styles.NavLink}
            activeClassName={styles.NavLinkActive}
          >
            Main
          </NavLink>
        </li>
        <li className={styles.navLink}>
          <NavLink
            exact
            to="/contacts"
            className={styles.NavLink}
            activeClassName={styles.NavLinkActive}
          >
            Contacts
          </NavLink>
        </li>
      </ul>
    </div>
  );
};
export default MainNav;
