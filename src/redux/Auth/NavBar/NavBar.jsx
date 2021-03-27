import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { getIsAuthenticated, getUserName } from "../Auth-selectors";
import defaultAvatar from "../../../images/ava-octocat.png";
import styles from "./Navbar.module.css";
import { logout } from "../Auth-operations";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

const NavBar = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(getIsAuthenticated);
  const userName = useSelector(getUserName);

  return (
    <div className={styles.navWrapper}>
      {!isAuthenticated ? (
        <ul className={styles.NavBar}>
          <li className={styles.navLi}>
            <NavLink
              exact
              to="/register"
              className={styles.NavLink}
              activeClassName={styles.NavLinkActive}
            >
              Register
            </NavLink>
          </li>
          <li className={styles.navLink}>
            <NavLink
              exact
              to="/login"
              className={styles.NavLink}
              activeClassName={styles.NavLinkActive}
            >
              Login
            </NavLink>
          </li>
        </ul>
      ) : (
        <ul className={styles.loginNav}>
          <li>
            <span className={styles.loginTitle}>{`Hello, ${userName}`}</span>
          </li>
          <li>
            <img
              src={defaultAvatar}
              alt=""
              className={styles.loginAvatar}
            ></img>
          </li>
          <button
            type="button"
            className={styles.logoutBtn}
            onClick={() => dispatch(logout())}
          >
            <ExitToAppIcon color={"primary"} className={styles.logoutBtn} />
          </button>
        </ul>
      )}
    </div>
  );
};

export default NavBar;
