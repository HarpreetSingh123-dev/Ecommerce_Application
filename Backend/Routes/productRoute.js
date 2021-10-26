const express = require('express');
const { getAllProducts , createProduct, updateProduct, deleteProduct, getParticularProductDetails } = require('../Controllers/productController');
const {isAuthenticatedUser , authorizedRoles} = require('../Middleware/auth');

const router = express.Router();


router.route("/products").get( isAuthenticatedUser , getAllProducts)
router.route("/admin/product/new").post( isAuthenticatedUser , authorizedRoles("admin"), createProduct)
router.route('/admin/product/:id').put(isAuthenticatedUser ,authorizedRoles("admin") , updateProduct)
                            .delete(isAuthenticatedUser ,authorizedRoles("admin") , deleteProduct)
                           

router.route('/product/:id').get(getParticularProductDetails)
module.exports = router


