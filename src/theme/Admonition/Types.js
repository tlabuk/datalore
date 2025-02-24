import React from "react";
import DefaultAdmonitionTypes from "@theme-original/Admonition/Types";
import styles from './styles.module.css';
import { BsWrenchAdjustableCircle } from "react-icons/bs";

function Troubleshooting({ title = "troubleshooting", children }) {
  return (
    <div className={styles.content}>
      <BsWrenchAdjustableCircle className={styles.icon} />
      <span className={styles.title}>{title}</span>
      <div className={styles.noteContent}>{children}</div>
    </div>
  );
}

const AdmonitionTypes = {
  ...DefaultAdmonitionTypes,
  'troubleshooting': Troubleshooting,
};

export default AdmonitionTypes;
