import Button from "./Button"
import hamburger from "../assets/icons/hamburger.png"
import { useNavigate } from "react-router-dom"
const Navbar = () => {
    const navigate = useNavigate()

    return(
        <div className="">
            <div className="container mx-auto p-4 pt-2 font-poppins font-semibold">
                <div className="flex items-center justify-between">
                    <h2 className="text-black cursor-pointer sm:py-2">Aneka<span className="text-white">Rasa</span></h2>
                    <img className="lg:hidden md:hidden" src={hamburger} alt="" />

                        <div className="hidden lg:block md:block">
                            <ul className="flex lg:gap-16 md:gap-6 text-white font-normal">
                                <li><a className="hover:border-b-4 border-gray-900" href="">Home</a></li>
                                <li><a className="hover:border-b-4 border-gray-900" href="">Recipies</a></li>
                                <li><a className="hover:border-b-4 border-gray-900" href="">About</a></li>
                                <li><a className="hover:border-b-4 border-gray-900" href="">Contact Us</a></li>
                            </ul>
                        </div>

                    <div className="lg:flex md:flex hidden font-normal">
                        <Button onClick={() => navigate('/login')} classname="text-white font-semibold" type="button" text="Log In" />
                        <Button onClick={() => navigate('/signup')} classname="text-white font-semibold"  type="button" text="Sign Up" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar