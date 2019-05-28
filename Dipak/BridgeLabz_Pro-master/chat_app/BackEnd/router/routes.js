var express=require("express");
var router=express.Router();
var userController=require("../controller/usercontroller");
var auth=require("../authentication/index");

router.post('/login', userController.login);
router.post('/registration', userController.registration);
router.post('/forgotpassword',userController.forgotPassword);
router.post('/resetPassword',auth.checkToken,userController.resetPassword);
module.exports=router;