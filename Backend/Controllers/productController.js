const Product = require('../Models/productModel')
const ErrorHandler = require('../Utils/errorHandler')
const catchAsyncErrors = require('../Middleware/catchAsyncErrors')

//For creating new produc-->(fOR aDMIN oNLY)///////////////////////////////////
exports.createProduct  =   catchAsyncErrors( async (req , res , next ) =>{

    
    const product =  await Product.create(req.body)

        res.status(201).json({
            success:true,
            product
          })
      
} )
///////////////////////////////////////////////////////////



/// For getting all products///////////////////////////////// 
exports.getAllProducts =  catchAsyncErrors( async(req , res ) =>{

    const product = await Product.find()

     res.status(200).json({
         
        success:true,
        product
        
        })

})
/////////////////////////////////////////////////////////////

////Update product (admin only)/////////////////////////////

exports.updateProduct = catchAsyncErrors( async(req , res , next)=>{

    let product = await Product.findById(req.params.id)

    if(!product){

      return next( new ErrorHandler("Product Not Found" , 404))

    }

     product = await Product.findByIdAndUpdate( req.params.id , req.body , { new: true , 
                                                                             runValidators: true , 
                                                                             useFindAndModify:false
                                                                             
                                                                            })

      res.status(200).json({
          
          success:true,
          message:"Product successfully updated",
          product

      })                                                                      
     
})

///////////////////////////////////////////////////////////

////////Delete product (Admin only)///////////////////////

exports.deleteProduct = catchAsyncErrors( async(req , res , next ) =>{

  const product = await Product.findById(req.params.id);

  if(!product){

        return next( new ErrorHandler("Product Not Found" , 404))

     }

   await product.remove();

   res.status(200).json({
      success:true,
      message:"Product deleted successfully"

   })

})
////////////////////////////////////////////////////////////

////////////////Get particular product details/////////////
exports.getParticularProductDetails = catchAsyncErrors( async (req , res , next)=>{

    const product = await Product.findById(req.params.id);


  
    if(!product){
  
         return next( new ErrorHandler("Product Not Found" , 404))
  
       }

       res.status(200).json({
        success:true,
        product
  
     })

    
})