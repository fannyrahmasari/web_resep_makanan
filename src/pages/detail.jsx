// Import yang diperlukan tetap ada di atas
import Navbar from "../components/Navbar";
import Button from "../components/Button";
import Footer from "../components/Footer";
import { useLocation } from "react-router-dom";

const Detail = ({resep, open, setOpen, handleDelete }) => {

    return (
      <div>
        <div className="bg-ungu">
          <Navbar />
        </div>
        <h1 className="text-center mt-10 text-2xl font-caveat mb-10">Detail Resep</h1>
        {/* Tampilkan informasi resep di sini */}
        <div className="container mx-auto">
          <div>
            <img src={resep.img} className="w-full lg:h-[200px]" />
          </div>
          <p className="font-semibold mt-5 mb-2">{resep.name}</p>
          <p className="text-justify">{resep.deskription}</p>
          {/* Tampilkan detail lainnya jika perlu */}
          {/* Tambahkan tombol atau elemen lain jika diperlukan */}
          <div className="flex mt-5 gap-2">
            <Button text="Delete" classname="bg-merah" onClick={() => handleDelete(resep.id)} />
          </div>
        </div>
        <div className="bg-ungu">
          <Footer />
        </div>
      </div>
    );
  };
  
  export default Detail;
  