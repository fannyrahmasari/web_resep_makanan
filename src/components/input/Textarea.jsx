const Textarea = (props) => {
    const { children, name, id, cols, rows } = props

    return(
        <textarea 
        name={name}
        id={id}
        cols={cols} 
        rows={rows}
        >
            {children}
        </textarea>
    )
}

export default Textarea