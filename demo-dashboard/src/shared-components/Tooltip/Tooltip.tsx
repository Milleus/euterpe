import { default as ReactTooltipLite } from "react-tooltip-lite";
import React, { FC, ReactNode } from "react";

import styles from "./style.module.scss";

interface Props {
  children: ReactNode;
  iconClassName: string;
}

export const Tooltip: FC<Props> = ({ children, iconClassName }) => {
  return (
    <ReactTooltipLite
      className="flex items-center justify-center ml-1 h-6 w-6"
      content={children}
      direction="right-start"
      hoverDelay={0}
      tipContentClassName={styles.tooltipContent}
      tipContentHover={true}
    >
      <i className={iconClassName} />
    </ReactTooltipLite>
  );
};

export default Tooltip;
