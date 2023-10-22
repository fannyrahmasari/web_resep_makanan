const Input = (props) => {
    const { type, placeholder, name, id } = props

    return(
        <input 
        type={type}
        className="text-sm lg:h-[50px] border border-gray-900 rounded w-full py-2 px-3 text-gray-900 placeholder: opacity-50"
        placeholder={placeholder}
        name={name}
        id={id}
        />
    )
}

export default Input