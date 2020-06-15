import React from "react";
import { Link } from "react-router-dom";
import { useStateValue } from "../context/context";
import styles from "./Settings.module.css";

const Settings = (props) => {
  const [{ user }] = useStateValue();
  return (
    <div className={styles.body}>
      <Link className={styles.item} to="/profile">
        Profile
      </Link>
      <Link className={styles.item} to="/preference">
        Preferences
      </Link>
      { user.user !== null ? <a href="/" className={styles.logout} onClick={props.logout}>Logout</a> : null}
    </div>
  );
};

export default Settings;
