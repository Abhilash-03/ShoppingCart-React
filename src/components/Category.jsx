import { useContext, useEffect } from "react"
import CartContext from "../context/CartContext"

const Category = () => {
    const { getAllCategory, category, handleImageError } = useContext(CartContext);

    useEffect(() => {
       getAllCategory();
    }, []);
    
  return (
    <div className="bg-gray-900 text-white flex justify-center items-center flex-wrap h-screen overflow-auto ">
        {
            category.map(cat => (
                <div key={cat.id} className="box bg-slate-800 m-3 rounded-lg p-3 overflow-hidden space-y-5">
             {  cat.image ?
                    <img src={cat.image} alt={cat.name} className="h-[300px] w-[350px] hover:scale-110 rounded-xl transition-all" onError={handleImageError} />
                    : 
                    <img src={''} alt={cat.name} className="h-[300px] w-[350px] animate-pulse bg-gray-600 hover:scale-110 rounded-xl transition-all" />
                    }
                    <h2 className="text-3xl font-bold font-serif mt-3 text-center">{cat.name}</h2>
                </div>
            ))
        }
    </div>
  )
}

export default Category
