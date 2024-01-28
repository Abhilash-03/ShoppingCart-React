import { useContext } from "react"
import CartContext from "../context/CartContext"


const Modal = ({ item, show, setShow }) => {
    const { handleCartItems, isExistedCartItem } = useContext(CartContext);
    const isAdded = isExistedCartItem(item);

  return (
    <div className="lg:w-2/3 lg:m-auto mx-4 px-3 font-serif fixed lg:top-40 top-20 sm:top-20 left-0 right-0 flex items-center py-4 backdrop-blur-md text-white ring-2 ring-yellow-400 z-10 rounded-2xl">
      <div className="prod_body flex flex-col md:flex-row space-x-4 bg-gray-900 p-4 rounded-xl">
        <div className="image flex  items-center">
            <img src={item.images} alt={item.title} className="lg:h-[250px] lg:w-[280px] w-full h-[150px] mb-3 rounded-xl" />
        </div>
        <div className="content font-bold md:w-2/3 lg:w-full space-y-3">
            <h1 className="lg:text-3xl md:text-2xl text-lg font-bold">{item.title}</h1>
            <h4 className="md:text-2xl text-xl">Price: ₹{item.price}</h4>
            <p className="text-sm md:text-xl">Description: {item.description}</p>
        </div>
        <div className="closebtn absolute -top-4 -right-3 bg-gray-700 p-2 rounded-full hover:bg-slate-400 hover:text-black">
            <button onClick={() => setShow(!show)}><i className="fa-solid fa-eye-slash"></i></button>
        </div>
        <button onClick={() => handleCartItems(item)} className="h-14 w-14 rounded-full text-2xl bg-yellow-500 text-black py-3 font-bold hover:bg-yellow-300 disabled:bg-gray-300 disabled:text-black md:absolute -bottom-5 right-2/4 left-2/4 mt-3" disabled={isAdded ? true : false}>{isAdded ? <i className="fa-solid fa-cart-shopping"></i> : <i className="fa-solid fa-cart-plus"></i>}</button>
      </div>
    </div>
  )
}

export default Modal
