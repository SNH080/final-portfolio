import React from "react";
import styles from "./Section4.module.css";

const Section4 = () => {
  return (
    <div
      className={styles.container}
      style={{ backgroundImage: `url("/images/section4BgLine.png")` }}
    >
      <p className={styles.title}>PASSPORT TO PORTFOLIO</p>
      <div className={styles.cont_wrap}>
        <div className={styles.cont_wrap_top}>
          <div className={styles.cont_img}>
            <img src="/images/myImage.png" alt="내이미지" />
          </div>
          <div className={styles.cont_info}>
            <div className={styles.cont_text}>
              {/* 1행 */}
              <div className={styles.row}>
                <div className={styles.info_wrap}>
                  <p className={styles.info_title}>Surname</p>
                  <p className={styles.info_text}>SEO</p>
                </div>
                <div className={styles.info_wrap}>
                  <p className={styles.info_title}>Given names</p>
                  <p className={styles.info_text}>NAHYEON</p>
                </div>
                <div className={styles.info_wrap}>
                  <p className={styles.info_title}>Date of birth</p>
                  <p className={styles.info_text}>1999.08.04</p>
                </div>
              </div>

              {/* 2행: 1번과 2번 위치 맞추기 */}
              <div className={styles.row}>
                <div className={styles.info_wrap}>
                  <p className={styles.info_title}>Phone number</p>
                  <p className={styles.info_text}>010-6652-6015</p>
                </div>
                <div className={styles.info_wrap}>
                  <p className={styles.info_title}>e-mail</p>
                  <p className={styles.info_text}>kcopei12@naver.com</p>
                </div>
                <div className={styles.placeholder}></div>
                {/* 3번 위치에도 넣되 숨기거나 비우기 */}
              </div>
            </div>
            <div className={styles.cont_skills}>
              <p className={styles.info_title}>Skills</p>
              <div className={styles.skills_icons}>
                <div className={styles.skill_row}>
                  <div className={styles.skill_icon}>
                    <img src="/images/icon_html.png" alt="html icon" />
                    <span className={styles.tooltip}>HTML</span>
                  </div>
                  <div className={styles.skill_icon}>
                    <img src="/images/icon_css.png" alt="css icon" />
                    <span className={styles.tooltip}>CSS</span>
                  </div>
                  <div className={styles.skill_icon}>
                    <img src="/images/icon_js.webp" alt="js icon" />
                    <span className={styles.tooltip}>Javascript</span>
                  </div>
                  <div className={styles.skill_icon}>
                    <img src="/images/icon_react.webp" alt="react icon" />
                    <span className={styles.tooltip}>REACT</span>
                  </div>
                  <div className={styles.skill_icon}>
                    <img src="/images/icon_sass.png" alt="sass icon" />
                    <span className={styles.tooltip}>SASS</span>
                  </div>
                  <div className={styles.skill_icon}>
                    <img
                      src="/images/icon_styled-component.webp"
                      alt="styled-component icon"
                    />
                    <span className={styles.tooltip}>styled-component</span>
                  </div>
                  <div className={styles.skill_icon}>
                    <img src="/images/icon_axios.png" alt="axios icon" />
                    <span className={styles.tooltip}>axios</span>
                  </div>
                </div>
                <div className={styles.skill_row}>
                  <div className={styles.skill_icon}>
                    <img src="/images/icon_ts.webp" alt="ts icon" />
                    <span className={styles.tooltip}>Typescript</span>
                  </div>
                  <div className={styles.skill_icon}>
                    <img src="/images/icon_ps.webp" alt="ps icon" />
                    <span className={styles.tooltip}>Photoshop</span>
                  </div>
                  <div className={styles.skill_icon}>
                    <img src="/images/icon_ai.webp" alt="ai icon" />
                    <span className={styles.tooltip}>Illustrator</span>
                  </div>
                  <div className={styles.skill_icon}>
                    <img src="/images/icon_figma.webp" alt="figma icon" />
                    <span className={styles.tooltip}>Figma</span>
                  </div>
                  <div className={styles.skill_icon}>
                    <img src="/images/icon_github.png" alt="github icon" />
                    <span className={styles.tooltip}>Github</span>
                  </div>
                  <div className={styles.skill_icon}>
                    <img src="/images/icon_api.png" alt="api icon" />
                    <span className={styles.tooltip}>api</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.cont_wrap_bottom}>
          <p>
            &gt;&gt;&gt;&gt;&gt;&gt;&gt;#열정적인&gt;&gt;&gt;#도전하는&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;#노력맨&gt;&gt;&gt;&gt;&gt;#친화적인&gt;&gt;&gt;&gt;&gt;&gt;
            #적응력갑&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;#넘치는체력&gt;&gt;&gt;&gt;#건강빼면시체&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;#학구열&gt;
          </p>
        </div>
      </div>
    </div>
  );
};

export default Section4;
