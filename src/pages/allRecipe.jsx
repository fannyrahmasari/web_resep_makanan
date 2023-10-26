import Navbar from "../components/Navbar"
import InputForm from "../components/input/Index"
import Footer from "../components/Footer"
import Card2 from "../components/Card-2"
import Button from "../components/Button"
import { useState } from "react"
import {Link} from 'react-router-dom'
import { uid } from "uid"

const AllRecipe = () => {
    const [ reseps, setReseps ] = useState([
        {
            id: 1,
            nama: "Sup Iga",
            deskripsi: "Sup iga terdiri dari potongan daging iga yang dimasak hingga lembut, kentang, wortel, dan ...",
            bahan: "example",
            buat:"example",
            image:"example3"
        },
        {
            id: 2,
            nama: "Es Selendang Mayang",
            deskripsi: "Es selendang mayang isinya mirip seperti puding atau kue lapis yang terbuat dari tepung sagu ...",
            bahan:"example5",
            buat:"example",
            image:"example6"
        }
    ])

    const [isUpdate, setIsUpdate] = useState(
        {
            id: null,
            status: false
        }
    )

    const [formData, setFormData] = useState(
        {
            nama: '',
            deskripsi: '',
            bahan: '',
            buat: '',
            image: ''
        },
    )

    function handleChange(e){
        let data = { ...formData }
        data[e.target.name] = e.target.value
        setFormData(data)
    }

    function handleSubmit(e){
        e.preventDefault()
        alert("Oke")
        let data = [ ...reseps ]

        if(isUpdate.status){
            data.forEach((resep) => {
                if(resep.id === isUpdate.id){
                    resep.nama = formData.nama
                    resep.deskripsi = formData.deskripsi
                    resep.bahan = formData.bahan
                    resep.buat = formData.buat 
                    resep.image = formData.image
                }
            })
        }else{
            data.push(
                {
                    id: uid(), 
                    nama: formData.nama,
                    deskripsi: formData.deskripsi,
                    bahan: formData.bahan,
                    buat: formData.buat,
                    image: formData.image,
                }
            )
        }
        setReseps(data)
    }

    function handleEdit(id){
        let data = [...contacts]
        let foundData = data.find((contact) => contact.id === id)
        setFormData(
            {
                nama: foundData.nama,
                deskripsi: foundData.deskripsi,
                bahan: foundData.bahan,
                buat: foundData.buat,
                image: foundData.image,
            }
        )
        setIsUpdate({id: id, status: true})
    }


    return(
        <div>
        <div className="bg-ungu">
            <Navbar />
        </div>
        <h1 className="text-center mt-10 text-2xl font-caveat">All Recipes</h1>

        <div className="mx-auto">
                <div className="mx-auto w-[200px] lg:w-[500px] md:w-[500px]">
                    <InputForm
                    placeholder="Search ..."
                    />
                </div>
            </div>

        <div className="container mx-auto  md:flex-row  mb-10">
        <div className="lg:w-[400px] md:w-[300px] w-[300px] mx-auto">
            <form onSubmit={handleSubmit}>
                <InputForm
                    htmlFor="nama" 
                    type="text"
                    label="Nama Resep"
                    placeholder="Ketikan Nama Resep ..."
                    name="nama"
                    onChange={handleChange}
                    value={formData.nama}
                    />

                    <InputForm
                    htmlFor="nama" 
                        type="text"
                        label="Deskripsi"
                        placeholder="Ketikan Deskripsi Resep..."
                        name="deskripsi"
                        onChange={handleChange}
                        value={formData.deskripsi}
                        />

                        <InputForm
                        htmlFor="nama" 
                        type="text"
                        label="Bahan - bahan"
                        placeholder="Ketikan Bahan - bahan resep ..."
                        name="bahan"
                        onChange={handleChange}
                        value={formData.bahan}
                        />

                        <InputForm
                        htmlFor="nama" 
                        type="text"
                        label="Cara Buat"
                        placeholder="Ketikan Ketikan Cara Buat Resep ..."
                        name="buat"
                        onChange={handleChange}
                        value={formData.buat}
                        />

                        <InputForm
                        htmlFor="nama" 
                        type="file"
                        label="Image"
                        name="image"
                        onChange={handleChange}
                        // value={formData.image}
                        />

                        <Button
                        text="Kirim"
                        classname="bg-ungu text-white font-semibold mt-5"
                        />
                    </form>
            </div>
        

            <div className="flex lg:flex-row md:flex-row justify-center items-center flex-wrap mb-12 gap-4 mt-10">
            {
                reseps.map((resep) => {
                    return(
                        <Link to= {
                            {
                                pathname : `/detail/${resep.id}`,
                                state : {
                                    nama : resep.nama,
                                    deskripsi : resep.deskripsi,
                                    bahan: resep.bahan,
                                    buat : resep.buat,
                                    image: resep.image
                                },
                            }
                        }
                        key={resep.id}
                        >
                            <Card2
                            image={`assets/img/${resep.image}`}
                            judul={resep.nama}
                            content={resep.deskripsi}
                            />
                        </Link>
                    )
                })
            }
            </div>    
        </div>

        <Footer />
        </div>
    )
}

export default AllRecipe