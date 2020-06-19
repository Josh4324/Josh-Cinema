import React, { useEffect } from "react";
import styles from "./Home.module.css";

const Home = (props) => {
  useEffect(() => {
    Array.prototype.forEach.call(
      document.querySelectorAll(".file-upload__button"),
      function (button) {
        const hiddenInput = button.parentElement.querySelector(
          ".file-upload__input"
        );
        const label = button.parentElement.querySelector(".file-upload__label");
        const defaultLabelText = "No video selected";

        // Set default text for label
        label.textContent = defaultLabelText;
        label.title = defaultLabelText;

        button.addEventListener("click", function () {
          hiddenInput.click();
        });

        hiddenInput.addEventListener("change", function () {
          const filenameList = Array.prototype.map.call(
            hiddenInput.files,
            function (file) {
              return file.name;
            }
          );

          label.textContent = filenameList.join(", ") || defaultLabelText;
          label.title = label.textContent;
        });
      }
    );
    return () => {};
  }, []);
  return (
    <div>
      <div className={styles.videoUpload}>
        <div className={styles.pro}>
          <img className={styles.profileImg}
            src="https://res.cloudinary.com/josh4324/image/upload/v1590744194/mgiwtceahabuaeeincnl.jpg"
            alt="pic-up"
          />
          <span className={styles.proname}>Joshua Adesanya</span>
          <input type="submit" className={styles.postbut} value="Post"/>
        </div>

        <textarea
          className={styles.textarea}
          name=""
          id=""
          cols="30"
          rows="10"
          placeholder="Enter your movie caption"
        ></textarea>
        <div className="file-upload">
          <input
            className="file-upload__input"
            type="file"
            name="myFile[]"
            id="myFile"
            accept="video/*"
          />
          <button className="file-upload__button" type="button">
            Upload Video
          </button>
          <span className="file-upload__label"> </span>
        </div>
      </div>
      
    </div>
  );
};

export default Home;
