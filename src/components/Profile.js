import React from "react";
import { useStateValue } from "./context/context";

const Profile = (props) => {
  const [{ user }] = useStateValue();
  if (user.user === null) {
    props.history.push("/login");
  }
  return <div></div>;
};

export default Profile;
