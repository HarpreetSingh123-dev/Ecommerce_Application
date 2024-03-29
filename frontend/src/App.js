import './App.css';
import Header from './component/layout/Header/Header.js'
import Home from './component/Home/Home.js'
import ProductDetails  from './component/Product/ProductDetails'
import Footer from './component/layout/Footer/Footer.js'

import {BrowserRouter as Router , Route} from 'react-router-dom'
import webFont from 'webfontloader'
import React from 'react';



function App() {
  
  React.useEffect(()=>{

    webFont.load({
    
       google:{
         families:['Roboto' , 'Droid Sans' , 'Chilanka']
       }
    
    })
    
    },[])



  return <Router>
         
           <Header/>
         
           <Route exact path="/" component={Home}></Route>
           <Route exact path="/product/:id" component={ProductDetails}></Route>
           
           
           <Footer/>
          
                
          </Router>
  
}

export default App;
