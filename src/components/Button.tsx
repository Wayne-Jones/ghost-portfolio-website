import { MouseEventHandler } from 'react';
import { Button as UIButton } from "@/components/ui/button";

type Props = {
  text: string;
  icon?: JSX.Element;
  invert?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  variant?: "default" | "outline" | "ghost"
};

const Button = (props: Props) => {
  const Icon = props.icon;
  const variant = props.variant ?? "default";
  const Invert = props.invert ?? false;
  const clickFunction = props.onClick;
  const label = props.text;
  return (
    <>
      {!Invert && (
        <UIButton
          className='bg-dark-purple dark:bg-light-purple text-white dark:text-dark-gray p-4 uppercase text-base rounded-md font-bold flex items-center gap-2'
          onClick={clickFunction}
          variant={variant}
        >
          {label} {Icon}
        </UIButton>
      )}
      {Invert && (
        <UIButton
          className='bg-dark-purple dark:bg-light-purple text-white dark:text-dark-gray p-4 uppercase text-base rounded-md font-bold flex items-center gap-2'
          onClick={clickFunction}
          variant={variant}
        >
          {Icon} {label}
        </UIButton>
      )}
    </>
  );
};

export default Button;
