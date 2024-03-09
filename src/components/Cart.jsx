import { useContext, useEffect } from "react";
import CartItems from "./CartItems";
import CartContext from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import Message from "./Message";

const Cart = () => {
  const { handleBuyNow, setMsg, cartState } = useContext(CartContext);
  const navigate = useNavigate();
  useEffect(() => {
    if(cartState.cartProduct.length === 0){
      setTimeout(() => {
        setMsg('');
        navigate('/')
      }, 3200);
    }

  }, [navigate, cartState, setMsg])

  const totalAmount = cartState.cartProduct.reduce((total, item) => (
      total + (item.price * item.quantity)
  ), 0)


  return (
    <>
    <ul className="p-3 mb-6">
        {cartState.cartProduct.length > 0 ?
            cartState.cartProduct.map(item => (
                <CartItems key={item.id} item={item}  />
            )) 
            : <Message />
        }
    </ul>
   
  { cartState.cartProduct.length > 0 &&
    <div className="totalPrice fixed bottom-0 left-0 right-0 text-2xl font-serif font-bold bg-gray-600 text-black py-2 flex items-center justify-center space-x-4">
       <h1 className="text-center">Total Price: <span className="text-white text-3xl">₹{totalAmount }</span></h1>
       <button className="bg-gray-800 text-white rounded-lg p-2 text-sm hover:bg-slate-400 hover:text-black" onClick={handleBuyNow}>Buy now</button>
    </div>
    }
    </>
  )
}

export default Cart
