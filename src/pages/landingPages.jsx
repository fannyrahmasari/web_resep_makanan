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
        <div className="bg-ungu w-full lg:h-1/2 md:h-1/2 h-1/2">
        <Navbar />
            <div className="container mx-auto flex flex-col lg:flex-row md:flex-row justify-evenly items-center mt-20">
                <div className="flex justify-center items-center order-1 lg:order-2 md:order-2">
                    <img src={heroImage} alt="gambar" className="w-[300px] lg:w-[400px] md:w-[300px] " />
                </div>

                <div className="mb-5 justify-center items-center flex order-2 lg:order-1 md:order-1">
                    <h1 className="w-[200px] lg:w-[400px] md:w-[200px] lg:text-[36px] font-semibold text-center font-caveat">What are you waiting for? Let's <span className="text-white">cook together</span>, 
                    With our favorite recipe.

                    <Button
                    onClick={() => navigate('/allrecipe')} 
                    text="Explore Recipes"
                    classname="font-poppins font-normal border border-white hover:bg-purple-400 hover:text-white hover:border-none mt-5 "
                    />

                    </h1>
                </div>
            </div>
            </div>

            {/* Recepies */}
            <div className="container mx-auto lg:flex md:flex">
                <div className="text-center lg:text-left mt-5 font-semibold">
                    <h1 className="text-lg">RECIPES</h1>

                    <div className="flex justify-center items-center flex-col">
                        <Button type="button" text="Fast Food" classname="mt-7 border border-ungu hover:bg-ungu hover:text-white hover:outline-none" />
                        <Button type="button" text="Soups" 
                        classname="mt-7 border lg:w-[123px] md:w-[92px] w-[92px] border-ungu hover:bg-ungu hover:text-white hovernone" />
                        <Button type="button" text="Desserts" classname="mt-7 border border-ungu lg:w-[123px] md:w-[90px]  w-[92px] hover:bg-ungu hover:text-white hovernone" />
                        <Button type="button" text="Salads" classname="mt-7 border border-ungu lg:w-[123px] md:w-[92px]  hover:bg-ungu hover:text-white hover:outline-none" />
                    </div>
                </div>

                

                <div className="flex justify-center items-center">
                    <div className="flex flex-col lg:flex-row md:flex-row mt-10 lg:ml-16 md:ml-10 ">
                        <Card image={card1} judul="Es Selendang Mayang" content="Es selendang mayang isinya mirip seperti puding atau kue lapis yang terbuat dari tepung sagu ..." />

                        <Card image={card2} judul="Sup Iga" content="Sup iga terdiri dari potongan daging iga yang dimasak hingga lembut, kentang, wortel, dan ..." />
                    </div>
                </div>
            </div>
            <div className="container mx-auto flex lg:justify-end md:justify-end justify-center mt-5">
                <Button onClick={() => navigate('/allrecipe')} type="button" text="Read More ..." classname="bg-ungu text-white font-semibold " />
            </div>


            {/* About */}
            <div className="bg-unguMuda mt-10">
                <div className="flex flex-col lg:flex-row md:flex-row justify-between">
                    <div className="flex flex-col justify-center items-center lg:ml-28 mb-10">
                        <h1 className="mb-10 mt-10 text-2xl font-semibold font-caveat">About</h1>
                        <p className="text-center lg:text-2xl text-[15px] lg:w-[600px] md:w-[400px] md:ml-5 font-caveat">Selamat datang di Aneka Rasa - Sumber Utama untuk Inspirasi Kuliner!
                            Kami dengan bangga mempersembahkan Aneka Rasa, tempat di mana Anda dapat menemukan beragam resep makanan yang lezat, ide kreatif, dan wawasan tentang dunia kuliner. Kami berkomitmen untuk memberikan sumber daya terbaik bagi semua pecinta makanan
                        </p>
                    </div>
                    <div className="">
                            <img src={aboutImage} alt="image" className="lg:w-[500px] lg:h-[400px] md:w-[400px] opacity-80"/>
                    </div>
                </div>
            </div>


            {/* Contact Us */}
            <h1 className="text-center font-semibold text-lg mt-5 mb-5">Contact Us</h1>
            <div className="container mx-auto flex flex-col lg:flex-row md:flex-row justify-between mt-10 mb-10">
                <div className="flex justify-center">
                    <img src={contactImage} alt="" className="lg:w-[600px] w-[400px]"/>
                </div>
                <div className="lg:w-[500px] w-[300px] mx-auto">
                    <form>
                        <InputForm 
                        label="Your Name :"
                        type="text"
                        placeholder="Enter Your Name ..."
                        name="name"
                        />

                        <InputForm 
                        label="E-Mail :"
                        type="email"
                        placeholder="example@gmail.com"
                        name="email"
                        />

                        <InputForm 
                        label="Messages :"
                        type="text"
                        placeholder="Enter Your Message ..."
                        name="message"
                        />

                        <Button
                        type="button"
                        text="Send"
                        classname="bg-ungu text-white font-semibold mt-5"
                        />
                    </form>
                </div>
            </div>

            {/* Footer */}
            <Footer />
    </Fragment>
    )
}

export default LandingPages

