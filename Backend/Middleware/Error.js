const ErrorHandler = require("./../Utils/errorHandler")


module.exports = (err , req , res , next ) =>{

   err.statusCode = err.statusCode || 500
   err.message = err.message || "Internal server error"


  //Wrong mongodb id////////////////////////////////////////////// 
   if(err.name === "CastError"){

     const message = `Resource not found, Invalid ${err.path}`
     err = new ErrorHandler(message , 404)

   }
 //////////////////////////////////////////////////////////////

   res.status(err.statusCode).json({

      success:false,
      message: err.message,
      //err:err

   })


}