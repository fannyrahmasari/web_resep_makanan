const Label = (props) => {
    const { children } = props

    return(
        <label 
        htmlFor=""
        className="mt-5"
        >
            {children}
        </label>
    )
}

export default Label