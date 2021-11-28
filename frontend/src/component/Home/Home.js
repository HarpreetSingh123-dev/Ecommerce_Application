import React, { Fragment } from 'react';
import { CgMouse } from 'react-icons/all';
import Product from './Product.js'
import MetaData from '../layout/MetaData'
import './Home.css'


const product = {

    name:"Blue Tshirt",
    images:[{url:"https://th.bing.com/th/id/OIP.kGmWbZC0vSW41YpvveseUgHaLH?pid=ImgDet&rs=1"}],
    price:"$3000",
    _id:"Harpreet"

}

const Home = () => {
    return (
        
            <Fragment>

              <MetaData title="Ecommerce"></MetaData>  
              <div className="banner">
               <p>Welcome to Ecommerce</p>
               <h1>FIND AMAZING PRODUCTS BELOW</h1>

               <a href="#container">
                 
                 <button>
                  Scroll <CgMouse></CgMouse>    
                 </button>    
                   
               </a> 
              </div>
               <h2 className="homeHeading">Featured Products</h2>

               <div className="container" id="container">

                  <Product product={product}></Product>
                  <Product product={product}></Product>
                  <Product product={product}></Product>
                  <Product product={product}></Product>
                  <Product product={product}></Product>
                  <Product product={product}></Product>
                  <Product product={product}></Product>
                  <Product product={product}></Product>
               
               </div>
            </Fragment>
    );
};

export default Home;