import React from 'react';
import playStore from '../../../Images/playstore.png'
import appStore from '../../../Images/Appstore.png'
import './Footer.css'

const Footer = () => {
    return (
        <footer id="footer">

           <div className="leftFooter">

               <h4>DOWNLOAD OUR APP</h4>
               <p>Download App for Android and IOS Mobile Phone</p>
               <img src={playStore} alt="playstore"></img>
               <img src={appStore} alt="Appstore"></img>

           </div>
 
           <div className="midFooter">
              
               <h1>Ecommerce</h1>
               <p>High Quality is Our First Priority</p>
               <p>Copyrights 2021 &copy; Harpreet Singh</p>

           </div>

           <div className="rightFooter">
             
              <h4>Follow Us</h4>
              <a href="">Instagram</a>
              <a href="">LinkedIn</a>
              <a href="">Facebook</a>

           </div>

        </footer>
    );
};

export default Footer;