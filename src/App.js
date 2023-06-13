import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Header from './components/header/header';
import Home from './components/home/home';
import {Routes, Route} from "react-router-dom"
import Footer from './components/footer/footer';
import Product from './modules/product/product';
import Products from './modules/products/products';
import CategoryProducts from './modules/categoryProducts/categoryProducts';
import Cart from './modules/cart/cart';
import Categories from './components/categories/categories';

function App() {
  return (
    <div className="App">
          <Header/>
          <Routes>
            <Route path= "/" element= {<Home/>}/>
            <Route path= "/products/:id"  element = {<Product/>}/>
            <Route path= "/products/" element = {<Products/>}/>
            <Route path= "/categories/:name"  element= {<CategoryProducts/>}/>
            <Route path= "cart" element={<Cart/>}/>
            <Route path= "/categories/" element= {<Categories/>}/>
          </Routes>
           <Footer/>
    </div>
  );
}

export default App;
