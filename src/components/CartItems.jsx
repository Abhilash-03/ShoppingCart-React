import { useContext, useState } from "react";
import CartContext from "../context/CartContext";

const CartItems = ({ item }) => {
    const [count, setCount] = useState(1);
    const { handleRemoveItem, totalPrice, setTotalPrice } = useContext(CartContext);

    const total = item.price;
    const handleAddQuantity = () => {
      setCount(count + 1);
      setTotalPrice(totalPrice + total);
    }

    const handleSubQuantity = () => {
      setCount(count - 1);
      setTotalPrice(totalPrice - total);
    }

  return (
    <li className="flex flex-col md:flex-row space-x-2 hover:ring-2 hover:scale-105 transition-all justify-between font-bold bg-gray-800 text-white lg:w-2/4 sm:w-3/4  m-auto p-3 rounded-xl my-3 relative">
    <div className="image">
        <img src={item.images} alt={item.title} className="md:h-[200px] md:w-[250px] w-full h-[170px] rounded-xl hover:scale-110 transition-all" />
    </div>
    <div className="item_body font-serif md:text-xl text-sm md:w-2/4">
        <h1 className="title text-lg md:text-xl">{item.title}</h1>
        <h3 className="mt-2 font-serif">Price: ₹{item.price}</h3>
        <div className="quantity md:mt-4 space-x-2">
          <span className="mr-4">Quantity:</span>
        <button onClick={handleSubQuantity} className="bg-red-500 hover:bg-red-300 text-white text-2xl  p-1 w-11 h-11 rounded-full disabled:bg-red-100 disabled:text-black" disabled={count > 1 ? false: true} >-</button>
            <span className="text-xl m-1">{count}</span>
        <button  onClick={handleAddQuantity} className="bg-teal-500 text-white text-2xl p-1 w-11 h-11 rounded-full hover:bg-teal-300">+</button>
    </div>
    <div className="quant_price md:mt-3">
      <h4><span>₹{ item.price }</span> x <span>{ count }</span> = <span>₹{ item.price * count }</span></h4>
    </div>
    <div className="rmvbtn font-sans">
    <button onClick={() => handleRemoveItem(item, count)} className="h-10 w-10 absolute -top-2 -right-3 rounded-full bg-gray-800 text-white p-1 font-bold hover:bg-gray-400">❌</button>
    </div>
    </div>

</li>
  )
}

export default CartItems
