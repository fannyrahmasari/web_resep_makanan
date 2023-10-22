import Label from "./Label"
import Input from "./Input"

const InputForm = (props) => {
    const { label, name, type, placeholder, children, id, cols, rows } = props

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
            />
        </div>
    )
}

export default InputForm