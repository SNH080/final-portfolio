import React from "react";
import styles from "./FixedNav.module.css";
import { FixedNavProps } from "./FixedNav.types";

const FixedNav = ({ items, activeId }: FixedNavProps) => {
  return (
    <nav className={styles.fixedNav}>
      <ul>
        {items.map((item) => (
          <li key={item.id} className={activeId === item.id ? styles.active : ""}>
            <a
              href={`#${item.targetId}`}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default FixedNav;
