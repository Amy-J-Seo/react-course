import React from "react";
import styles from "./CSSModule.module.css";

function CSSModule() {
  return (
    <div className={`${styles.wrapper} ${styles.inverted}`}>
      Hello, I am <span className="something">CSS Module</span>
    </div>
  );
}

export default CSSModule;
