import React from 'react'
import ecommerce from "./ecommerce.webp"
import { Link } from 'react-router-dom'
const Contentcard = () => {
  return (
    <div className="row m-5">
        <div className="col-7 m-5">
            <h1>Before they sold out</h1>
            <p>Hurry up! Buy your favourite products. Sale is ON!</p>
            <Link to={"/products"} className='btn btn-warning m-2 p-2 fs-6'>Products</Link>
            <Link to={"/categories"} className='btn btn-warning m-2 p-2 fs-6'>Categories</Link>
        </div>
        <div className="col-4">
            <img className="img-fluid" src={ecommerce} alt="aa" style={{width:"100%", height: "100%"}}/>
        </div>
    </div>
  )
}

export default Contentcard