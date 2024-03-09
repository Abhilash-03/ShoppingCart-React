import { useContext } from "react"
import CartContext from "../context/CartContext"

const SearchBar = () => {
    const { handleSearch, setSearch, search } = useContext(CartContext)

  return (
    <form onSubmit={handleSearch} className="search relative w-1/3 flex items-center">
    <input type="text" placeholder="Search Clothes, Pant, Jeans etc." className="text-lg h-12 rounded-full w-full px-4 outline-none hover:bg-slate-800 hover:text-gray-300 focus:bg-slate-800 focus:text-gray-300 text-black" onChange={(e) => setSearch(e.target.value)} value={search} />
    <button onClick={handleSearch} className="h-7 w-7 hover:bg-yellow-300 rounded-full text-lg absolute right-0 hidden sm:inline ml-1">🔍</button>
  </form>
  ) 
}

export default SearchBar
