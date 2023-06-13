import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import shoppingCart from './shoppingCart.png'

const navigations = [
  { name: 'Home', path: '/' },

  { name: 'Products', path: '/products' },

  { name: 'About', path: '/about' },

  { name: 'Contact', path: '/contact' },
];

const Header = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-light sticky-top'>
      <Link to ={'/'} className='navbar-brand mx-5' href='google.com'>
        <h1 className='text-black fs-1'>QuickMart_</h1>
      </Link>

      <button
        className='navbar-toggler'
        type='button'
        data-toggle='collapse'
        data-target='#navbarSupportedContent'
        aria-controls='navbarSupportedContent'
        aria-expanded='false'
        aria-label='Toggle navigation'
      >
        <span className='navbar-toggler-icon'></span>
      </button>

      <div
        className='collapse navbar-collapse justify-content-end'
        id='navbarSupportedContent'
      >
        <ul className='navbar-nav'>
          {navigations.map((navigation) => {
            return (
              <li className='nav-item active p-3' key={navigation.name}>
                <Link
                  to={navigation.path}
                  className='nav-link text-black-50 fs-6 btn-primary'
                >
                  {navigation.name}
                </Link>
              </li>
            )
          })}
        </ul>
        <Link to = {'/cart'} className='btn btn-success bg-warning rounded-3 m-5 my-2 my-sm-0 pr-2'>
          <img src= {shoppingCart} style={{height:"32px", width: "32px"}} alt="shopping-cart" /> <span className='fs-4 pr-2 text-dark m-auto'>Go to Cart</span>
        </Link>
      </div>
    </nav>
  );
};

export default Header;
