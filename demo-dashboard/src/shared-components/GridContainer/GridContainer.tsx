import classnames from "classnames";
import React, { FC, ReactNode } from "react";

interface Props {
  className?: string;
  children: ReactNode;
}

const GridContainer: FC<Props> = ({ className, children }) => {
  return (
    <div className={classnames(`container mx-auto px-4`, className)}>
      {children}
    </div>
  );
};

export default GridContainer;
