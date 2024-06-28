import { Button as UIButton } from '@/components/ui/button';
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  icon?: JSX.Element;
  invert?: boolean;
  hideText?: boolean;
  variant?: 'default' | 'outline';
}

const Button = (props: ButtonProps) => {
  const Icon = props.icon;
  const Invert = props.invert ?? false;
  const label = props.text;
  const hideText = props.hideText ?? false;
  return (
    <>
      {!Invert && (
        <UIButton {...props}>
          {hideText === true ? <span className='sr-only'>{label}</span> : label}
          {Icon}
        </UIButton>
      )}
      {Invert && (
        <UIButton {...props}>
          {Icon}
          {hideText === true ? <span className='sr-only'>{label}</span> : label}
        </UIButton>
      )}
    </>
  );
};

export default Button;
