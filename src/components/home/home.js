import React, { useEffect, useState } from 'react';
import Contentcard from '../../modules/contentcard/contentcard';
import ProductsCard from '../productsCard/productsCard';
import StatsCard from '../statscard/statscard';
import Categories from '../categories/categories';

const Home = () => {

  const [products, setProducts] = useState([])

useEffect(() => {
  const fetchProducts = async () => {
    const response = await fetch ("https://fakestoreapi.com/products?limit=8" )
    const data = await response.json()
    console.log(data)
    setProducts(data);
  }
  fetchProducts()
}, [])



  return (
    <>
      <Contentcard />
      <Categories/>
      <div>
      <h6 className='text-center fs-1 display-6'>Products</h6>
      <h2 className='text-center display-6 fw-bold '>Most Popular Products</h2>
      </div> 
      {
        products.length > 0 ?
        <ProductsCard products = {products}/> :
        <div>Loading.....</div>
      }
      {/* <ProductsCard /> */}
      <StatsCard/>
      
    </>
  );
};

export default Home;
