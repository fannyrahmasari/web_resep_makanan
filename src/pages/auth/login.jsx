import login from "../../assets/img/login.png"
import InputForm from "../../components/input/Index"
import Button from "../../components/Button"
const Login = () => {
    return(
        <div className="flex justify-center items-center lg:flex-row md:flex-row flex-col container h-screen mx-auto">
                <div className="lg:order-1 md:order-1 order-2">
                    <h1 className="font-poppins lg:text-[25px] text-[18px]">Log In To Continue</h1>
                    <p className="text-[12px]">Don’t have an account ?<a href=""><u>create a new account</u></a></p>

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

                            <Button
                            type="button"
                            text="Log In"
                            classname="bg-ungu text-white font-semibold mt-5"
                            />
                        </form>
                    </div>
                </div>
                <div className="lg:order-2 md:order-2 order-1"> 
                    <img src={login} alt="" className="lg:w-[500px] md:w-[400px] w-[300px]" />
                </div>
        </div>
    )
}

export default Login