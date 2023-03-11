type Props = {
    text: string,
    icon?: JSX.Element
}

const Button = (props: Props) => {
  const Icon = props.icon;
  return (
    <button className="bg-dark-purple dark:bg-light-purple text-white dark:text-dark-gray p-4 uppercase text-base rounded-md font-bold flex items-center gap-2">{props.text} {Icon}</button>
  )
}

export default Button