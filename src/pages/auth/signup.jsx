import signup from "../../assets/img/signup.png"
import InputForm from "../../components/input/Index"
import Button from "../../components/Button"
import { Link } from "react-router-dom"


const SignUp = () => {


    return(
        <div className="flex justify-center items-center lg:flex-row md:flex-row flex-col container h-screen mx-auto">
                <div className="lg:order-1 md:order-1 order-2">
                    <h1 className="font-poppins lg:text-[25px] text-[18px]">Sign Up</h1>
                    <p className="text-[12px]">Have an account ?<Link to="/login"><u>Login here</u></Link> </p>

                    <div className="lg:w-[500px] w-[300px]">
                    
                        <form>
                            <InputForm 
                            name="nama"
                            label="Nama :"
                            placeholder="ketikan nama ..."
                            type="text"
                            id="nama"
                            />

                            <InputForm 
                            name="email"
                            label="E-Mail :"
                            placeholder="example@gmail.com"
                            type="email"
                            id="email"
                            />

                            <InputForm 
                            name="password"
                            label="Password :"
                            placeholder="*****"
                            type="password"
                            id="password"
                            />

                            <Button
                            type="submit"
                            text="Sign Up"
                            classname="bg-ungu text-white font-semibold mt-5 mb-5"
                            />
                        </form>
                    </div>
                </div>
                <div className="lg:order-2 md:order-2 order-1"> 
                    <img src={signup} alt="" className="lg:w-[500px] md:w-[400px] w-[300px]" />
                </div>
        </div>
    )
}

export default SignUp