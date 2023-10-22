const Label = (props) => {
    const { htmlFor, children } = props

    return(
        <label 
        htmlFor={htmlFor}
        className="block text-gray-900 mt-5 text-sm font-bold mb-3"
        >
            {children}
        </label>
    )
}

export default Label