import React from "react";
import styles from "./Section5.module.css";

const Section5 = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrap_left}>
        <div className={styles.mockup_wrap}>
          <div className={`${styles.mockup_inner} ${styles.imac}`}>
            <div className={styles.mockup_frame}>
              <img
                className={styles.mockup_img}
                src="./images/iMac.png"
                alt="iMac"
              />
              <div className={styles.inner_frame}>
                <img
                  className={styles.inner_img}
                  src="./images/cgv_imac.png"
                  alt="iMac"
                />
              </div>
            </div>
          </div>
          <div className={styles.inner_bg}></div>
        </div>
      </div>
      <div className={styles.wrap_right}>
        <div className={`${styles.Category} ${styles.website}`}>
          <a href="https://cgv-api.vercel.app/" target="blank">
            website
          </a>
        </div>
        <div className={`${styles.Category} ${styles.process}`}>
          <a href="./section5_process/index.html" target="_blank">
            process
          </a>
        </div>
        <div className={styles.text_wrap}>
          <div>
            <h2>CGV</h2>
            <p className={styles.mine_title}>
              다양한 상영관과 서비스로 고객감동을 실현시키는 기업
            </p>
          </div>
          <div className={styles.type}>
            <strong>TYPE</strong>
            <br />
            Responsive Web
          </div>
          <div className={styles.info}>
            <strong>INFO</strong>
            <br />
            영화 박스오피스 정보가 담긴 오픈 api를 활용하여 박스오피스 순위별로
            영화 목록을 소개하는 구간에서 영화 제목, 포스터, 줄거리 등 다양한
            정보를 api에서 받아오고 있다. localStorage를 활용하여 특정 영화에
            좋아요 버튼을 누를 시 카운트와 좋아요가 저장되어 새로고침을 해도
            해당 상태를 저장할 수 있게하였다.
          </div>
          <div className={styles.font}>
            <strong>Stack</strong>
            <div className={styles.skills_icons}>
              <div className={styles.skill_icon}>
                <img src="./images/icon_react.webp" alt="react icon" />
                <span className={styles.tooltip}>REACT</span>
              </div>
              <div className={styles.skill_icon}>
                <img src="./images/icon_ts.webp" alt="ts icon" />
                <span className={styles.tooltip}>Typescript</span>
              </div>
              <div className={styles.skill_icon}>
                <img
                  src="./images/icon_styled-component.webp"
                  alt="styled-component icon"
                />
                <span className={styles.tooltip}>styled-component</span>
              </div>
              <div className={styles.skill_icon}>
                <img src="./images/icon_axios.png" alt="axios icon" />
                <span className={styles.tooltip}>axios</span>
              </div>
              <div className={styles.skill_icon}>
                <img src="./images/icon_api.png" alt="api icon" />
                <span className={styles.tooltip}>api</span>
              </div>
            </div>
          </div>
          <div className={styles.font}>
            <strong>Design</strong>
            <br />
            영화관의 느낌을 주기 위해 배경을 어두운 검은색으로 선택했고 CGV의
            고유 컬러인 레드컬러를 포인트색으로 주어 지루할 수 있는 단조로움을
            없애주었다.
          </div>
          <div className={styles.color}>
            <div>#111111</div>
            <div>#ffffff</div>
            <div>#e81a0d</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section5;
