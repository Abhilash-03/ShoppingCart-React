import { useContext, useState } from "react"
import { Link, useLocation } from "react-router-dom"
import CartContext from "../context/CartContext"

const Navbar = () => {
  const { cartItems } = useContext(CartContext);
  const location = useLocation();
  const [isMobileMenu, setIsMobileMenu] = useState(false);
  
  return (
    <nav className="h-14 w-full bg-gray-700 text-white flex justify-between px-5 items-center sticky top-0 z-10">
      <Link to='/' className="hover:text-red-400 "><h1 className="text-3xl font-bold">Shopping<span className="text-yellow-400 font-serif">Cart</span></h1></Link>
      <div className="flex justify-center items-center space-x-2">
      <ul className="font-bold text-xl lg:flex hidden space-x-2 font-serif text-white">
      <Link to='/'>
        <li className={`${location.pathname === '/' ? "border-b-2 border-yellow-400 text-white" : 'text-yellow-400' }  hover:border-b-2 hover:border-yellow-400`}>Home</li>
        </Link>
      <Link to='/category'>
      <li className={`${location.pathname === '/category' ? "border-b-2 border-yellow-400 text-white" : 'text-yellow-400' }  hover:border-b-2 hover:border-yellow-400 `}>Category</li>
        </Link>
      </ul>
     <Link to='/cart/products'><button className="bg-black text-white p-2 h-12 w-12 font-bold text-2xl rounded-full ml-4 hover:bg-slate-600"><i className="fa-solid fa-cart-plus"></i> <span className="absolute bg-teal-500 rounded-full h-5 w-5 text-sm top-1 text-black font-serif">{cartItems.length}</span></button></Link>
     <div className="hmicon px-3 text-2xl block lg:hidden" onClick={() => setIsMobileMenu(!isMobileMenu)}>
     <i className="fa-solid fa-bars cursor-pointer"></i>
     </div>
     </div>

{ isMobileMenu &&
     <ul className="absolute right-0 -bottom-20 top-14 bg-black text-white p-3 font-bold md:text-xl text-sm h-screen w-1/4 block lg:hidden transition-all text-center font-serif">
     <Link to='/'>
        <li className={`${location.pathname === '/' ? "bg-gray-600 rounded-xl text-white" : 'text-yellow-400' }  hover:border-b-2 hover:border-yellow-400 my-3`}>Home</li>
        </Link>
      <Link to='/category'>
      <li  className={`${location.pathname === '/category' ? "bg-gray-600 rounded-xl text-white" : 'text-yellow-400'}  hover:border-b-2 hover:border-yellow-400`}>Category</li>
        </Link>
     </ul>
}
    </nav>
  )
}

export default Navbar
