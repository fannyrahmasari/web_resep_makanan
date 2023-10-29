import Navbar from "../components/Navbar"
import Input from "../components/input/Input"
import Footer from "../components/Footer"
import Button from "../components/Button"
import { useState, useEffect } from "react"
import { db } from "../firebase-config"
import {collection, getDocs, addDoc, updateDoc, deleteDoc, doc} from "firebase/firestore"
import Label from "../components/input/Label"


const AllRecipe = () => {
    const [newName,setNewName] = useState("")
    const [newDeskription,setNewDeskription] = useState("")
    const [newMaterial,setNewMaterial] = useState("")
    const [newMake,setNewMake] = useState("")
    
    const [reseps, setReseps] = useState([])
    const resepsCollectionRef = collection(db, "resep")

    const createResep = async (event) => {
        event.preventDefault()
        await addDoc(resepsCollectionRef, {
            name: newName,
            deskription: newDeskription,
            material: newMaterial,
            make: newMake
        })
    }

    const updateResep = async (id) => {
        const resepDoc = doc(db, "resep", id)
        
        await updateDoc(resepDoc, newFields)
    }

    const deleteResep = async (id) => {
        const resepDoc = doc(db, "resep", id)
        await deleteDoc(resepDoc)
    }

    useEffect(() => {
        const getReseps = async () => {
            const data = await getDocs(resepsCollectionRef)
            setReseps(data.docs.map((doc) => ({...doc.data(), id: doc.id })))
        }

        getReseps()
    },[])


    
    return(
        <div>
        <div className="bg-ungu">
            <Navbar />
        </div>
        <h1 className="text-center mt-10 text-2xl font-caveat">All Recipes</h1>

        <div className="container flex flex-col lg:flex-row justify-evenly mx-auto  md:flex-row  mb-10 ">
        <div className="lg:w-[400px] md:w-[300px] w-[300px] mx-auto">
            <form onSubmit={createResep}>
                <Label>Nama Resep</Label>
                <Input 
                    type="text"
                    placeholder="Ketikan Nama Resep ..."
                    name="name"
                    id="name"
                    onChange={(event) => {
                        setNewName(event.target.value)
                    }}
                    />

                <Label>Deskripsi</Label>
                <Input
                    htmlFor="deskription" 
                    type="text"
                    placeholder="Ketikan Deskripsi Resep..."
                    id="deskription"
                    name="deskription"
                    onChange={(event) => {setNewDeskription(event.target.value)}}
                />

                <Label>Bahan - bahan</Label>
                <Input
                    htmlFor="material" 
                    type="text"
                    placeholder="Ketikan Bahan - bahan resep ..."
                    id="material"
                    name="material"
                    onChange={(event) => {setNewMaterial(event.target.value)}}
                />
                
                <Label>Cara Membuat</Label>
                <Input
                    htmlFor="make" 
                    type="text"
                    placeholder="Ketikan Ketikan Cara buat Resep ..."
                    id="make"
                    name="make"
                    onChange={(event) => {setNewMake(event.target.value)}}
                />

                <Label>Gambar</Label>
                <Input
                    htmlFor="image" 
                    type="file"
                    label="Image"
                    name="image"
                    id="image"
                />

                <Button
                    type="submit"
                    text="Kirim"
                    classname="bg-ungu text-white font-semibold mt-5"
                />
                
                </form>
            </div>
            <div className="w-[400px] lg:w-[500px] md:w-[500px] mx-auto">
                <img src="../src/assets/img/add.png" alt="" />
            </div>
        </div>

            <div>
                <h1>TESTING</h1>
                {reseps.map((resep) => {
                    return(
                    <div key={resep.id}>
                        <h1>Name : {resep.name}</h1>
                        <h1>Deskription : {resep.deskription}</h1>
                        <h1>Material : {resep.material}</h1>
                        <h1>Make : {resep.make}</h1>
                        <Button
                        text="Update"
                        onClick={() => {updateResep(resep.id)}} 
                        />
                        <Button
                        text="Delete" 
                        onClick={() => {deleteResep(resep.id)}}
                        />
                    </div>
                    )
                })}
            </div>
            
        <Footer />
        </div>
    )
}

export default AllRecipe