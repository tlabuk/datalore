import React from "react";
import styles from "./styles.module.css";
import { HiOutlineWrenchScrewdriver } from "react-icons/hi2";

const MajorUpdateBadge = () => {
  return (
    <span className={styles.badge}>
      <HiOutlineWrenchScrewdriver className={styles.icon} />
      Major update
    </span>
  );
};

export default MajorUpdateBadge;
