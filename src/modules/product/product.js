import { useEffect, useState } from 'react'
import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Product = () => {
    const { id } = useParams ();

    const [product, setProduct] = useState({})
    
    
        useEffect(() => {
            const fetchProduct = async () => {
            const response = await fetch(`https://fakestoreapi.com/products/${id}`  )
            const data = await response.json()
            console.log(data)
            setProduct(data)
          }
          fetchProduct()
        }, [id]) 
       const navigate = useNavigate();
        const HandleCart = ((product,redirect) => {
          console.log(product)
          const cart =  JSON.parse(localStorage.getItem('cart')) || []
          const isProductExist = cart.find((item)=> item.id === product.id)
          if(isProductExist){
            const updateCart = cart.map(item => {
            if (item.id === product.id){
              return {
                ...item, 
                quantity: item.quantity + 1
              }
            }
          return item
        })
        localStorage.setItem('cart', JSON.stringify(updateCart))
          } else {
            localStorage.setItem('cart', JSON.stringify([...cart, {...product, quantity:1}]))
          }
          alert('Product added to Cart')
          if(redirect){
            navigate('/cart')
          }
        })

        if(!Object.keys(product).length > 0) return <div>Product Not Found</div>

        return (
        <section className="bg-white py-5">
  <div className="container">
    <div className="row">
      <div className="col-lg-6">
        <img src={product?.image} style={{height:"400px", width:"400px"}} alt="ecommerce" className="img-fluid rounded"/>
      </div>
      <div className="col-lg-6 mt-4 mt-lg-0">
        <h2 className="text-uppercase mb-2">{product?.category}</h2>
        <h1 className="mb-3">{product?.title}</h1>
        <div className="d-flex mb-3">
          <span className="mr-2 text-primary">
            <i className="bi bi-star-fill"></i>
            <i className="bi bi-star-fill"></i>
            <i className="bi bi-star-fill"></i>
            <i className="bi bi-star-fill"></i>
            <i className="bi bi-star"></i>
          </span>
          <span className="text-muted">4 Reviews</span>
        </div>
        <p className="mb-4">{product?.description}</p>
        <div className="mb-4">
          <div className="mr-2">
            <span className="mr-1">Color:</span>
            <button className="btn btn-outline-secondary btn-circle"></button>
            <button className="btn btn-outline-secondary btn-circle bg-gray-700"></button>
            <button className="btn btn-outline-secondary btn-circle bg-indigo-500"></button>
          </div>
          <div className="ml-3">
            <span className="mr-1">Size:</span>
            <select className="form-select">
              <option>SM</option>
              <option>M</option>
              <option>L</option>
              <option>XL</option>
            </select>
          </div>
        </div>
        <div className="d-flex justify-content-between align-items-center mb-4 pb-3 border-bottom">
          <span className="font-weight-bold h4 mb-0">${product?.price}</span>
          <button className="btn btn-primary ml-auto" onClick={() => HandleCart(product,true)}>Buy Now</button>
          <button className="btn btn-outline-dark ml-auto" onClick={() => HandleCart(product)}>Add to Cart</button>
          <button className="btn btn-light btn-circle ml-3">
            <i className="bi bi-heart"></i>
          </button>
        </div>
      </div>
    </div>
  </div>
</section>

    )
}
export default Product;