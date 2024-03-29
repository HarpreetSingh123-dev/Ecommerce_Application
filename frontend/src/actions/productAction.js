import axios from 'axios'

import { 
    
    ALL_PRODUCT_REQUEST , 
    ALL_PRODUCT_SUCCESS , 
    ALL_PRODUCT_FAIL , 

    PRODUCT_DETAILS_REQUEST,
    PRODUCT_DETAILS_SUCCESS,
    PRODUCT_DETAILS_FAIL,

    CLEAR_ERRORS } from '../constants/productConstants'

 
/*FOLLOWING ACTION IS USED TO DIPATCH ACTION OF GETTING PRODUCTS ON INITIAL RENDER*/    

export const getProduct = () => async (dispatch)=>{

    try{

        dispatch({type:ALL_PRODUCT_REQUEST})

        const {data} = await axios.get("/api/v1/products")

        console.log("fetched data below")
        console.log(data)

        dispatch({
 
           type:ALL_PRODUCT_SUCCESS,
           payload:data
        
        })

    } catch (error){

        console.log("in error block")
        console.log(error)
        dispatch({
            
            
            type:ALL_PRODUCT_FAIL,
            payload:error.response.data.message

        })

    }

}    


/*FOLLOWING ACTION IS DISPATCHED TO GET PRODUCTS DETAILS*/

export const getProductDetails = (id) => async (dispatch)=>{

    try{

        dispatch({type:PRODUCT_DETAILS_REQUEST})

        const {data} = await axios.get(`/api/v1/product/${id}`)

        console.log("fetched data below")
        console.log(data)

        dispatch({
 
           type:PRODUCT_DETAILS_SUCCESS,
           payload:data.product
        
        })

    } catch (error){

        console.log("in error block")
        console.log(error)
        dispatch({
            
            
            type:PRODUCT_DETAILS_FAIL,
            payload:error.response.data.message

        })

    }

}



// CLEARING ERRORS
export const clearErrors = () => async (dispatch) =>{

 dispatch({type:CLEAR_ERRORS})

}