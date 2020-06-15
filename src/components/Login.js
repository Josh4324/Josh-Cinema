import React, { useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { useStateValue } from "./context/context";
import { fireAuth } from "./firebase/Firebase";
import styles from "./Login.module.css";

const Login = (props) => {
  const [{ user }, dispatch] = useStateValue();
  if (user.user !== null) {
    props.history.push("/");
  }
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [loading, setLoading] = useState("false");
  let ErrorRef = useRef("");

  const changeEmail = (evt) => {
    evt.preventDefault();
    setEmail(evt.target.value);
  };

  const changePassword = (evt) => {
    evt.preventDefault();
    setPassword(evt.target.value);
  };

  const submitData = (evt) => {
    setLoading("true");
    evt.preventDefault();
    fireAuth
      .signInWithEmailAndPassword(email, password)
      .then((result) => {
        dispatch({
          type: "userData",
          newUserdata: { user: result.user },
        });
        localStorage.setItem("user", JSON.stringify(result.user));

        props.history.push("/");
      })
      .catch(function (error) {
        setLoading("false");
        const errorCode = error.code;
        const errorMessage = error.message;
        let err = {
          errorCode,
          errorMessage,
        };
        ErrorRef.current.textContent = err.errorMessage;
      });
  };
  return (
    <div className={styles.formblock}>
      <div className={styles.formbody}>
        <h3 className={styles.formhead}> Login </h3>
        <form className={styles.form} onSubmit={submitData}>
          <input
            placeholder="Enter your email"
            className={styles.inputblock}
            type="email"
            name="email"
            onChange={changeEmail}
            value={email}
          />
          <input
            placeholder="Enter your password"
            className={styles.inputblock}
            type="password"
            name="password"
            onChange={changePassword}
            value={password}
          />

          <div className={loading === "false" ? null : "sk-circle"}>
            <div className="sk-circle1 sk-child"></div>
            <div className="sk-circle2 sk-child"></div>
            <div className="sk-circle3 sk-child"></div>
            <div className="sk-circle4 sk-child"></div>
            <div className="sk-circle5 sk-child"></div>
            <div className="sk-circle6 sk-child"></div>
            <div className="sk-circle7 sk-child"></div>
            <div className="sk-circle8 sk-child"></div>
            <div className="sk-circle9 sk-child"></div>
            <div className="sk-circle10 sk-child"></div>
            <div className="sk-circle11 sk-child"></div>
            <div className="sk-circle12 sk-child"></div>
          </div>

          <input type="submit" className={styles.submit} value="Sign In" />

          <div className={styles.error} ref={ErrorRef}></div>
        </form>
        <NavLink className={styles.forgot} to="/forgotpassword">
          Forgot Your Password?
        </NavLink>
      </div>
      <div className={styles.acc}>
        Dont have an Account?
        <NavLink to="/register" className={styles.sign}>
          Sign up here
        </NavLink>
      </div>
    </div>
  );
};

export default Login;
