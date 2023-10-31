import Navbar from "../components/Navbar"
import Button from "../components/Button"
import Card from "../components/Card"
import InputForm from "../components/input/Index"
import Footer from "../components/Footer"

import heroImage from '../assets/img/hero-image.png'
import card1 from '../assets/img/card-1.jpg'
import card2 from '../assets/img/card-2.png'
import aboutImage from '../assets/img/about.png'
import contactImage from '../assets/img/contact.png'

import { Fragment } from "react"
import { useNavigate } from "react-router-dom"
const LandingPages = () => {
    const navigate = useNavigate()

    return(
    <Fragment>
        <div className="bg-ungu h-screen">
        <Navbar />
            <div className="container mx-auto flex flex-col h-screen lg:flex-row md:flex-row justify-evenly items-center mt-10">
                <div className="flex justify-center items-center order-1 lg:order-2 md:order-2">
                    <img src={heroImage} alt="gambar" className="w-[300px] lg:w-[400px] md:w-[300px] " />
                </div>

                <div className="mb-5 justify-center items-center flex order-2 lg:order-1 md:order-1">
                    <h1 className="w-[200px] lg:w-[400px] md:w-[200px] lg:text-[36px] font-semibold text-center font-caveat">What are you waiting for? Let's <span className="text-white">cook together</span>, 
                    With our favorite recipe.

                    <Button
                    onClick={() => navigate('/allrecipe')} 
                    text="Explore Recipes"
                    classname="font-poppins font-normal border border-purple-500 text-white text-[10px] md:text-[15px] hover:bg-purple-400 hover:text-white hover:border-none mt-5 "
                    />

                    </h1>
                </div>
            </div>
        </div>
  
    </Fragment>
    )
}

export default LandingPages

