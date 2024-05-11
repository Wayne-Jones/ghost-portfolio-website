type Props = {
  className?: string;
  text: string;
};

const Aside = (props: Props) => {
  const classes = `border-l-2 border-dark-purple dark:border-light-purple px-3 py-2 ${
    props.className ? props.className : ''
  }`;
  return <p className={classes}>{props.text}</p>;
};

export default Aside;
