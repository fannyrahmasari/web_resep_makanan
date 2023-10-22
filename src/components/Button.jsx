const Button = (props) => {
    const { type, text, classname = "text-black" } = props

    return(
        <div>
            <button type={type} className={`${classname} text-sm lg:px-8 lg:py-4 px-4 py-2 rounded-xl`}>{text}</button>
        </div>
    )
}

export default Button