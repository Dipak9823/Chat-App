var express=require("express");
var router=express.Router();
var userController=require("../controller/usercontroller");


router.post('/login', userController.login);
router.post('/registration', userController.registration);
//router.post('/updatepassword',userController.updatepassword);
module.exports=router;