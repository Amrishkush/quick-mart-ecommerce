
import { useEffect, useState } from 'react'
import Categories from '../../components/categories/categories'
import ProductsCard from '../../components/productsCard/productsCard'
//basically products page it is
const Products = () => {

    const [products, setProducts] = useState([])

useEffect(() => {
  const fetchProducts = async () => {
    const response = await fetch ("https://fakestoreapi.com/products" )
    const data = await response.json()
    console.log(data)
    setProducts(data);
  }
  fetchProducts()
}, [])

    return(
    <div>
    <h1 className='text-center m-4 text-decoration-underline' style={{fontSize:"600%"}}>Products</h1>
    {
        products.length > 0 ?
        <ProductsCard products = {products}/> :
        <div>Loading.....</div>
      }
    {/* <ProductsCard/> */}
    </div>
    )
}

export default Products