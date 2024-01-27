import InfiniteScroll from "react-infinite-scroll-component"
import Products from "./Products"
import { useContext, useEffect } from "react"
import CartContext from "../context/CartContext"

const Home = () => {
  const { fetchData, fetchMoreData, products } = useContext(CartContext);
  let totalResult = 30;

  useEffect(() => {
    fetchData();
  }, [])

  return (
    <InfiniteScroll
        dataLength={products.length}
        next={fetchMoreData}
        hasMore={products.length !== totalResult}
        loader={<h4 className="text-center text-xl font-bold">Loading...</h4>}
        >
              <main className="app h-full w-full bg-gray-800 text-white flex flex-col md:flex-row flex-wrap justify-center items-center">
                {
                  products.map(items => (
                    <Products key={items.id} items={items} />
                  ))
                }
            </main>
        </InfiniteScroll>
  )
}

export default Home
