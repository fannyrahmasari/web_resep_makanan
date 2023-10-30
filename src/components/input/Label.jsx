const Label = (props) => {
    const { children } = props

    return(
        <label 
        htmlFor=""
        className=""
        >
            {children}
        </label>
    )
}

export default Label