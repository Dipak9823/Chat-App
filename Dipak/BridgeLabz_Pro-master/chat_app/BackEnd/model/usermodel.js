const bcrypt=require('bcrypt'); 
const mongoose=require("mongoose");
const saltRounds = bcrypt.genSaltSync(10);
const schema=mongoose.Schema;

const UserSchema=new schema({
    FirstName:{
        type:String, require:[true,"FirstName Require"]
    },
    LastName: {
        type:String, require:[true,"LastName Require"]  
    },
    Email:{
        type:String, require:[true,"Email Require"]
    },
    Password:{
        type:String, require:[true,"Email Require"]
    }
});
function UserModel(){ };

const User=mongoose.model('myuser',UserSchema);


UserModel.prototype.addUser = (body, callback) => {

    console.log("UserModel",body);
    /**
     * Find the user by Email in database if user with same Email exists
     **/

    User.find({ "Email": body.Email }, (err, data) => {
        if (err) {
            console.log("Error in registration");
            callback(err);
        }
        else {
            if (data > 0) {
                console.log("Email already exists");
                callback("User already present");
            }
            else {
                /**
                 * Create hash value of user password
                 **/
                body.Password = bcrypt.hashSync(body.Password, saltRounds);
                var newUser = new User({
                    "FirstName": body.FirstName,
                    "LastName": body.LastName,
                    "Email": body.Email,
                    "Password": body.Password,
                })
                newUser.save((err, result) => {
                    if (err) {
                        console.log("Model not found");
                        callback(err);
                    } else {
                        console.log("Registered Successfully");
                        callback(null, result);
                    }
                })
            }
        }
    });
}

UserModel.prototype.login = (body, callback) => {
    console.log("model ", body.Password," ",body.Email);
    User.findOne({ "Email": body.Email}, (err, result) => {
        console.log("usermodel 1",result);
        if (err) {
            callback(err);
        }
        else if (result != null) {
            bcrypt.compare(body.Password, result.Password).then(function (res) {
                if (res) {
                    console.log("Login Succesfully");
                    callback(null, res);
                } else {
                    console.log("Incorrect password");
                    callback("Incorrect password");
                }
            });
        } else {
            console.log("invalid user");
            callback("invalid user");
        }
    });
}
UserModel.prototype.forgotPassword =(body,callback) =>{
    console.log(body.Email);
    User.findOne({"Email":body.Email},(err,result)=>{
        console.log(body.Email);
        if(err) {
            callback(err);
        }
        else {
            if(result!==null && body.email==result.email) {
                callback(null,result);
            }
            else {
                callback("inncorrect mail")
            }
        }
    });

}
UserModel.prototype.updatePassword = (req, callback) => {
    let newPassword = bcrypt.hashSync(req.body.Password, saltRounds);
    console.log('new pass bcrypt--', newPassword);
    user.updateOne({ _id: req.decoded.payload.user_id }, { Password: newPassword }, (err, result) => {
        if (err) {
            callback(err);
        }
        else {
            callback(null, result);
        }
    });
}

UserModel.prototype.getAllMsg=(data,callback)=>{
    user.find({},(err,result)=>{
        if(err){
            console.log(err);
            callback(err);
        }
        else{
            console.log("all users get successfully......");
            return callback(null,result)
        }
    })
}



module.exports= new UserModel();

