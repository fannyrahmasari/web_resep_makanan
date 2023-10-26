const Button = (props) => {
    const { type, text, classname = "text-black", onClick = () => {} } = props

    return(
        <div>
            <button 
            type={type} 
            className={`${classname} text-sm lg:px-7 lg:py-3 px-4 py-2 rounded-xl`}
            onClick={onClick}
            >
                {text}
            </button>
        </div>
    )
}

export default Button