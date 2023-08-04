import React from 'react'
import p from "../products.json";
const Product = () => {
  const prod =shuffleArray(p.products);
  return (
    <>
      <div className="flex flex-col" style={{ height: "100vh",}}>
        <h1 className='text-white '>Products:</h1>
        <div className='flex flex-wrap justify-center items-center p-5 h-full w-full gap-5 mt-8'>
        {prod.map((product) => {
          return <ProductDiv key={product.id} {...product} />
        })}  
        </div>
      </div>
      </>
  )
}
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
const ProductDiv = ({title,description,price,thumbnail,category }) => {
  return (<div class="card w-96 bg-base-100 shadow-xl image-full" style={{
    height: "300px",
    width: "300px",
  }}>
    <figure><img src={thumbnail} alt="Shoes" /></figure>
    <div class="card-body" style={{
      padding: "15px",
      height: "100%",
    }}>
      <small class="text-md flex justify-between items-center">{title}
       <div class="badge badge-warning p-4">{category}</div>
      </small>
      
      <span><p>
        {description.length > 50 ? description.slice(0, 50) : description}</p></span>
      <div class="card-bottom justify-between items-center">
        <div class="badge badge-ghost text-white">${price}</div>
        <button class="btn btn-primary">Buy Now</button>
      </div>
    </div>
  </div>);
      
}
export default Product