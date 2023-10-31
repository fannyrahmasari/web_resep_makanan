import Button from "./Button"
import { useState } from "react"
import { useNavigate } from "react-router-dom"


const Navbar = () => {
    const navigate = useNavigate()

    let Links = [
        {name: "Home", link:"/landingpages"},
        {name: "About", link:"/"},
        {name: "Contact", link:"/"}
    ]

    let [open, setOpen] = useState(false)

    return(
        <div className="shadow-md w-full fixed top-0 left-0">
            <div className="md:flex items-center justify-between bg-ungu py-4 md:px-10 px-7">
            <div className="font-bold text-2xl cursor-pointer flex items-center font-poppins text-white">
                <span className="text-3xl text-indigo-600 mr-1 pt-2">
                    <ion-icon name="fast-food-outline"></ion-icon>
                </span>
                AnekaRasa
            </div>

            <div onClick={() => setOpen(!open)} className="text-3xl absolute right-8 top-6 cursor-pointer text-white md:hidden">
                <ion-icon name={open ? 'close':'menu'}></ion-icon>
            </div>

            <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:bg-ungu md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20':'top-[-490px]'}`}>
                {
                    Links.map((link) => (
                        <li key={link.name} className="md:ml-8 text-xl md:my-0 my-7">
                            <a href={link.link} className="text-gray-800 md:text-white hover:text-gray-400 duration-500">{link.name}</a>
                        </li>
                    ))
                }
                <div className="flex gap-2 md:gap-0">
                    <Button
                    onClick={() => navigate('/')}  
                    text="Login"
                    classname="text-xl text-white bg-purple-500 hover:bg-purple-400 md:ml-10"
                    />
                    <Button
                    onClick={() => navigate('/add')}  
                    text="Add Recipe"
                    classname="text-xl text-white bg-purple-500 hover:bg-purple-400 md:ml-10"
                    />
                </div>
            </ul>
            </div>
        </div>
    )
}

export default Navbar