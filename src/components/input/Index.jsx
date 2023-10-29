import Label from "./Label"
import Input from "./Input"
import { forwardRef } from "react"

const InputForm = forwardRef(
    (props, ref) => {
    const { label, name, type, id, placeholder, value='', onChange='' } = props

    return(
        <div>
            <Label 
            htmlFor={name}
            >
                {label}
            </Label>
            <Input 
            name={name}
            placeholder={placeholder}
            type={type}
            id={id}
            onChange={onChange}
            value={value}
            ref={ref}
            />
        </div>
    )
}
)

export default InputForm