import { Button as UIButton } from '@/components/ui/button';
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  icon?: JSX.Element;
  invert?: boolean;
  hideText?: boolean;
  variant?: 'default' | 'outline';
}

const Button = ({icon, invert = false, text, hideText = false, ...props}: ButtonProps) => {
  return (
    <>
      {!invert && (
        <UIButton {...props}>
          {hideText === true ? <span className='sr-only'>{text}</span> : text}
          {icon}
        </UIButton>
      )}
      {invert && (
        <UIButton {...props}>
          {icon}
          {hideText === true ? <span className='sr-only'>{text}</span> : text}
        </UIButton>
      )}
    </>
  );
};

export default Button;
