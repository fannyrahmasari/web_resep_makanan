import Navbar from "../components/Navbar"
import Input from "../components/input/Input"
import Label from "../components/input/Label"
import Footer from "../components/Footer"
import Button from "../components/Button"

import { useState, useEffect } from "react"
import { db } from "../firebase-config"
import { useNavigate } from "react-router-dom"
import { collection, deleteDoc, doc, onSnapshot } from "firebase/firestore"
import ModalComp from "../components/ModalComp"

const AllRecipe = () => {
   const [reseps, setReseps] = useState([])
   const [open, setOpen] = useState(false)
   const [resep, setResep] = useState({})
   const [loading, setLoading] = useState(false)
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
   }

   const handleDelete = async (id) => {
    if(window.confirm("Are You Sure to delete that user ?")){
        try{
            setOpen(false)
            await deleteDoc(doc(db, "resep", id))
            setReseps(resep.filter((resep) => UserActivation.id !== id))
        } catch (err){
            console.log(err)
        }
    }
   }

    return(
        <div>
        <div className="bg-ungu">
            <Navbar />
        </div>
        <h1 className="text-center mt-10 text-2xl font-caveat mb-10">All Recipes</h1>

        <div className="container mx-auto flex flex-wrap flex-col lg:flex-row md:flex-row gap-2 justify-center items-center">
            {reseps && reseps.map((item) => (
                <div key={item.id} className="lg:w-[300px] w-[300px] shadow-lg p-4">
                    <div>
                        <img src={item.img} className="w-full lg:h-[200px]"/>
                    </div>
                    <p className="font-semibold mt-5 mb-2">{item.name}</p>
                    <p className="text-justify h-[180px]">{item.deskription}</p>
                    <div className="flex mt-5 gap-2">
                        <Button
                        text="Update"
                        classname="bg-ungu"
                        onClick={() => navigate(`/update/${item.id}`)}
                        />
                        <Button
                        text="View"
                        classname="bg-ungu"
                        onClick={() => handleModal(item)}
                        />
                    </div>
                </div>
            ))}
        </div>

        {open && (
        <ModalComp 
            open={open}
            setOpen={setOpen}
            handleDelete={handleDelete}
            img={resep.img} // Sesuaikan dengan prop yang ada di ModalComp
            name={resep.name} // Sesuaikan dengan prop yang ada di ModalComp
            deskription={resep.deskription} // Sesuaikan dengan prop yang ada di ModalComp
            ingredients={resep.ingredients} // Sesuaikan dengan prop yang ada di ModalComp
            make={resep.make} // Sesuaikan dengan prop yang ada di ModalComp
        />
        )}

        {/* <Footer /> */}
        </div>
    )
}

export default AllRecipe