import { MouseEventHandler } from 'react';

type Props = {
  text: string;
  icon?: JSX.Element;
  invert?: boolean;
  onClick?: MouseEventHandler;
};

const Button = (props: Props) => {
  const Icon = props.icon;
  const Invert = props.invert ?? false;
  const clickFunction = props.onClick;
  return (
    <>
      {!Invert && (
        <button
          className='bg-dark-purple dark:bg-light-purple text-white dark:text-dark-gray p-4 uppercase text-base rounded-md font-bold flex items-center gap-2'
          onClick={clickFunction}
        >
          {props.text} {Icon}
        </button>
      )}
      {Invert && (
        <button
          className='bg-dark-purple dark:bg-light-purple text-white dark:text-dark-gray p-4 uppercase text-base rounded-md font-bold flex items-center gap-2'
          onClick={clickFunction}
        >
          {Icon} {props.text}
        </button>
      )}
    </>
  );
};

export default Button;
