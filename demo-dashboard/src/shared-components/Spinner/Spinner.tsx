import classnames from "classnames/bind";
import React, { FC } from "react";

import styles from "./style.module.scss";

const cx = classnames.bind(styles);

interface Props {
  isCenter?: boolean;
}

export const Spinner: FC<Props> = ({ isCenter }) => {
  const spinnerClass = cx({
    spinner: true,
    center: isCenter
  });

  return (
    <div className={spinnerClass}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Spinner;
