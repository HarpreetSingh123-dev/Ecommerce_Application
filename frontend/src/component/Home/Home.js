import React, { Fragment , useEffect} from 'react';
import { CgMouse } from 'react-icons/all';
import Product from './Product.js'
import Loader from '../layout/Loader/Loader'
import MetaData from '../layout/MetaData'
import {getProduct} from '../../actions/productAction'
import { useSelector , useDispatch } from 'react-redux';
import {useAlert} from 'react-alert'
import './Home.css'

/*
const product = {

    name:"Blue Tshirt",
    images:[{url:"https://th.bing.com/th/id/OIP.kGmWbZC0vSW41YpvveseUgHaLH?pid=ImgDet&rs=1"}],
    price:"$3000",
    _id:"Harpreet"

}*/

const Home = () => {

  const alert = useAlert()
  const dispatch = useDispatch()// used to dispatch actions
  const {loading , products , productsCount , error} = useSelector( state => state.products)// used to get state from reducer

  useEffect(()=>{

    if(error){
  
       return alert.error(error)
          
    }

    dispatch(getProduct())

  },[dispatch, error])


    return (
        
            <Fragment>
            
              {loading ?  (

                <Loader></Loader>

              ):  <Fragment>

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

                  {products && products.map( product => (

                     <Product product={product} ></Product>
                  ))}
               </div>
            </Fragment>   }


            </Fragment>
    );
};

export default Home;