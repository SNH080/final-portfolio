import React from "react";
import styles from "./Section3.module.css";

const Section3 = () => {
  return (
    <div className={styles.container}>
      <p className={styles.title}>Table of Contents</p>

      <div className={styles.mapWrap}>
        {/* About me */}
        <a href="#section4" className={styles.island}>
          <div className={styles.imgWrapper}>
            <img
              src="./images/island_about.png"
              alt="About me"
              className={styles.islandImg}
            />
            <div className={styles.iconWrap}>
              <img
                src="./images/pin.png"
                alt="핀"
                className={`${styles.icon} ${styles.pin}`}
              />
              <img
                src="./images/plane.png"
                alt="비행기"
                className={`${styles.icon} ${styles.plane}`}
              />
            </div>
          </div>
          <span className={styles.label}>About me</span>
        </a>

        {/* Web site */}
        <a href="#section5" className={styles.island}>
          <div className={styles.imgWrapper}>
            <img
              src="./images/island_web.png"
              alt="Web site"
              className={styles.islandImg}
            />
            <div className={styles.iconWrap}>
              <img
                src="./images/pin.png"
                alt="핀"
                className={`${styles.icon} ${styles.pin}`}
              />
              <img
                src="./images/plane.png"
                alt="비행기"
                className={`${styles.icon} ${styles.plane}`}
              />
            </div>
          </div>
          <span className={styles.label}>Web site</span>
        </a>

        {/* Contact */}
        <a href="#section9" className={styles.island}>
          <div className={styles.imgWrapper}>
            <img
              src="./images/island_contact.png"
              alt="Contact"
              className={styles.islandImg}
            />
            <div className={styles.iconWrap}>
              <img
                src="./images/pin.png"
                alt="핀"
                className={`${styles.icon} ${styles.pin}`}
              />
              <img
                src="./images/plane.png"
                alt="비행기"
                className={`${styles.icon} ${styles.plane}`}
              />
            </div>
          </div>
          <span className={styles.label}>Contact</span>
        </a>

        {/* SVG 곡선 점선 */}
        <svg
          className={styles.curveLines}
          width="100%"
          height="200"
          viewBox="0 0 800 200"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* About me → Web site */}
          <path
            d="M 140 80 C 250 20, 400 20, 510 130"
            stroke="#ffa758"
            strokeWidth="2"
            fill="none"
            strokeDasharray="8 8"
          />
          {/* Web site → Contact */}
          <path
            d="M 510 130 C 620 180, 740 180, 770 180"
            stroke="#ffa758"
            strokeWidth="2"
            fill="none"
            strokeDasharray="8 8"
          />
        </svg>
      </div>

      <a href="#section4" className={styles.scroll_btn_wrap}>
        <div className={styles.scroll_btn}>
          <img src="./images/mouse.png" alt="아래로 스크롤 버튼" />
        </div>
      </a>
    </div>
  );
};

export default Section3;
