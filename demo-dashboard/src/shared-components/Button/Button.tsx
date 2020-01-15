import classnames from "classnames";
import React, { FC, ReactNode, MouseEventHandler } from "react";

export enum ButtonAppearance {
  PRIMARY = "primary"
}

interface Props {
  appearance: ButtonAppearance;
  children: ReactNode;
  type?: "submit" | "reset" | "button";
  onClick?: MouseEventHandler;
  className?: string;
}

const Button: FC<Props> = ({
  appearance,
  children,
  type = "button",
  onClick,
  className
}) => {
  const buttonConditionalClass = {
    "bg-gray-400 border-gray-400": appearance === ButtonAppearance.PRIMARY
  };

  return (
    <button
      type={type}
      className={classnames(
        `py-2 px-4 border-2 rounded focus:outline-none hover:shadow-md`,
        buttonConditionalClass,
        className
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
