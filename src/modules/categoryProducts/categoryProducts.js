import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ProductsCard from '../../components/productsCard/productsCard'

const CategoryProducts = () => {
    const {name} = useParams ()
    const [products, setProducts] = useState([])

useEffect(() => {
  const fetchProducts = async () => {
    const response = await fetch (`https://fakestoreapi.com/products/category/${name}` )
    const data = await response.json()
    console.log(data)
    setProducts(data);
  }
  fetchProducts()
}, [name])

if(products.length===0) return <div>Loading</div>
  return (
        <ProductsCard products={products}/>
  )
}

export default CategoryProducts