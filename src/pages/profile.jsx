import Button from "../components/Button"
import Navbar from "../components/Navbar"
import InputForm from "../components/input/Index"
import Card from "../components/Card"
import Footer from "../components/Footer"

const Profile = () => {

    return(
        <div>
            <div className="bg-ungu">
                <Navbar />
            </div>
            
            <h1 className="text-center font-caveat text-2xl font-semibold mt-5 mb-5">Profile</h1>

            <div className="container mx-auto flex lg:justify-around mb-36 flex-col lg:flex-row md:flex-row">
                <div className="mx-auto">
                    <img src="../src/assets/img/profile.jpg" alt="" className="w-[200px] rounded-full" />
                </div>

                <div className="mt-5 md:ml-10 mx-auto">
                    <p className="text-center lg:text-left md:text-left">E-Mail : example@gmail.com</p>
                    <h2 className="mt-5 font-semibold text-xl">Resep vaforite</h2>

                    <Card image="../src/assets/img/card-2.png" judul="Sup Iga" content="Sup iga terdiri dari potongan daging iga yang dimasak hingga lembut, kentang, wortel, dan ..." />
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default Profile