import { useState } from "react";

const Products = ({ items }) => {
    const  { title, price, description, images, category } = items;
    const [show, setShow] = useState(false);

  return (
    <div className="product card">
         <div className="image">
          {  images.map((image, idx) => (
            <img key={idx} src={image} alt='image' height={100} width={100} />
            ))}
            
         </div>
         <div className="heading">
           <h2>{title}</h2>
         </div>
     { show &&
       <article>
         <div className="product_body">
         
             <p>Price: ${price}</p>
             <p>Description: ${description}</p>
         </div>
         <div className="cat">
            <h3>{category.name}</h3>
            <img src={category.image} alt={category.name} height={100} width={100} />
            <p>Created: {category.creationAt.slice(0, 10)}</p>
         </div>
         </article>
         }
         <button onClick={() => setShow(!show)}>{show ? 'Hide' : "Show"}</button>
    </div>
  )
}

export default Products
