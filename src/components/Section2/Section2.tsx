import React from "react";
import styles from "./Section2.module.css";

const Section2 = () => {
  return (
    <div className={styles.container}>
      <div className={styles.cont_img}>
        <img src="/images/section2Logo.png" alt="섹션2 로고" />
      </div>
      <a href="#section3">
        <p>▼ 곧 열정이 넘치는 'NAHYEON' 섬에 착륙 예정입니다.</p>
      </a>
    </div>
  );
};

export default Section2;