import React, { useState } from "react";
import { connect } from "react-redux";
import { register } from "../Auth-operations";
import styles from "./Register.module.css";

const Register = ({ onRegister }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const updateName = (evt) => {
    setName(evt.target.value);
  };
  const updateEmail = (evt) => {
    setEmail(evt.target.value);
  };
  const updatePassword = (evt) => {
    setPassword(evt.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onRegister({ name, email, password });
  };

  return (
    <div className={styles.registerWrapper}>
      <h2 className={styles.regMainTitle}>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <div>
            <span className={styles.registerFormTitle}>Username</span>
            <input
              name="name"
              type="text"
              placeholder="Jesus"
              value={name}
              onChange={updateName}
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
              value={email}
              onChange={updateEmail}
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
              value={password}
              onChange={updatePassword}
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
};
const mapDispatchToProps = {
  onRegister: register,
};
export default connect(null, mapDispatchToProps)(Register);