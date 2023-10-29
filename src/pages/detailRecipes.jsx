import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Button from "../components/Button"
import card2 from '../assets/img/card-2.png'
import { useParams } from 'react-router-dom';
const DetailRecipes = ({reseps}) => {
    const { id } = useParams();

    if (!reseps) {
        return <div>Data reseps tidak tersedia.</div>;
    }

    const resep = reseps.find((resep) => resep.id === parseInt(id));

    if (!resep) {
        return <div>Resep tidak ditemukan.</div>;
    }

    return(
        <div>
           <div className="bg-ungu">
                <Navbar />
            </div> 
            <h1 className="text-center font-caveat text-2xl font-semibold mt-10 mb-10">Detail Recipes</h1>
            <div className="container mx-auto flex justify-evenly">
                <div className="flex flex-col lg:flex-row md:flex-row lg:h-[500px]">
                    <div className="mx-auto mt-10 mb-10">
                        <img src={card2} alt="" className="lg:w-[200px] md:w-[200px]" />
                    </div>
                    <div className="lg:ml-10 ml-5 mr-5">
                        <h2 className="font-semibold">{resep.nama}</h2>

                        <p className="mt-5">{resep.deskripsi}</p>
                        
                        <div>
                            <h3 className="mt-8 mb-2 font-semibold">Bahan - bahan</h3>
                            <div className="flex">
                                <p>{resep.bahan}</p>
                            </div>

                            <h3 className="mt-8 mb-2 font-semibold">Cara Buat</h3>

                            <div className="flex mb-10">
                                <p>{resep.buat}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default DetailRecipes