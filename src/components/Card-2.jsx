import Button from "./Button"
import { Link } from "react-router-dom"
const Card2 = () => {

    return(
           <div className="container mx-auto justify-center flex flex-wrap gap-2 mb-10">
           
                return(
                    <div>
                            <div className="max-w-sm rounded overflow-hidden shadow-lg">
                                <div>
                                    <img src="" alt="" className="w-[500px] h-[200px]" />
                                </div> 
                                <div className="px-6 py-4">
                                    <div className="font-bold text-xl mb-2">Nama Resep</div>
                                    <p className="text-gray-700 text-base h-20">
                                        Deskripsi
                                    </p>
                                    
                                    <div className="flex gap-1">
                                        <Button 
                                        text="Edit"
                                        classname="bg-blue-300 text-white"
                                        />
                                        <Button 
                                        text="Delete"
                                        classname="bg-red-300 text-white"
                                        />
                                    </div>
                                </div>
                            </div>
                    </div>
                )
            </div>
    )
}

export default Card2