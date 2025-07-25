// WebNav.tsx
import React from "react";
import styles from "./WebNav.module.css";

type Props = {
  current: number; // section number: 5,6,7,8
};

const WebNav = ({ current }: Props) => {
  const sectionMap = [
    { section: 5, colorClass: styles.active5 },
    { section: 6, colorClass: styles.active6 },
    { section: 7, colorClass: styles.active7 },
    { section: 8, colorClass: styles.active8 },
  ];

  const handleClick = (sectionId: number) => {
    const el = document.getElementById(`section${sectionId}`);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className={styles.webNav}>
      {sectionMap.map(({ section, colorClass }) => (
        <div
          key={section}
          className={`${styles.dot} ${current === section ? colorClass : ""}`}
          onClick={() => handleClick(section)}
        ></div>
      ))}
    </div>
  );
};

export default WebNav;
