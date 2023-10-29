import Button from "./Button"
import { Link } from "react-router-dom"
const Card2 = ({data, handleEdit, handleDelete, src}) => {

    return(
           <div className="container mx-auto justify-center flex flex-wrap gap-2 mb-10">
            {data.map((resep) => {
                return(
                    // <Link to={`/detail/${resep.id}`}>
                    <div key={resep.id}>
                            <div className="max-w-sm rounded overflow-hidden shadow-lg">
                                <div>
                                    <img src={src.image} alt="" className="w-[500px] h-[200px]" />
                                </div> 
                                <div className="px-6 py-4">
                                    <div className="font-bold text-xl mb-2">{resep.nama}</div>
                                    <p className="text-gray-700 text-base h-20">
                                    {resep.deskripsi}
                                    </p>
                                    
                                    <div className="flex gap-1">
                                        <Button 
                                        text="Edit"
                                        classname="bg-blue-300 text-white"
                                        onClick={() => handleEdit(resep.id)}
                                        />
                                        <Button 
                                        text="Delete"
                                        classname="bg-red-300 text-white"
                                        onClick={() => handleDelete(resep.id)}
                                        />
                                    </div>
                                </div>
                            </div>
                    </div>
                    // </Link>
                )
                
            })}
            </div>
    )
}

export default Card2