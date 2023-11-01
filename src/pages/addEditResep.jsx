import React, { useEffect, useState } from 'react'
import Label from '../components/input/Label'
import Input from '../components/input/Input'
import Button from '../components/Button'

import { storage, db } from '../firebase-config'
import { useParams, useNavigate } from 'react-router-dom'
import { Loader } from 'semantic-ui-react'
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage'
import { addDoc, collection, doc, getDoc, serverTimestamp, updateDoc } from 'firebase/firestore'
import Navbar from '../components/Navbar'

const initialState = {
   name: "",
   deskription: "",
   ingredients: "",
   make: "" 
}

const AddEditResep = () => {
    const [data, setData] = useState(initialState)
    const {name, deskription, ingredients, make} = data
    const [file, setFile] = useState(null)
    const [progress, setProgress] = useState(null)
    const [errors, setErrors] = useState({})
    const [isSubmit, setIsSUbmit] = useState(false)
    const navigate = useNavigate()
    const {id} = useParams()

    useEffect(() => {
        id && getSingleUser()
    }, [id])

    const getSingleUser = async () => {
        const docRef = doc(db, "resep", id)
        const snapshot = await getDoc(docRef)
        if(snapshot.exists()){
            setData({...snapshot.data()})
        }
    }

    useEffect(() => {
        const uploadFile = () => {
            const name = new Date().getTime() + file.name
            const storageRef = ref(storage,file.name)
            const uploadTask = uploadBytesResumable(storageRef, file)

            uploadTask.on("state_changed", (snapshot) => {
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                setProgress(progress)
                switch(snapshot.state){
                    case "paused":
                        console.log("Upload is Pause")
                        break
                    case "running":
                        console.log("Upload is Running")
                        break
                    default:
                        break
                }
            }, (error) => {
                console.log(error)
            },
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    setData((prev) => ({...prev, img: downloadURL}))
                })
            }
            )
        }

        file && uploadFile()
    }, [file])

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }

    const validate = () => {
        let errors = {}
        if(!name){
            errors.name = "Name is Required"
        }

        if(!deskription){
            errors.deskription = "Deskription is Required"
        }

        if(!ingredients){
            errors.ingredients = "Ingredients is Required"
        }

        if(!make){
            errors.make = "Make is Required"
        }

        return errors
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        let errors = validate()
        if (Object.keys(errors).length) return setErrors(errors)
        setIsSUbmit(true)
        if(!id){
            try{
                await addDoc(collection(db, "resep"), {
                    ...data,
                    timestamp: serverTimestamp()
                })
            } catch (error){
                console.log(error)
            }
        }else{
            try{
                await updateDoc(doc(db, "resep", id), {
                    ...data,
                    timestamp: serverTimestamp()
                })
            } catch (error){
                console.log(error)
            }
        }
        navigate("/allrecipe")
    }

  return (
    <div>
        <div className='bg-ungu'>
            <Navbar />
        </div>

        <div className="container mx-auto flex justify-between">

            {isSubmit ? <Loader active inline="centered" size="huge" />:(
            
            <div className='md:w-[600px] w-[300px] mx-auto'>
            <h2 className='mb-5 text-center font-semibold font-caveat text-[30px] mt-[100px]'>{id ? "Update Recipe" : "Add Recipe"}</h2>
            <form onSubmit={handleSubmit}>
                <Label className="mt-10">Nama Resep</Label>
                <Input 
                    type="text"
                    placeholder="Ketikan Nama Resep ..."
                    name="name"
                    id="name"
                    onChange={handleChange}
                    value={name}
                    autoFocus
                    error={errors.name ? {content: errors.name} : null}
                />

                <Label>Deskripsi</Label>
                <Input
                    htmlFor="deskription" 
                    type="text"
                    placeholder="Ketikan Deskripsi Resep..."
                    id="deskription"
                    name="deskription"
                    onChange={handleChange}
                    value={deskription}
                    autoFocus
                    error={errors.deskription ? {content: errors.deskription} : null}
                />

                <Label>Bahan - bahan</Label>
                <Input
                    htmlFor="ingredients" 
                    type="text"
                    placeholder="Ketikan Bahan - bahan resep ..."
                    id="ingredients"
                    name="ingredients"
                    onChange={handleChange}
                    value={ingredients}
                    autoFocus
                    error={errors.ingredients ? {content: errors.ingredients} : null}
                />
                
                <Label>Cara Membuat</Label>
                <Input
                    htmlFor="make" 
                    type="text"
                    placeholder="Ketikan Ketikan Cara buat Resep ..."
                    id="make"
                    name="make"
                    onChange={handleChange}
                    value={make}
                    autoFocus
                    error={errors.make ? {content: errors.make} : null}
                />

                <Label>Upload Image</Label>
                <Input
                    htmlFor="img" 
                    type="file"
                    label="Image"
                    name="img"
                    id="img"
                    onChange={(e) => setFile(e.target.files[0])}
                />

                <Button
                    type="submit"
                    disabled={progress !== null && progress < 100}
                    text="Kirim"
                    classname="bg-ungu text-white font-semibold mt-5"
                />
                
            </form>
            </div>
            )}
            </div>
        </div>
  )
}

export default AddEditResep