type Props = {
    text: string,
}

const Aside = (props: Props) => {
  return (
    <div className="border-l-2 border-dark-purple dark:border-light-purple px-3 py-2">
      {props.text}
    </div>
  )
}

export default Aside