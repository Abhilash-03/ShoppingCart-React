import { createContext, useReducer, useState } from "react";
import LoadingBar from "react-top-loading-bar";

const CartContext = createContext({});

const initialState = {
  cartProduct: []
} 

const cartReducer = (state, action) => {
  switch(action.type) {
    case 'ADD_PRODUCT':
      return {
        ...state,
        cartProduct: [...state.cartProduct, action.payload],
      }
      case 'UPDATE_QUANTITY': 
        return {
          ...state,
          cartProduct: state.cartProduct.map((item) => (
            item.id === action.payload.id ? {...item, quantity: action.payload.quantity} : item
          ))
        };
        case 'REMOVE_PRODUCT': 
          return {
            ...state,
            cartProduct: state.cartProduct.filter(product => product.id !== action.payload)
          }
        case 'CLEAR':
          return {
              ...state,
              cartProduct: []
          }
      default:
        return state;
  }
}


export const CartProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [progress, setProgress] = useState(0);
    const [page, setPage] = useState(0);
    const [category, setCategory] = useState([]);
    const [searchProducts, setSearchProducts] = useState([]);
    const [search, setSearch] = useState('');
    const [cartState, dispatch] = useReducer(cartReducer, initialState)
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
          return cartState.cartProduct.find(item => item.id === cartItem.id);
       }

       const handleBuyNow = () => {
         dispatch({type: 'CLEAR'})
         setMsg('Thanks for shopping!!')
       }
 
       const handleSearch = (e) => {
        e.preventDefault();
        const searchItem = products.filter(item => item.title.toLowerCase().includes(search));
        setSearchProducts(searchItem);
        setSearch('');
       }

    return(
      <>
      
        <CartContext.Provider value={{
          products, fetchData, fetchMoreData,  progress,
          getAllCategory, category, isExistedCartItem, handleBuyNow, msg, setMsg, handleSearch, setSearch, search, searchProducts, cartState, dispatch
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