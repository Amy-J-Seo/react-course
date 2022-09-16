import React from "react";
import styles from "./CSSModule.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

function CSSModule() {
  return (
    <div className={cx("warpper", "inverted")}>
      Hello, I am <span className="something">CSS Module</span>
    </div>
  );
}

export default CSSModule;
