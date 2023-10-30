import Button from "./Button"
import hamburger from "../assets/icons/hamburger.png"
import { useNavigate, useLocation } from "react-router-dom"
import { useState } from "react"


const Navbar = () => {
    const navigate = useNavigate()
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const alamatEmailPengguna = queryParams.get("email");

    return(
        <div className="">
            <div className="container mx-auto p-4 pt-2 font-poppins font-semibold">
                <div className="flex items-center justify-between">
                    <h2 onClick={() => navigate('/')} className="text-black cursor-pointer sm:py-2">Aneka<span className="text-white">Rasa</span></h2>
                    <img className="lg:hidden md:hidden" src={hamburger} alt="" />

                        <div className="hidden lg:block md:block">
                            <ul className="flex lg:gap-16 md:gap-6 text-white font-normal">
                                <li><a className="hover:border-b-4 border-gray-900" href="">Recipies</a></li>
                                <li><a className="hover:border-b-4 border-gray-900" href="">About</a></li>
                                <li><a className="hover:border-b-4 border-gray-900" href="">Contact Us</a></li>
                                <li><a onClick={() => navigate('/add')} className="hover:border-b-4 border-gray-900" href="">Add Recipes</a></li>
                            </ul>
                        </div>

                    <div className="lg:flex md:flex hidden font-normal">
                        {alamatEmailPengguna}
                        {/* <Button onClick={() => navigate('/login')} classname="text-white font-semibold" type="button" text="Log In" />
                        <Button onClick={() => navigate('/signup')} classname="text-white font-semibold"  type="button" text="Sign Up" /> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar