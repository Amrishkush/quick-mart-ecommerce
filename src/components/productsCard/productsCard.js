import React from 'react';
import { Link } from 'react-router-dom';

const ProductsCard = ({ products = [] }) => {
  return (
    <div className='card-group'>
      <div className='row m-3'>
        {products.map((product) => {
          console.log("product" , product)
          const {id, title, description, category, image, price, rating} = product;   {/* using this we have to pass only {id} not {product.id} both are correct */}
          return (
            <div className='col-md-3' key= {id}>
              <Link to={`/products/${id}`} className='card m-2  p-3' style={{height: "360px", width: "300px", objectFit:'contain'}} >
                 <img className='card-img-top m-auto' style={{height: "160px", width: "144px",objectFit:'contain'}} src={image} alt={title} />   {/* direct likh paa rhe hai hm log kyunki same const upar mane hue h nahi to product.title aise likhna padta name api me parameter me same hona chaiye */}
                <div className='card-body'>
                 <h6 className='fs-6 text-uppercase'>{category}</h6>
                  <h5 className='card-title fs-6'>{title}</h5>
                  <p className='card-text'>
                    ${price}
                  </p>
                </div>
                {/* <div className='card-footer'>
                  <small className='text-muted'>Last updated 3 mins ago</small>
                </div> */}
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductsCard;
