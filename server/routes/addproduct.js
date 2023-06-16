const express=require('express');

const router=express.Router();

const productController=require('../controllers/product');
router.get("/addproduct",productController.showProducts);
router.post("/addproduct",productController.addProduct);
router.put("/addproduct/:prodId",productController.editProduct);
router.delete("/addproduct/:prodId",productController.deleteProduct);

module.exports=router;