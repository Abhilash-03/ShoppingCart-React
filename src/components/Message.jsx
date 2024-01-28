import { useContext } from 'react'
import CartContext from '../context/CartContext'

const Message = () => {
    const { msg } = useContext(CartContext);

  return (
    <div className='h-screen flex justify-center items-center'>
    { msg ?
    <div className="message space-y-5">
      <h1 className="h-full font-serif font-bold w-full flex justify-center items-center text-3xl  text-white">{msg}</h1>
      <img src="https://img.freepik.com/free-vector/no-time-concept-illustration_114360-4209.jpg?w=740&t=st=1706423040~exp=1706423640~hmac=db8a77344fc9be14a3b2d75d4386af478d7db7a9326b4821635c345527b16f85" alt="image" className='w-[400px] h-[350px] rounded-xl' />
      </div>
      :
      <div className="message space-y-4 space-y-5">
      <h1 className="h-full font-serif font-bold w-full flex justify-center items-center text-3xl text-white">Cart is empty!!!</h1>
      <img src="https://img.freepik.com/free-vector/product-hunt-concept-illustration_114360-6006.jpg?w=740&t=st=1706423531~exp=1706424131~hmac=b301deb9d214013c25f58535d2b833ebaeaee84852900d59f5cd3846b6aa19d8" alt="image" className='w-[400px] h-[300px] rounded-xl'  />
      </div>
      }
    </div>
  )
}

export default Message
