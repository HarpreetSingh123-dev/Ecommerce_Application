const express = require('express');
const { getAllProducts , createProduct, updateProduct, deleteProduct, getParticularProductDetails } = require('../Controllers/productController');
const {isAuthenticatedUser , authorizedRoles} = require('../Middleware/auth');

const router = express.Router();


router.route("/products").get( isAuthenticatedUser , getAllProducts)
router.route("/product/new").post( isAuthenticatedUser , authorizedRoles("admin"), createProduct)
router.route('/product/:id').put(isAuthenticatedUser ,authorizedRoles("admin") , updateProduct)
                            .delete(isAuthenticatedUser ,authorizedRoles("admin") , deleteProduct)
                            .get(getParticularProductDetails)


module.exports = router


