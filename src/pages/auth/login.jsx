import Label from "../../components/input/Label"
import Input from "../../components/input/Input"
import Button from "../../components/Button"
import { Link } from "react-router-dom"
import { useState } from "react"
import { signInWithEmailAndPassword } from "firebase/auth"
import { auth } from "../../firebase-config"

const Login = () => {
    const [loginEmail, setLoginEmail] = useState("")
    const [loginPassword, setLoginPassword] = useState("")
    const login = async (event) => {
        event.preventDefault()
        try{
        const user = await signInWithEmailAndPassword(auth, loginEmail, loginPassword)
        console.log(user)
        } catch (error) {
            console.log(error.message)
        }
        window.location.href = "/"
    }

    return(
        <div className="flex justify-center items-center lg:flex-row md:flex-row flex-col container h-screen mx-auto">
                <div className="lg:order-1 md:order-1 order-2">
                    <h1 className="font-poppins lg:text-[25px] text-[18px]">Log In To Continue</h1>
                    <p className="text-[12px]">Don’t have an account ?<Link to="/signup"><u>create a new account</u></Link></p>

                    <div className="lg:w-[500px] w-[300px]">
                        <form onSubmit={login}>
                            <Label>E-Mail</Label>
                            <Input
                            name="email"
                            label="E-Mail :"
                            placeholder="example@gmail.com"
                            type="email"
                            onChange={(event) => {
                                setLoginEmail(event.target.value)
                            }}
                            />

                            <Label>Password</Label>
                            <Input
                            name="password"
                            label="Password :"
                            placeholder="*****"
                            type="password"
                            onChange={(event) => {
                                setLoginPassword(event.target.value)
                            }}
                            />

                            <Button
                            type="submit"
                            text="Log In"
                            classname="bg-ungu text-white font-semibold mt-5"
                            />

                        </form>
                       
                    </div>
                </div>
                <div className="lg:order-2 md:order-2 order-1"> 
                    <img src="../src/assets/img/login.png" alt="" className="lg:w-[500px] md:w-[400px] w-[300px]" />
                </div>
        </div>
    )
}

export default Login