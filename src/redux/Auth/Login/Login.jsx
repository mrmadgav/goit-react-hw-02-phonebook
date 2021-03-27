import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../Auth-operations";
import styles from "./Login.module.css";
import mainAnimation from "../../../images/animation.gif";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const updateEmail = (evt) => {
    setEmail(evt.target.value);
  };
  const updatePassword = (evt) => {
    setPassword(evt.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login({ email, password }));
  };
  return (
    <div className={styles.loginWrapper}>
      <div>
        <img src={mainAnimation} alt="" className={styles.mainAnimation} />
      </div>
      <div className={styles.registerWrapper}>
        <form onSubmit={handleSubmit}>
          <label
          // className={styles.formLabel}
          >
            <span className={styles.registerFormTitle}>Email</span>
            <input
              name="email"
              type="email"
              placeholder=""
              // value={name}
              onChange={updateEmail}
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
              onChange={updatePassword}
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
};

export default Login;
