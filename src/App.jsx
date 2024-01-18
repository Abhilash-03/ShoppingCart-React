import { useEffect, useState } from "react"
import InfiniteScroll from "react-infinite-scroll-component";
import Products from "./Products";
import LoadingBar from "react-top-loading-bar";


function App() {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(0);
  const [progress, setProgress] = useState(0);
  const perPage = 10;
  let totalResult = 39;

  const fetchData = async() => {
    setProgress(10);
    try {
       const response =  await fetch(`https://api.escuelajs.co/api/v1/products?offset=${page}&limit=${perPage}`)
       setProgress(40);
       const data = await response.json();
       setProgress(70);
       setProducts(data);
       setProgress(100);

    } catch (error) {
      console.log(error.message);
    }
  }

  useEffect(() => {
    fetchData();
  }, [])


  const fetchMoreData = () => {
    setPage(page + perPage);
    setProgress(50);
    setTimeout(() => {
      fetch(`https://api.escuelajs.co/api/v1/products?offset=${page + perPage}&limit=${perPage}`)
      .then((res) => res.json())
      .then((data) => setProducts(products.concat(data))
        )
      .catch((err) => console.log(err.message));
      setProgress(100);

    }, 1200);
 
  }

  // console.table([page, totalResult]);
  
  return (
    <>
     <LoadingBar 
      color="red"
      progress={progress}
      height={5}
     />

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
