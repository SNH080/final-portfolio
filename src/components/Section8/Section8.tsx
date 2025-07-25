import React from "react";
import styles from "./Section8.module.css";

const Section8 = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrap_lift}>
        <div className={`${styles.Category} ${styles.website}`}>
          <a href="/section8_web/index.html" target="blank">
            website
          </a>
        </div>
        <div className={`${styles.Category} ${styles.process}`}>
          <a href="/section8_process/index.html" target="_blank">
            process
          </a>
        </div>
        <div className={styles.text_wrap}>
          <div>
            <h2>CHANEL</h2>
            <p className={styles.mine_title}>
              트렌드를 앞서나가는 명실상부 명품브랜드
            </p>
          </div>
          <div className={styles.type}>
            <strong>TYPE</strong>
            <br />
            Fullpage Web
          </div>
          <div className={styles.info}>
            <strong>INFO</strong>
            <br />
            배경색을 어둡게 하여 컨텐츠에 대한 몰입감을 높여주었고, 샤넬의 주요
            컨텐츠를 홈페이지에 배치하여 이용자들의 접근 성을 높여주었다.
          </div>
          <div className={styles.font}>
            <strong>FONT</strong>
            <br />
            나눔스퀘어
          </div>
          <div className={styles.color}>
            <div>#000000</div>
            <div>#ffffff</div>
            <div>#0c0910</div>
          </div>
        </div>
      </div>
      <div className={styles.wrap_right}>
        <div className={styles.mockup_wrap}>
          <div className={`${styles.mockup_inner} ${styles.imac}`}>
            <div className={styles.mockup_frame}>
              <img
                className={styles.mockup_img}
                src="/images/iMac.png"
                alt="iMac"
              />
              <div className={styles.inner_frame}>
                <img
                  className={styles.inner_img}
                  src="/images/section8_inner_imac.jpg"
                  alt="iMac"
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

export default Section8;
