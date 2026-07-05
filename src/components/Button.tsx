import { Button as UIButton } from '@/components/ui/button';
import type { VariantProps } from 'class-variance-authority';
import { buttonVariants } from '@/components/ui/button';
import React, { JSX } from 'react';

type ButtonVariant = NonNullable<VariantProps<typeof buttonVariants>['variant']>;

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  icon?: JSX.Element;
  invert?: boolean;
  hideText?: boolean;
  variant?: ButtonVariant;
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
