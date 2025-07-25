import React from "react";
import styles from "./Section7.module.css";

const Section7 = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrap_left}>
        <div className={styles.mockup_wrap}>
          <div className={`${styles.mockup_inner} ${styles.ipad}`}>
            <div className={styles.mockup_frame}>
              <img
                className={styles.mockup_img}
                src="./images/iPad.png"
                alt="iPad"
              />
              <div className={styles.inner_frame}>
                <img
                  className={styles.inner_img}
                  src="./images/section7_inner_ipad.png"
                  alt="iPad"
                />
              </div>
            </div>
          </div>
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
                  src="./images/section7_inner_imac.png"
                  alt="iMac"
                />
              </div>
            </div>
          </div>
          <div className={`${styles.mockup_inner} ${styles.iphone}`}>
            <div className={styles.mockup_frame}>
              <img
                className={styles.mockup_img}
                src="./images/iPhone.png"
                alt="iPhone"
              />
              <div className={styles.inner_frame}>
                <img
                  className={styles.inner_img}
                  src="./images/section7_inner_iphone.png"
                  alt="iPhone"
                />
              </div>
            </div>
          </div>
          <div className={styles.inner_bg}></div>
        </div>
      </div>
      <div className={styles.wrap_right}>
        <div className={`${styles.Category} ${styles.website}`}>
          <a href="./section7_web/index.html" target="blank">
            website
          </a>
        </div>
        <div className={`${styles.Category} ${styles.process}`}>
          <a href="./section7_process/index.html" target="_blank">
            process
          </a>
        </div>
        <div className={styles.text_wrap}>
          <div>
            <h2>SEA LIFE</h2>
            <p className={styles.mine_title}>
              다양한 해양생물을 만날 수 있는 부산 아쿠아리움
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
            메인 비주얼은 아쿠아리움의 생동감을 전하기 위해 영상으로 디자인
            했으며, 전체적인 배경 이음새 구간에 바다의 물결처럼 이미지를
            겹쳐주어 각 파트의 연결이 끊기는 느낌을 없앴다.
          </div>
          <div className={styles.font}>
            <strong>FONT</strong>
            <br />
            나눔스퀘어
            <br />
            예스코어드림
          </div>
          <div className={styles.color}>
            <div>#ffffff</div>
            <div>#0d0461</div>
            <div>#bee2f0</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section7;
