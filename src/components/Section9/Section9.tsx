import React from "react";
import styles from "./Section9.module.css";

const Section9 = () => {
  return (
    <div className={styles.container}>
      <div style={{ flex: 1 }} className={styles.wrap_left}>
        <img src="/images/section9_img.png" alt="section9_img" />
      </div>
      <div style={{ flex: 1 }} className={styles.wrap_right}>
        <div className={styles.text_top}>
          <p>끝까지 포트폴리오 섬을 구경해주셔서 감사합니다:&#41;</p>
        </div>
        <div className={styles.text_bottom}>
          <div className={styles.info_box}>
            <p>연락처</p>
            <p>010-6652-6015</p>
            <p>kcopei12@naver.com</p>
          </div>
          <div className={styles.text_box}>
            <p>
              본 사이트는 상업적 목적이 아닌 개인포트폴리오 사이트로
              제작되었습니다.
            </p>
            <p>
              일부 내용 및 폰트, 이미지 등은 그 출처가 따로 있음을 밝힙니다.
            </p>
            <p>이 사이트는 'Chrome'에 최적화 되어있음을 알려드립니다.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section9;
