import React, { ButtonHTMLAttributes, FC, MouseEventHandler } from 'react';
import './IconButton.style.css';

interface IIconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: JSX.Element;
  handleClick: MouseEventHandler<HTMLButtonElement>;
}

export const IconButton: FC<IIconButtonProps> = ({
  icon,
  handleClick,
  className
}) => {
  return (
    <button type='button' className={`icon ${className}`} onClick={handleClick}>
      {icon}
    </button>
  );
};
