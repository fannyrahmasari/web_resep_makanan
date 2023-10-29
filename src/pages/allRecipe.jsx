import Navbar from "../components/Navbar"
import InputForm from "../components/input/Index"
import Footer from "../components/Footer"
import Card2 from "../components/Card-2"
import Button from "../components/Button"
import { useState, useEffect } from "react"
import { uid } from "uid"
import axios from "axios"
import Upload from "../components/uploaded"

const AllRecipe = () => {
    const [ reseps, setReseps ] = useState([])

    const [isUpdate, setIsUpdate] = useState(
        {
            id: null,
            status: false
        }
    )
    const [image, setImage] = useState('')
    const [imagePreview, setImagePreview] = useState(null)

    const [formData, setFormData] = useState(
        {
            nama: '',
            deskripsi: '',
            bahan: '',
            cara_membuat: '',
            image: ''
        },
    )

    useEffect(() => {
        axios.get("https://651a7d3e340309952f0d621e.mockapi.io/reseps").then((res) => {
            console.log(res.data)
            setReseps(res?.data ?? [])
        })
    }, [])

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

            axios.put(`https://651a7d3e340309952f0d621e.mockapi.io/reseps/${isUpdate.id}`, {
                nama: formData.nama,
                deskripsi: formData.deskripsi,
                bahan: formData.bahan,
                buat: formData.buat,
                image: formData.image,
            }).then((res) => {
                alert('Berhasil Mengedit Data')
            })
        }else{
            let newData = {
                id: uid(), 
                nama: formData.nama,
                deskripsi: formData.deskripsi,
                bahan: formData.bahan,
                buat: formData.buat,
                image: formData.image,
            }
            data.push(newData)

            axios.post('https://651a7d3e340309952f0d621e.mockapi.io/reseps', newData).then((res) => {
                alert("Berhasil Menyimpan Data")
            })
        }

        setIsUpdate({id: null, status: false})
        setReseps(data)
        setIsUpdate({id: null, status: "false"})

        console.log('image', image)
    }

    function handleEdit(id){
        let data = [...reseps]
        let foundData = data.find((resep) => resep.id === id)
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

    function handleDelete(id){
       let data = [...reseps]
       let filteredData = data.filter(resep => resep.id !== id)

       axios.delete(`https://651a7d3e340309952f0d621e.mockapi.io/reseps/${id}`).then((res) => {
        alert('Berhasil Menghapus Data')
       })

       setReseps(filteredData)
    }

    function onImageUpload(e){
        const file = e.target.files[0]
        setImage(file)

        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = () => {
            setImagePreview(URL.createObjectURL(file))
        }

        const formData = new FormData()
        formData.append('file', file)

        axios.post('https://651a7d3e340309952f0d621e.mockapi.io/reseps',formData, {
            headers: {
                'Content-Type' : 'multipart/form-data'
            }
        })
        .then((imageResponse) => {
            const imageUrl = imageResponse.data.imageUrl

            setFormData({
                ...formData,
                image: imageUrl,
            })
        })
        .catch((error) => {
            console.log(error)
        })
    }

    

    return(
        <div>
        <div className="bg-ungu">
            <Navbar />
        </div>
        <h1 className="text-center mt-10 text-2xl font-caveat">All Recipes</h1>

        <div className="container flex flex-col lg:flex-row justify-evenly mx-auto  md:flex-row  mb-10 ">
        <div className="lg:w-[400px] md:w-[300px] w-[500px] mx-auto">
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
                        label="Cara buat"
                        placeholder="Ketikan Ketikan Cara buat Resep ..."
                        name="buat"
                        onChange={handleChange}
                        value={formData.buat}
                        />

                        <Upload
                        onChange={(e) => onImageUpload(e)}
                        img={imagePreview}
                        />

                        {/* <InputForm
                        htmlFor="image" 
                        type="file"
                        label="Image"
                        name="image"
                        id="image"
                        // onChange={handleUploadChange}
                        /> */}

                        <Button
                        text="Kirim"
                        classname="bg-ungu text-white font-semibold mt-5"
                        />
                    </form>
            </div>
            <div className="w-[600px]">
                <img src="../src/assets/img/add.png" alt="" />
            </div>
        </div>
        
            <Card2
            src={image}
            handleDelete={handleDelete} 
            handleEdit={handleEdit} 
            data={reseps} /> 
            
        <Footer />
        </div>
    )
}

export default AllRecipe