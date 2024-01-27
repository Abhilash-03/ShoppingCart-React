import {  useContext, useState } from "react";
import CartContext from "../context/CartContext";

const Products = ({ items }) => {
    const { title, price, description, images, category } = items;
    const [image, setImage] = useState(images[0]);
    const [show, setShow] = useState(false);
    const { handleCartItems, isExistedCartItem } = useContext(CartContext);

    const isAdded = isExistedCartItem(items);
  return (
    <div className="product md:w-3/5 lg:w-2/5 w-3/4 text-xl bg-slate-600 font-serif p-2 m-2 mt-4 rounded-xl overflow-hidden">
      <div className="flex flex-col xl:flex-row bg-gray-800 items-center justify-center  rounded-xl p-2 ">
         <div className="image flex sm:p-1 flex-wrap justify-center p-3  transition-all">
          {  images.map((image, idx) => (
            <img key={idx} src={image} alt='image' className="h-[100px] w-[130px] m-2 rounded-lg cursor-pointer" onClick={() => setImage(image)} />
            ))}
         </div>
            <img src={image} alt="image" className="h-[350px] w-[400px] m-2 rounded-lg" />
         </div>
         <div className="product_body p-3">
           <h2 className="lg:text-3xl text-2xl md:text-xl text-white font-serif font-bold">{!show && title.length > 25 ? title.slice(0, 25) + '....' : title}</h2>
     { show &&
       <article>
         <div className="m-2 font-serif">
             <p className="text-2xl font-bold">Price: <span className="text-4xl ">{price}</span></p>
             <p className=" font-serif my-2 text-2xl ">Description: <span className="text-xl">{description}</span></p>
         </div>
         <div className="cat">
            <h3 className="font-bold text-2xl text-yellow-400">{category.name}</h3>
            <img src={category.image} alt={category.name} className="rounded-lg my-2 w-2/5" />
            <p className="font-bold my-3">Created: {category.creationAt.slice(0, 10)}</p>
         </div>
          </article>
         }
      
         <div className="flex justify-center flex-col items-center mt-3 relative">
         <button onClick={() => setShow(!show)} className="w-2/4 rounded-lg bg-slate-400 text-black py-3 font-bold mt-2">{show ? 'Hide' : "Show"}</button>
         <button onClick={() => handleCartItems(items)} className="h-16 w-16 rounded-full text-2xl bg-yellow-500 text-black py-3 font-bold hover:bg-yellow-300 disabled:bg-gray-300 disabled:text-black absolute -top-28" disabled={isAdded ? true : false}>{isAdded ? <i className="fa-solid fa-cart-shopping"></i> : <i className="fa-solid fa-cart-plus"></i>}</button>
         </div>
         </div>
    </div>
  )
}

export default Products
