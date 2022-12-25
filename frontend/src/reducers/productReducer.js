import { 
    
       ALL_PRODUCT_REQUEST , 
       ALL_PRODUCT_SUCCESS , 
       ALL_PRODUCT_FAIL , 
 
       PRODUCT_DETAILS_REQUEST,
       PRODUCT_DETAILS_SUCCESS,
       PRODUCT_DETAILS_FAIL,

       CLEAR_ERRORS } from '../constants/productConstants'

/* BELOW REDUCER IS FOR FETCHING PRODUCTS FROM BACKENED ON INITIAL RENDER */

export const productReducer = (state = { products:[] } , action)=>{

  switch(action.type){

       case ALL_PRODUCT_REQUEST:

            return {
                   
                 loading:true,
                 products:[]

            }
       

       case ALL_PRODUCT_SUCCESS:
 
            return {
              
                 loading:false,
                 products:action.payload.product,
                 productsCount:action.payload.productCount

            }
     

       case ALL_PRODUCT_FAIL:

            return {
                
                 loading:false,
                 error:action.payload
 
            }

        case CLEAR_ERRORS:
            
            return {

                 ...state,
                 error:null

            }

        default:
            return state    

     }

}


/*BELOW IS REDUCER TO FETCH PRODUCT DETAILS*/


export const productDetailsReducer = (state = { product: {} } , action)=>{

     switch(action.type){
   
          case PRODUCT_DETAILS_REQUEST:
   
               return {
                      
                    loading:true,
                    ...state,
   
               }
          
   
          case PRODUCT_DETAILS_SUCCESS:
    
               return {
                 
                    loading:false,
                    products:action.payload
   
               }
        
   
          case PRODUCT_DETAILS_FAIL:
   
               return {
                   
                    loading:false,
                    error:action.payload
    
               }
   
           case CLEAR_ERRORS:
               
               return {
   
                    ...state,
                    error:null
   
               }
   
           default:
               return state    
   
        }
   
   }