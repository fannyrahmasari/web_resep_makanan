import Label from "./Label"
import Input from "./Input"

const InputForm = (props) => {
    const { label, name, type, placeholder, value='', onChange='' } = props

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
            onChange={onChange}
            value={value}
            />
        </div>
    )
}

export default InputForm