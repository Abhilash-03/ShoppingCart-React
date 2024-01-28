import {  useContext, useState } from "react";
import CartContext from "../context/CartContext";
import Modal from "./Modal";

const Products = ({ items }) => {
    const { title, images } = items;
    const [image, setImage] = useState(images[0]);
    const [show, setShow] = useState(false);
    const { handleCartItems, isExistedCartItem } = useContext(CartContext);

    const isAdded = isExistedCartItem(items);

  return (
    <div className="product md:w-3/5 lg:w-2/5 w-full text-xl bg-slate-600 font-serif p-2 md:m-2 mt-4 rounded-xl overflow-hidden transition-all delay-500">
      <div className="flex flex-col xl:flex-row bg-gray-800 items-center justify-center  rounded-xl p-2 ">
         <div className="image flex sm:p-1 flex-wrap justify-center p-3  transition-all">
          {  images.map((image, idx) => (
            <img key={idx} src={image} alt='image' className="md:h-[100px] md:w-[130px] w-[60px] h-[50px] m-2 rounded-lg cursor-pointer" onClick={() => setImage(image)} />
            ))}
         </div>
            <img src={image} alt="image" className="w-full h-[220px] sm:h-[350px] sm:w-[400px] m-2 rounded-lg" />
         </div>
         <div className="product_body p-3">
           <h2 className="lg:text-3xl text-2xl md:text-xl text-white font-serif font-bold">{title.length > 25 ? title.slice(0, 25) + '....' : title}</h2>
      
         <div className="flex justify-center space-x-3 items-center mt-3 relative">
         <button onClick={() => setShow(!show)} className="h-14 w-14 rounded-full text-2xl bg-slate-200 text-black p-2 font-bold hover:bg-slate-300 disabled:bg-gray-300 disabled:text-black"><i className="fa-solid fa-eye"></i></button>
         <button onClick={() => handleCartItems(items)} className="h-14 w-14 rounded-full text-2xl bg-yellow-500 text-black py-3 font-bold hover:bg-yellow-300 disabled:bg-gray-300 disabled:text-black" disabled={isAdded ? true : false}>{isAdded ? <i className="fa-solid fa-cart-shopping"></i> : <i className="fa-solid fa-cart-plus"></i>}</button>
         </div>
         </div>
         {
          show &&
          <Modal item={items} show={show} setShow={ setShow}/>
         }
    </div>
  )
}

export default Products
