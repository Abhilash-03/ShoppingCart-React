import { useContext, useEffect } from "react";
import CartItems from "./CartItems";
import CartContext from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartItems, totalPrice, handleBuyNow, msg, setMsg } = useContext(CartContext);
  const navigate = useNavigate();

  useEffect(() => {
    if(cartItems.length === 0){
      setTimeout(() => {
        setMsg('');
        navigate('/')
      }, 5200);
    }
  }, [navigate, cartItems, setMsg])

  return (
    <>
    <ul className="p-3 h-full w-full overflow-auto mb-6">
        { !msg && cartItems.length > 0 ?
            cartItems.map(item => (
                <CartItems key={item.id} item={item} />
            )) 
            : <h1 className="h-screen font-serif font-bold w-full flex justify-center items-center text-3xl  text-white">{msg || 'Cart is Empty!'}</h1>
        }
    </ul>
   
  { cartItems.length > 0 &&
    <div className="totalPrice fixed bottom-0 left-0 right-0 text-2xl font-serif font-bold bg-gray-600 text-black py-2 flex items-center justify-center space-x-4">
       <h1 className="text-center">Total Price: <span className="text-white text-3xl">₹{totalPrice}</span></h1>
       <button className="bg-gray-800 text-white rounded-lg p-2 text-sm hover:bg-slate-400 hover:text-black" onClick={handleBuyNow}>Buy now</button>
    </div>
    }
    </>
  )
}

export default Cart
