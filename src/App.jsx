import { useEffect, useState } from "react"
import InfiniteScroll from "react-infinite-scroll-component";
import Products from "./Products";


function App() {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(0);
  const perPage = 10;
  let totalResult = 39;

  const fetchData = () => {
      fetch(`https://api.escuelajs.co/api/v1/products?offset=${page}&limit=${perPage}`)
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.log(err.message));

  }

  useEffect(() => {
    fetchData();
  }, [])

  const fetchMoreData = () => {
    setPage(page + perPage);
    setTimeout(() => {
      fetch(`https://api.escuelajs.co/api/v1/products?offset=${page + perPage}&limit=${perPage}`)
      .then((res) => res.json())
      .then((data) => setProducts(products.concat(data))
        )
      .catch((err) => console.log(err.message));

    }, 1200);
 
  }

  // console.table([page, totalResult]);
  
  return (
    <>
     <main className="app">
      <InfiniteScroll
       dataLength={products.length}
       next={fetchMoreData}
       hasMore={products.length !== totalResult}
       loader={<h4>Loading...</h4>}
       endMessage={
        <p style={{ textAlign: 'center', color: 'white' }}>
          <b>No more data!!</b>
        </p>
      }
      >
       {
        products.map(items => (
          <Products key={items.id} items={items} />
        ))
       }
       </InfiniteScroll>
     </main>
 
    </>
  )
}

export default App
