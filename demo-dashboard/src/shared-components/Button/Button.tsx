import classnames from "classnames";
import React, { FC, ReactNode, MouseEventHandler } from "react";

export enum ButtonAppearance {
  PRIMARY = "primary",
  SECONDARY = "secondary",
  TERTIARY = "tertiary"
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
  type = "submit",
  onClick,
  className
}) => {
  const buttonConditionalClass = {
    "bg-blue-700 text-white border-blue-700":
      appearance === ButtonAppearance.PRIMARY,
    "bg-blue-200 text-blue-700 border-blue-200":
      appearance === ButtonAppearance.SECONDARY,
    "bg-white text-blue-700 border-blue-700":
      appearance === ButtonAppearance.TERTIARY
  };

  return (
    <button
      type={type}
      className={classnames(
        `font-semibold py-2 px-4 border-2 rounded focus:outline-none hover:shadow-md`,
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
