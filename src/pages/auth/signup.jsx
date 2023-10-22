import signup from "../../assets/img/signup.png"
import InputForm from "../../components/input/Index"
import Button from "../../components/Button"
const SignUp = () => {
    return(
        <div className="flex justify-center items-center lg:flex-row md:flex-row flex-col container h-screen mx-auto">
                <div className="lg:order-1 md:order-1 order-2">
                    <h1 className="font-poppins lg:text-[25px] text-[18px]">Sign Up</h1>
                    <p className="text-[12px]">Have an account ? ?<a href=""><u>Login here</u></a></p>

                    <div className="lg:w-[500px] w-[300px]">
                        <form>
                            <InputForm 
                            name="email"
                            label="E-Mail :"
                            placeholder="example@gmail.com"
                            type="email"
                            />
                            <InputForm 
                            name="password"
                            label="Password :"
                            placeholder="*****"
                            type="password"
                            />
                            <InputForm 
                            name="password"
                            label="Confirm Password :"
                            placeholder="*****"
                            type="password"
                            />

                            <Button
                            type="button"
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