import Card from "../components/Card"
import Navbar from "../components/Navbar"
import InputForm from "../components/input/Index"
import card2 from "../assets/img/card-2.png"
import Footer from "../components/Footer"

const AllRecipe = () => {
    return(
        <div>
            <div className="bg-ungu">
            <Navbar />
            </div>
            <h1 className="text-center mt-10 text-2xl font-caveat">All Recipes</h1>
        
            <div className="flex justify-center items-center">
                <div className="w-[500px]">
                    <InputForm
                    placeholder="Search ..."
                    />
                </div>
            </div>

            <div className="flex flex-col lg:flex-row md:flex-row justify-center items-center flex-wrap mb-12">
                <Card image={card2} judul="Sup Iga" content="Sup iga terdiri dari potongan daging iga yang dimasak hingga lembut, kentang, wortel, dan ..." />
                <Card image={card2} judul="Sup Iga" content="Sup iga terdiri dari potongan daging iga yang dimasak hingga lembut, kentang, wortel, dan ..." />
                <Card image={card2} judul="Sup Iga" content="Sup iga terdiri dari potongan daging iga yang dimasak hingga lembut, kentang, wortel, dan ..." />
                <Card image={card2} judul="Sup Iga" content="Sup iga terdiri dari potongan daging iga yang dimasak hingga lembut, kentang, wortel, dan ..." />
                <Card image={card2} judul="Sup Iga" content="Sup iga terdiri dari potongan daging iga yang dimasak hingga lembut, kentang, wortel, dan ..." />
                <Card image={card2} judul="Sup Iga" content="Sup iga terdiri dari potongan daging iga yang dimasak hingga lembut, kentang, wortel, dan ..." />
            </div>

            <Footer />
        </div>
    )
}

export default AllRecipe