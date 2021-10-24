const ErrorHandler = require('../Utils/errorHandler')
const catchAsyncErrors = require('../Middleware/catchAsyncErrors')
const User = require('../Models/userModel')
const sendToken = require('../Utils/jwttoken')
const sendEmail  = require('../Utils/sendEmail.js')

// Regitering a user/////////////////////////////////////////////

exports.registerUser = catchAsyncErrors(async (req, res, next) => {

    const { name, email, password } = req.body

    const user = await User.create({

        name, email, password,

        avtar: {

            public_id: "this is a sample id",
            url: "profile pic url"
        }

    })

    sendToken(user , 201 , res )
})


////Login a user////////////////////////////////////////////////

exports.loginUser = catchAsyncErrors(async (req, res, next) => {


    const { email, password } = req.body


    // checking if user has given email and password both

    if (!email || !password) {

        return next(new ErrorHandler("Please enter email and password", 400))

    }

    const user =  await User.findOne({ email }).select("+password");
    console.log("user below")
    console.log(user)

    if (!user) {

        return next(new ErrorHandler("Invalid email or password",401))
    }

    const isPasswordMatched =  user.comparePassword(password) // i added await here

    if (!isPasswordMatched) {

        return next(new ErrorHandler("Invalid email or password",401))
    }

    // external created module used to create jwt and storing it in cookie

    sendToken(user , 200 , res )

})

/////////////Log out method/////////////////////////////////

exports.logout = catchAsyncErrors( async (req,res,next) =>{


    res.cookie('token' , null , {

        expires: new Date(Date.now()),
        httpOnly: true

    })


    res.status(200).json({

        success:true,
        message:"Logged out successfully"
    })


})


///////////Forgot password///////////////////////////////////////

exports.forgotPassword = catchAsyncErrors( async(req,res,next)=>{

    const user = await User.findOne({email:req.body.email})

    if(!user){

        return next( new ErrorHandler("User not found", 404))
    }

     const resetToken = user.getResetPasswordToken()

     await user.save({validateBeforeSave:false}) // saving user with temporary token password

     const resetPasswordUrl = `http://localhost/api/v1/password/reset/${resetToken}`

     const message = `Your password reset token is :- \n\n ${resetPasswordUrl} if you have not requested this link please ignore it`

     try{

        await sendEmail({

            email:user.email,
            subject:"Ecommerce password reset",
            message

        })

        res.status(200).json({
            success:true,
            message:`Email sent to ${user.email} successfully`
        })

     }

     catch(error){

        user.resetPasswordToken = undefined;
        user.resetPasswordExpire = undefined

        await user.save({validateBeforeSave:false})

        return next(new ErrorHandler(error.message , 500))
     }

})