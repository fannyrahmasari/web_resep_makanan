import Navbar from "../components/Navbar"
import Input from "../components/input/Input"
import Footer from "../components/Footer"
import Button from "../components/Button"
import '../components/Modal/modal.css'

import { useState, useEffect } from "react"
import { db } from "../firebase-config"
import { useNavigate } from "react-router-dom"
import { collection, deleteDoc, doc, onSnapshot } from "firebase/firestore"

import Modal from "../components/Modal/Modal"

const AllRecipe = () => {
   const [reseps, setReseps] = useState([])
   const [open, setOpen] = useState(false)
   const [resep, setResep] = useState({})
   const [loading, setLoading] = useState(false)
   const [searchTerm, setSearchTerm] = useState('')
   const [modal, setModal] = useState(false)
   const [modalPosition, setModalPosition] = useState({ top: "50%", left: "50%" });
   const navigate = useNavigate()

   useEffect(() => {
    setLoading(true)
    const unsub = onSnapshot(collection(db, "resep"), (snapshot) => {
        let list = []
        snapshot.docs.forEach((doc) => {
           list.push({id: doc.id, ...doc.data()})
        })
        setReseps(list)
        setLoading(false)
    }, (error) => {
        console.log(error)
    })

    return () => {
        unsub()
    }
   },[])

   const handleModal = (item) => {
        setOpen(true)
        setResep(item)
        console.log(setResep)
   }

   const handleDelete = async (id) => {
    if(window.confirm("Are You Sure to delete that user ?")){
        try{
            setOpen(false)
            await deleteDoc(doc(db, "resep", id))
            setReseps(reseps.filter((resep) => resep.id !== id))
        } catch (err){
            console.log(err)
        }
    }
   }

   const toggleModal = (item) => {
        setModal(!modal)
        setModalPosition({ top: "50%", left: "50%" });
        setResep(item)
    }

    return(
    <div>
        <div>
            <Navbar />
        </div>

    <div>
        <h1 className="mt-[90px] mb-5 text-center font-caveat text-4xl">All Recipe</h1>

        <div className="mx-auto md:w-[500px] w-[300px] mt-5 mb-5">
            <Input
            placeholder="Search Recipe ..."
            onChange={event => {setSearchTerm(event.target.value)}}
            />
        </div>
    
        <div className="container mx-auto flex flex-wrap flex-col lg:flex-row md:flex-row gap-2 justify-center items-center">
            {reseps && reseps.filter((val) => {
                if (searchTerm == "" ){
                    return val
                }else if (val.name.toLowerCase().includes(searchTerm.toLowerCase())){
                    return val
                }
            }).map((item) => (
                <div key={item.id} className="lg:w-[300px] w-[300px] shadow-lg p-4 bg-white">
                    <div>
                        <img src={item.img} className="w-full lg:h-[200px]"/>
                    </div>
                    <p className="font-semibold mt-5 mb-2">{item.name}</p>
                    <p className="text-justify h-[180px]">{item.deskription}</p>
                    <div className="flex mt-5 gap-2">
                        <Button
                        text="Update"
                        classname="bg-ungu text-white"
                        onClick={() => navigate(`/update/${item.id}`)}
                        />
                        <Button
                        text="View"
                        classname="bg-ungu text-white"
                        onClick={() => toggleModal(item)}
                        />
                    </div>
                </div>
            ))}
        </div>
    </div>
            

    <div>
            {modal && (
                <div className="modal"
                style={{
                    top: modalPosition.top,
                    left: modalPosition.left,
                    transform: 'translate(-50%, -50%)',
                }}
                >
                <div 
                onClick={toggleModal} 
                className='overlay'
                >
                </div>
                    
                <div className='modal-content modal w-60 md:w-[900px]'>

                        <h2 className="font-semibold text-center mb-5">{resep.name}</h2>
              
                        <img src={resep.img} alt="" className="w-60 mx-auto" />
            
                        <p className="mt-5">{resep.deskription}</p>
                        <h3 className="mt-5 mb-5 font-semibold">Bahan - bahan</h3>
                        <p>{resep.ingredients}</p>

                        <h3 className="mt-5 mb-5 font-semibold">cara Membuat</h3>
                        <p>{resep.make}</p>

                        <div className="flex gap-2 mt-5">
                        <Button
                            text="Cancel"
                            classname="bg-green-500 text-white"
                            onClick={toggleModal}
                        />
                        <Button
                            text="Delete"
                            classname="bg-red-600 text-white"
                            onClick={() => handleDelete(resep.id)}
                        />
                        </div>
                </div>
            </div>
            )}
        </div>

        <Footer />
        </div>
    )
}

export default AllRecipe