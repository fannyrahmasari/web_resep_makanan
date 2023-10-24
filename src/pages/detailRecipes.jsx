import Navbar from "../components/Navbar"
import card1 from "../assets/img/card-1.png"
import Footer from "../components/Footer"

const DetailRecipes = () => {
    return(
        <div>
           <div className="bg-ungu">
                <Navbar />
            </div> 
            <h1 className="text-center font-caveat text-2xl font-semibold mt-10">Detail Recipes</h1>
            <div className="container mx-auto flex">
                <div className="flex flex-col lg:flex-row md:flex-row">
                    <div className="mx-auto mt-10 mb-10">
                        <img src={card1} alt="" className="lg:w-[500px] md:w-[400px]" />
                    </div>
                    <div className="lg:ml-10 ml-5 mr-5">
                        <h2 className="font-semibold">Es Selendang Mayang</h2>

                        <p className="mt-5">Es selendang mayang adalah salah satu minuman tradisional Indonesia asal Jakarta. </p>
                        
                        <div>
                            <h3 className="mt-8 mb-2 font-semibold">Bahan - bahan</h3>
                            <div className="flex">
                                <ul>
                                    <li>250 gr tepung aren</li>
                                    <li>250 gr gula pasir</li>
                                    <li>65 gr tepung hunkwe</li>
                                    <li>50 gr tepung beras</li>
                                    <li>30 gr tepung tapioka</li>
                                    <li>2,5 liter air</li>
                                    <li>1 sdt garam</li>
                                </ul>
                                <div className="ml-10">
                                    <ul>
                                        <li>250 gr tepung aren</li>
                                        <li>250 gr gula pasir</li>
                                        <li>65 gr tepung hunkwe</li>
                                        <li>50 gr tepung beras</li>
                                        <li>30 gr tepung tapioka</li>
                                        <li>2,5 liter air</li>
                                        <li>1 sdt garam</li>
                                    </ul>
                                </div>
                            </div>

                            <h3 className="mt-8 mb-2 font-semibold">Cara Buat</h3>

                            <div className="flex mb-10">
                                    <ol>
                                        <li>1. Olesi loyang dengan warna hijau, sisihkan</li>
                                        <li>2. Campur jadi satu bahan selendang mayang kecuali warna makanan, aduk rata, lalu saring, kemudian masak hingga meletup dan berwarna bening, lalu tuang kedalam loyang ratakan, lalu olesi dengan warna merah lalu dinginkan hingga siap untuk dipotong</li>
                                        <li>3. Masak bahan santan, aduk aduk hingga matang</li>
                                        <li>4. Masak gula pasir, aduk aduk hingga menjadi karamel, lalu tuang air, aduk lagi masak hingga mendidih</li>
                                        <li>5. Penyajian : ambil es batu secukupnya, taruh dimangkok, lalu tambahkan beberapa potongan selendang mayang</li>
                                        <li>6. Selendang mayang siapp disajikan</li>
                                    </ol>
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