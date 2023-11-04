import Navbar from "../components/Navbar"
import Button from "../components/Button"
import Footer from "../components/Footer"

import heroImage from '../assets/img/hero-image.png'

import Swal from "sweetalert2"

import { useEffect } from "react"
import { Fragment } from "react"
import { useNavigate } from "react-router-dom"
const LandingPages = () => {
    const navigate = useNavigate()

    useEffect(() => {
        Swal.fire({
            icon: 'success',
            title: 'Selamat Datang!',
            text: 'Selamat datang di Aneka Rasa. Mari bersama-sama memasak dengan resep favorit kita!',
        });
    }, []);

    return(
    <Fragment>
        <div className="bg-ungu h-screen">
        <Navbar />
            <div className="container mx-auto flex flex-col h-screen lg:flex-row md:flex-row justify-evenly items-center mt-10">
                <div className="flex justify-center items-center order-1 lg:order-2 md:order-2">
                    <img src={heroImage} alt="gambar" className="w-[400px] lg:w-[400px] md:w-[300px] " />
                </div>

                <div className="mb-5 justify-center items-center flex order-2 lg:order-1 md:order-1">
                    <h1 className="w-[300px] md:w-[400px] lg:w-[400px] lg:text-[36px] font-semibold text-justify lg:text-center md:text-center font-caveat text-[35px]">What are you waiting for? Let's <span className="text-white">cook together</span>, 
                    With our favorite recipe.

                    <div className="flex justify-center items-center">
                        <Button
                        onClick={() => navigate('/allrecipe')} 
                        text="Explore Recipes"
                        classname="font-poppins font-normal bg-purple-500 hover:bg-purple-400 text-white text-[10px] md:text-[15px] mt-5"
                        />
                    </div>

                    </h1>
                </div>
            </div>
        </div>
        
        <Footer />
    </Fragment>
    )
}

export default LandingPages

