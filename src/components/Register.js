import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import { useStateValue } from "./context/context";
import { fireAuth, firebase } from "./firebase/Firebase";
import styles from "./Register.module.css";

const Register = (props) => {
  const [{ user }, dispatch] = useStateValue();
  if (user.user !== null) {
    props.history.push("/");
  }
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [confirmpassword, setConfirmPassword] = useState("");
  let [loading, setLoading] = useState("false");
  let ErrorRef = useRef("");

  const writeUserData = (userId, email) => {
    firebase
      .database()
      .ref("users/" + userId)
      .set({
        userId: userId,
        email: email,
      });
  };

  const changeEmail = (evt) => {
    evt.preventDefault();
    setEmail(evt.target.value);
  };

  const changePassword = (evt) => {
    evt.preventDefault();
    setPassword(evt.target.value);
  };

  const changeCpassword = (evt) => {
    evt.preventDefault();
    setConfirmPassword(evt.target.value);
  };

  const submitData = (evt) => {
    setLoading("true");
    evt.preventDefault();
    if (password === confirmpassword) {
      fireAuth
        .createUserWithEmailAndPassword(email, password)
        .then((result) => {
          let email = result.user.email;
          let userId = result.user.uid;
          writeUserData(userId, email);
          dispatch({
            type: "userData",
            newUserdata: { user: result.user },
          });
          localStorage.setItem("user", JSON.stringify(result.user));
          props.history.push("/profile");
        })
        .catch(function (error) {
          setLoading("false");
          const errorCode = error.code;
          const errorMessage = error.message;
          let err = {
            errorCode,
            errorMessage,
          };
          console.log(err);
          ErrorRef.current.textContent = err.errorMessage;
        });
    } else {
      ErrorRef.current.textContent = "Passwords are not the same";
    }
  };

  return (
    <div className={styles.formblock}>
      <div className={styles.formbody}>
        <h3 className={styles.formhead}> Register </h3>{" "}
        <form className={styles.form} onSubmit={submitData}>
          <input
            placeholder="Enter your email"
            className={styles.inputblock}
            type="email"
            name="email"
            value={email}
            onChange={changeEmail}
          />
          <input
            placeholder="Enter your password"
            className={styles.inputblock}
            type="password"
            name="password"
            value={password}
            onChange={changePassword}
          />

          <input
            placeholder="Confirm your password"
            className={styles.inputblock}
            type="password"
            name="confirmpassword"
            value={confirmpassword}
            onChange={changeCpassword}
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

          <input type="submit" className={styles.submit} value="Register" />

          <div className={styles.error} ref={ErrorRef}></div>
        </form>
      </div>
      <div className={styles.acc}>
        Already have an Account ?
        <Link to="/login" className={styles.sign}>
          Sign in here
        </Link>
      </div>
    </div>
  );
};

export default Register;
