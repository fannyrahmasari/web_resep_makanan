import Navbar from "../components/Navbar"

import aboutImage from '../assets/img/about (2).png'
import Footer from "../components/Footer"

const About = () => {
    return(
        <>
        <div>
            <Navbar />
        </div>
        <div className="container mx-auto flex flex-col md:flex-row justify-evenly mt-32">
            <div className="flex justify-center items-center order-2 md:order-1">
                <p className="text-center text-xl font-caveat w-[300px] lg:w-[600px] mb-5">Selamat datang di Aneka Rasa!
                    Kami adalah komunitas pecinta masakan yang memiliki hasrat bersama untuk membagikan dan menciptakan resep makanan yang lezat. Dengan berbagai pengalaman kuliner dari seluruh penjuru dunia, kami berkomitmen untuk menginspirasi Anda dalam dunia memasak. Di sini, Anda akan menemukan beragam resep makanan dari berbagai jenis kuliner, mulai dari hidangan tradisional hingga makanan modern yang kreatif.
                </p>
            </div>
            <div className="order-1 md:order-2">
                <img src={aboutImage} alt="" className="w-[400px] lg:w-[500px] mx-auto" />
            </div>
        </div>
        <Footer />  
        </>
    )
}

export default About 