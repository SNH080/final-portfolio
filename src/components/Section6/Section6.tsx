import React from "react";
import styles from "./Section6.module.css";

const Section6 = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrap_lift}>
        <div className={`${styles.Category} ${styles.website}`}>
          <a href="https://danoco08.github.io/" target="blank">
            website
          </a>
        </div>
        <div className={`${styles.Category} ${styles.process}`}>
          <a href="/section6_process/index.html" target="_blank">
            process
          </a>
        </div>
        <div className={styles.text_wrap}>
          <div>
            <h2>NIKE</h2>
            <p className={styles.mine_title}>
              포기하지 않는 그들을 응원하는 1등 스포츠브랜드
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
            리엑트를 처음 활용하여 제작된 웹사이트로 섬세한 디자인보다는 웹
            기능에 집중하여 리엑트 페이지를 제작하였다.
          </div>
          <div className={styles.font}>
            <strong>FONT</strong>
            <br />
            기본폰트
          </div>
          <div className={styles.color}>
            <div>#ffffff</div>
            <div>#959ca2</div>
            <div>#bee2f0</div>
          </div>
        </div>
      </div>
      <div className={styles.wrap_right}>
        <div className={styles.mockup_wrap}>
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
                  src="./images/section6_iphone.png"
                  alt="iPhone"
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
                  src="./images/section6_inner_imac.jpg"
                  alt="iMac"
                />
              </div>
            </div>
          </div>
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
                  src="./images/section6_ipad.png"
                  alt="iPad"
                />
              </div>
            </div>
          </div>
          <div className={styles.inner_bg}></div>
        </div>
      </div>
    </div>
  );
};

export default Section6;
