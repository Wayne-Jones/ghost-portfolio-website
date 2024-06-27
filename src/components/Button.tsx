import { Button as UIButton } from "@/components/ui/button";
import React from "react";

interface ButtonProps
extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  icon?: JSX.Element;
  invert?: boolean;
  variant?: "default" | "outline";
}

const Button = (props: ButtonProps) => {
  const Icon = props.icon;
  const Invert = props.invert ?? false;
  const label = props.text;
  return (
    <>
      {!Invert && (
        <UIButton
          {...props}
        >
          {label} {Icon}
        </UIButton>
      )}
      {Invert && (
        <UIButton
          {...props}
        >
          {Icon} {label}
        </UIButton>
      )}
    </>
  );
};

export default Button;
