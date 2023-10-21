import Navbar from "../components/Navbar"
import Button from "../components/Button"
import Card from "../components/Card"
import hero from "../assets/img/hero-image.png"
import { Fragment } from "react"
const LandingPages = () => {
    return(
    <Fragment>
        <div className="bg-ungu w-full lg:h-1/2 md:h-1/2 h-1/2">
            <Navbar />
            <div className="container mx-auto flex flex-col lg:flex-row md:flex-row justify-evenly items-center">
                <div className="flex justify-center items-center order-1 lg:order-2 md:order-2">
                    <img src={hero} alt="gambar" className="w-[300px] lg:w-[400px] md:w-[300px] " />
                </div>

                <div className="mb-5 justify-center items-center flex order-2 lg:order-1 md:order-1">
                    <h1 className="w-[200px] lg:w-[400px] md:w-[200px] lg:text-[36px] font-semibold text-center">What are you waiting for?
                    Let's <span className="text-white">cook together</span>, 
                    With our favorite recipe
                    </h1>
                </div>
                </div>
            </div>

            {/* Recepies */}
            <div className="container mx-auto lg:flex">
                <div className="text-center lg:text-left mt-5 font-semibold">
                    <h1 className="text-lg">RECIPES</h1>

                    <div className="flex justify-center items-center flex-col">
                    <Button type="button" text="Fast Food" classname="outline mt-7 hover:bg-ungu hover:text-white hover:outline-none" />
                    <Button type="button" text="Fast Food" classname="outline mt-7 hover:bg-ungu hover:text-white hover:outline-none" />
                    <Button type="button" text="Fast Food" classname="outline mt-7 hover:bg-ungu hover:text-white hover:outline-none" />
                    <Button type="button" text="Fast Food" classname="outline mt-7 hover:bg-ungu hover:text-white hover:outline-none" />
                </div>
                </div>

                

                <div className="flex justify-center items-center">
                <div className="flex flex-col lg:flex-row mt-10 lg:ml-56 ">
                    <Card />
                    <Card />
                </div>
                </div>
            </div>
    </Fragment>
    )
}

export default LandingPages

