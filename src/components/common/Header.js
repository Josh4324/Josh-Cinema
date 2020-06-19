import { faBars, faBell, faCompass, faHome, faSortDown, faTimes, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import Settings from "../common/Settings";
import styles from "./Header.module.css";

const Header = (props) => {
  const hamRef = useRef(null);
  const navRef = useRef(null);
  const arrowRef = useRef(null);
  const [navState, setNavState] = useState("true");
  const [setting, setSettingState] = useState(false);

  const toggleNav = () => {
    if (navRef.current.classList.contains("animation1")){
      setNavState("false");
      navRef.current.classList.remove("animation1");
      navRef.current.classList.add("animation2");
    }else{
      setNavState("true");
      navRef.current.classList.remove("animation2");
      navRef.current.classList.add("animation1");
    }
  }

  const toogleArrow = () => {
    setSettingState(!setting)
  }

  const logout = () => {
    localStorage.removeItem("user");
  };

  
  return (
    <div>
      <nav>
        <p className={styles.logo}>Logo</p>

        <div>
          <input
            type="search"
            placeholder="Search for Tickets"
            name="search"
            id="search"
            className={styles.search}
          />
        </div>

        <ul className={`${styles.navlist} ${styles.animation1}`} ref={navRef}>
          <li>
            <NavLink exact activeClassName="active" to="/">
              <FontAwesomeIcon className="fas" icon={faHome} />
            </NavLink>
          </li>
          <li>
          <NavLink to="/profile">
              <FontAwesomeIcon className="fas" icon={faUser} />
            </NavLink>
          </li>
          <li>
          <NavLink to="/discover">
              <FontAwesomeIcon className="fas" icon={faCompass} />
            </NavLink>
          </li>
          <li>
          <NavLink to="/notification">
              <FontAwesomeIcon className="fas" icon={faBell} />
            </NavLink>
          </li>
        </ul>

        <div ref={arrowRef} onClick={toogleArrow}>
            <FontAwesomeIcon className={`fas ${styles.arrow}`} icon={faSortDown} />
        </div>
        <div ref={hamRef} onClick={toggleNav}>
          { navState === "true" ? <FontAwesomeIcon className={`fas ${styles.ham}`} icon={faBars} /> : <FontAwesomeIcon className="fas ham" icon={faTimes} /> }
        </div> 
      </nav>
      {setting ? <Settings user={props.user} logout={logout} /> : null}
    </div>
  );
};

export default Header;
