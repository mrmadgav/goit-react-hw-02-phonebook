import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { getIsAuthenticated } from "../Auth-selectors";
import defaultAvatar from "../../../images/ava-octocat.png";
import styles from "./Navbar.module.css";
import { logout } from "../Auth-operations";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

const NavBar = ({ isAuthenticated, name, avatar, onLogout }) => {
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
            <span className={styles.loginTitle}>{`Hello, ${name}`}</span>
          </li>
          <li>
            <img src={avatar} alt="" className={styles.loginAvatar}></img>
          </li>
          <button type="button" className={styles.logoutBtn} onClick={onLogout}>
            <ExitToAppIcon color={"primary"} className={styles.logoutBtn} />
          </button>
        </ul>
      )}
    </div>
  );
};
const mapDispatchToProps = {
  onLogout: logout,
};

const mapStateToProps = (state) => ({
  isAuthenticated: getIsAuthenticated(state),
  name: state.authReducer.user.name,
  avatar: defaultAvatar,
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
