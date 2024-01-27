import { createContext, useState } from "react";
import LoadingBar from "react-top-loading-bar";

const CartContext = createContext({});

export const CartProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [progress, setProgress] = useState(0);
    const [page, setPage] = useState(0);
    const [cartItems, setCardItems] = useState([]);
    const [category, setCategory] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [msg, setMsg] = useState('');
    const perPage = 10;

    const fetchData = async() => {
        setProgress(10);
        try {
           const response =  await fetch(`https://api.escuelajs.co/api/v1/products?offset=${page}&limit=${perPage}`);
           setProgress(40);
           const data = await response.json();
           setProgress(70);
           setProducts(data);
           setProgress(100);
        } catch (error) {
          console.log(error.message);
        }
      }

      const fetchMoreData = () => {
        setPage(page + perPage);
        setProgress(50);
        setTimeout(() => {
          fetch(`https://api.escuelajs.co/api/v1/products?offset=${page + perPage}&limit=${perPage}`)
          .then((res) => res.json())
          .then((data) => setProducts(products.concat(data)))
          .catch((err) => console.log(err.message));
          setProgress(100);
    
        }, 1200);
      }
      
      const handleCartItems = (items) => {
        setCardItems([...cartItems, items]);
        setTotalPrice(totalPrice + (items.price * 1));
      }
    
      const handleRemoveItem = (items, qty) => {
        const remove = cartItems.filter(item => item.id !== items.id);
        setCardItems( [...remove] );
        setTotalPrice(totalPrice - (items.price * qty));

       }

       const getAllCategory = async() => {
        try {
          const response =  await fetch(`https://api.escuelajs.co/api/v1/categories`);
          const data = await response.json();
          setCategory(data);
       } catch (error) {
         console.log(error.message);
       }
       }

       const isExistedCartItem = (cartItem) => {
          return cartItems.find(item => item.id === cartItem.id);
       }

       const handleBuyNow = () => {
         setTotalPrice(0);
         setCardItems([]);
         setMsg('Thanks for shopping!!')
       }

    return(
      <>
      
        <CartContext.Provider value={{
          products, fetchData, fetchMoreData, handleCartItems, handleRemoveItem, progress, cartItems,
          getAllCategory, category, isExistedCartItem, totalPrice, setTotalPrice, handleBuyNow, msg, setMsg
        }}>
             <LoadingBar 
              color="red"
              progress={progress}
              height={5}
            />
            { children }
        </CartContext.Provider>
        </>
    )
}

export default CartContext;