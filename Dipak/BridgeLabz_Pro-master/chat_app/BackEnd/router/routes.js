var express=require("express");
var router=express.Router();
var userController=require("../controller/usercontroller");
var auth=require("../authentication/index");
var chatController=require("../controller/chatController");

router.post('/login', userController.login);
router.post('/registration', userController.registration);
router.post('/forgotpassword',userController.forgotPassword);
router.post('/resetPassword',auth.checkToken,userController.resetPassword);
router.post("/dashboard",chatController.saveMessage)
router.post("/getMsg",chatController.chat)
router.post("/getAllUsers",userController.allUsers)
module.exports=router;