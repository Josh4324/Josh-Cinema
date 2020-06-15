import React from 'react';
import styles from "./Forgot.module.css";

const ForgotPassword = () => {
    return (
        <div className={styles.formblock}>
        <div className={styles.formbody}>
          <h3 className={styles.formhead}> Reset Password </h3>
          <form className={styles.form}>
            <input
              placeholder="Enter your email"
              className={styles.inputblock}
              type="email"
              name="email"
              value=""
            />
            <input type="submit" className={styles.submit} value="Reset Password" />
            <div>
              <div> </div>
              <div></div> <div> </div>
              <div></div>
            </div>
            <div className={styles.none}>Email and Password do not match, please try again</div>
          </form>
          
        </div>
      </div>
    );
}

export default ForgotPassword;
