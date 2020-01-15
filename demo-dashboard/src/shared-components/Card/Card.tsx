import classnames from "classnames";
import React, { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
}

const Card: FC<Props> = ({ children, className }) => {
  return (
    <div className={classnames("bg-white rounded shadow p-4", className)}>
      {children}
    </div>
  );
};

export default Card;
