import React, { Component } from "react";
import { connect } from "react-redux";
import { login } from "../Auth-operations";
import styles from "./Login.module.css";
import mainAnimation from "../../../images/animation.gif";

class Login extends Component {
  state = {
    email: "",
    password: "",
  };
  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onLogin(this.state);
    this.setState({ email: "", password: "" });
  };
  render() {
    return (
      <div className={styles.loginWrapper}>
        <div>
          <img src={mainAnimation} alt="" className={styles.mainAnimation}/>
        </div>
        <div className={styles.registerWrapper}>
          <form onSubmit={this.handleSubmit}>
            <label
            // className={styles.formLabel}
            >
              <span className={styles.registerFormTitle}>Email</span>
              <input
                name="email"
                type="email"
                placeholder=""
                // value={name}
                onChange={this.handleChange}
                className={styles.regInput}
                required
              />
            </label>
            <label
            // className={styles.formLabel}
            >
              <span className={styles.registerFormTitle}>Password</span>
              <input
                name="password"
                type="text"
                placeholder=""
                // pattern="[0-9]{3}-[0-9]{3}-[0-9]{2}-[0-9]{2}"
                // value={number}
                onChange={this.handleChange}
                className={styles.regInput}
                required
              />
            </label>
            <button type="submit" className={styles.regBtn}>
              Log In
            </button>
          </form>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = {
  onLogin: login,
};

export default connect(null, mapDispatchToProps)(Login);
