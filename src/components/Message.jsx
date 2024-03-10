import { useContext } from 'react'
import CartContext from '../context/CartContext'

const Message = () => {
    const { msg } = useContext(CartContext);

  return (
    <div className='h-screen flex justify-center items-center'>
    { msg ?
    <div className="message space-y-5">
      <h1 className="h-full font-serif font-bold w-full flex justify-center items-center text-3xl  text-white">{msg}</h1>
      <img src="https://cdni.iconscout.com/illustration/premium/thumb/thank-you-for-shopping-5392725-4528726.png" alt="image" className='w-[400px] h-[350px] rounded-xl' />
      </div>
      :
      <div className="message space-y-5">
      <h1 className="h-full font-serif font-bold w-full flex justify-center items-center text-3xl text-white">Cart is empty!!!</h1>
      <img src="https://cdni.iconscout.com/illustration/premium/thumb/your-cart-is-empty-2161427-1815069.png" alt="image" className='w-[400px] h-[300px] rounded-xl'  />
      </div>
      }
    </div>
  )
}

export default Message
