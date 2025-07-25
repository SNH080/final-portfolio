import React from "react";
import styles from "./Section1.module.css";

const Section1 = () => {
  return (
    <div className={styles.container}>
      <p>NAHYEON</p>
      <div className={styles.cont_img}><img src="/images/section1Logo.png" alt="섹션1 로고" /></div>
      <a href="#section2">
        <button>포트폴리오 보러 착륙하기</button>
      </a>
    </div>
  );
};

export default Section1;