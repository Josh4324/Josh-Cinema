import React from "react";
import { Link } from "react-router-dom";
import { useStateValue } from "./context/context";
import styles from "./Profile.module.css";

const Profile = (props) => {
  const [{ user }] = useStateValue();
  if (user.user === null) {
    props.history.push("/login");
  }
  return (
    <div>
      <div>
        <img className={styles.banner} src="./banner.jpg" alt="banner" />
      </div>
      <img
        className={styles.pic}
        src="https://res.cloudinary.com/josh4324/image/upload/v1590744194/mgiwtceahabuaeeincnl.jpg"
        alt="profile"
      />
      <div className={styles.profilebox}>
        <h2 className={styles.displayName}>Joshua Adesanya</h2>
        <h4>adeesanyajoshua@ymail.com</h4>
        <h4>08029545655</h4>
        <Link className={styles.editp} to="/editprofile">Edit Profile</Link>
      </div>
    </div>
  );
};

export default Profile;
