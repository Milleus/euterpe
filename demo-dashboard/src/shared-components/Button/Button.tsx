import classnames from "classnames";
import React, { FC, ReactNode, MouseEventHandler } from "react";

export enum ButtonAppearance {
  PRIMARY = "primary",
  SECONDARY = "secondary"
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
    "bg-checker-primary border-checker-primary text-white":
      appearance === ButtonAppearance.PRIMARY,
    "bg-white border-checker-primary text-checker-primary":
      appearance === ButtonAppearance.SECONDARY
  };

  return (
    <button
      type={type}
      className={classnames(
        `py-2 px-4 border-2 font-semibold rounded hover:shadow-md`,
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
