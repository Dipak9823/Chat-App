var express=require("express");
var router=express.Router();
var userController=require("../controller/usercontroller");


router.post('/login', userController.login);
router.post('/registration', userController.registration);
router.post('/forgotpassword',userController.forgotPassword);
router.post('/resetPassword',userController.resetPassword);
module.exports=router;