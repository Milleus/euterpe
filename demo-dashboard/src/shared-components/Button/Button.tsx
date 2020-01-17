import classnames from 'classnames';
import React, { FC, ReactNode, MouseEventHandler } from 'react';

export enum ButtonAppearance {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

export enum ButtonSize {
  SMALL = 'py-1 px-2 text-xs',
  LARGE = 'py-2 px-4',
}

interface Props {
  appearance: ButtonAppearance;
  size?: ButtonSize;
  children: ReactNode;
  type?: 'submit' | 'reset' | 'button';
  onClick?: MouseEventHandler;
  className?: string;
  disabled?: boolean;
}

const Button: FC<Props> = ({
  appearance,
  size = ButtonSize.LARGE,
  children,
  type = 'button',
  onClick,
  className,
  disabled,
}) => {
  const buttonConditionalClass = {
    'bg-checker-primary border-checker-primary text-white':
      appearance === ButtonAppearance.PRIMARY,
    'bg-white border-checker-primary text-checker-primary':
      appearance === ButtonAppearance.SECONDARY,
  };

  return (
    <button
      type={type}
      className={classnames(
        `${size}  border-2 font-semibold rounded hover:shadow-md disabled:opacity-50 disabled:cursor-not-allowed`,
        buttonConditionalClass,
        className,
      )}
      onClick={onClick}
      disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
