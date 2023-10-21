const Button = (props) => {
    const { type, text, classname = "text-black" } = props

    return(
        <div>
            <button type={type} className={`${classname} text-sm px-8 py-4 rounded-xl`}>{text}</button>
        </div>
    )
}

export default Button