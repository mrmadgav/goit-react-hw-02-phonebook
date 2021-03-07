import React, { Component } from "react";
import { connect } from "react-redux";
import { register } from "../Auth-operations";
import styles from "./Register.module.css";

class Register extends Component {
  state = {
    name: "",
    email: "",
    password: "",
  };
  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };
  handleSubmit = (e) => {
    e.preventDefault();

    this.props.onRegister(this.state);
    this.setState({ name: "", email: "", password: "" });
  };
  render() {
    return (
      <div className={styles.registerWrapper}>
        <h2 className={styles.regMainTitle}>Sign Up</h2>
        <form onSubmit={this.handleSubmit}>
          <label>
            <div>
              <span className={styles.registerFormTitle}>Username</span>
              <input
                name="name"
                type="text"
                placeholder="Jesus"
                // value={name}
                onChange={this.handleChange}
                className={styles.regInput}
                required
              />
            </div>
          </label>
          <label>
            <div>
              <span className={styles.registerFormTitle}>Email </span>
              <input
                name="email"
                type="text"
                placeholder="IlonMask@mail.ru"
                // value={name}
                onChange={this.handleChange}
                className={styles.regInput}
                required
              />
            </div>
          </label>
          <label>
            <div>
              <span className={styles.registerFormTitle}>Password</span>
              <input
                name="password"
                type="text"
                placeholder="123"
                // pattern="[0-9]{3}-[0-9]{3}-[0-9]{2}-[0-9]{2}"
                // value={number}
                onChange={this.handleChange}
                className={styles.regInput}
              />
            </div>
          </label>
          <button type="submit" className={styles.regBtn}>
            Create an account
          </button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = {
  onRegister: register,
};

export default connect(null, mapDispatchToProps)(Register);
