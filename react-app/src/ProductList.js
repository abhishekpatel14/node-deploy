import { useState, useEffect } from "react";
import Product from "./Product";
// import ProductsData from "./data";
import axios from "axios";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const res = await axios.get('/products');
    console.log(res.data);
    setProducts(res.data);
  }

  const handleClick = async (id) => {
    const res  = await axios.delete(`/products/${id}`);
    console.log(res.data);
    if(res.data._id){
      setProducts(products.filter( p => p._id !== res.data._id));
    }
  }

  useEffect(()=>{
      getProducts();
  },[]);


  return (
    <>
      {products.map((product, index) => 
        <Product {...product} key={index} handleClick={handleClick} />
      )}
    </>
  );
};

export default ProductList;
