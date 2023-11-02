import Label from "../../components/input/Label"
import Input from "../../components/input/Input"
import Button from "../../components/Button"

import signupImage from  '../../assets/img/signup.png'

import { Link } from "react-router-dom"
import { useState } from "react"
import { createUserWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth"
import { auth } from "../../firebase-config"


const SignUp = () => {
    const [signupEmail, setSignupEmail] = useState("")
    const [signupPassword, setSignupPassword] = useState("")

    const signup = async (event) => {
        event.preventDefault()
        try{
        await createUserWithEmailAndPassword(auth, signupEmail, signupPassword)
        console.log(user)
        } catch (error) {
            console.log(error.message)
        }
    }

    const logout = async () => {
        await signOut(auth)
    }

    return(
        <div>
        <div className="flex justify-center items-center lg:flex-row md:flex-row flex-col container h-screen mx-auto">
                <div className="lg:order-1 md:order-1 order-2">
                    <h1 className="font-poppins lg:text-[25px] text-[18px]">Sign Up</h1>
                    <p className="text-[12px]">Have an account ?<Link to="/"><u>Login here</u></Link> </p>

                    <div className="lg:w-[500px] w-[300px]">
                    
                        <form onSubmit={signup}> 
                            <div className="mb-3 mt-5">
                                <Label>E-Mail</Label>
                                <Input
                                name="email"
                                label="E-Mail :"
                                placeholder="example@gmail.com"
                                type="email"
                                id="email"
                                onChange={(event) => {
                                    setSignupEmail(event.target.value)
                                }}
                                />
                            </div>

                            <div>
                                <Label>Password</Label>
                                <Input
                                name="password"
                                label="Password :"
                                placeholder="*****"
                                type="password"
                                id="password"
                                onChange={(event) => {
                                    setSignupPassword(event.target.value)
                                }}
                            />
                            </div>

                            <Button
                            type="submit"
                            text="Sign Up"
                            classname="bg-ungu text-white font-semibold mt-5 mb-5"
                            />
                        </form>
                    </div>
                </div>
                <div className="lg:order-2 md:order-2 order-1"> 
                    <img src={signupImage} alt="" className="lg:w-[500px] md:w-[400px] w-[300px]" />
                </div>
        </div>                
        </div>
    )
}

export default SignUp