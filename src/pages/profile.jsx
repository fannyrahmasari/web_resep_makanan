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

            <div className="container mx-auto flex lg:justify-around mb-10 flex-col lg:flex-row md:flex-row justify-center items-center">
                <div>
                    <img src="../src/assets/img/profile.jpg" alt="" className="w-[200px] rounded-full" />
                </div>

                <div className="mt-5 md:ml-10">
                    <p className="text-center lg:text-left md:text-left">E-Mail : example@gmail.com</p>
                    <h2 className="mt-5 font-semibold text-xl">Resep vaforite</h2>

                    <Card image="../src/assets/img/card-2.png" judul="Sup Iga" content="Sup iga terdiri dari potongan daging iga yang dimasak hingga lembut, kentang, wortel, dan ..." />
                </div>

                <div className="ml-10">
                    <h2 className="font-semibold text-xl mt-10">Tambah Resep Sendiri</h2>
                    <form>
                        <InputForm
                        htmlFor="nama" 
                        type="text"
                        label="Nama Resep"
                        placeholder="Ketikan Nama Resep ..."
                        />

                        <InputForm
                        htmlFor="nama" 
                        type="text"
                        label="Bahan - bahan"
                        placeholder="Ketikan Bahan - bahan resep ..."
                        />

                        <InputForm
                        htmlFor="nama" 
                        type="text"
                        label="Cara Buat"
                        placeholder="Ketikan Ketikan Cara Buat Resep ..."
                        />

                        <InputForm
                        htmlFor="nama" 
                        type="file"
                        label="Image"
                        />

                        <Button
                        text="Kirim"
                        classname="bg-ungu text-white font-semibold mt-5"
                        />
                    </form>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default Profile