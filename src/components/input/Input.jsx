import { forwardRef } from "react"

const Input = (props,...rest) => {
    const { type, placeholder, name, id, value, error, onChange } = props

    return(
        <input 
        type={type}
        className="text-sm md:h-[70px] h-[60px] border border-gray-900 rounded w-full py-2 px-3 text-gray-900 placeholder: opacity-50"
        placeholder={placeholder}
        name={name}
        id={id}
        value={value}
        onChange={onChange}
        error={error}
        {...rest}
        />
    )
    }


export default Input