var userService=require("../services/userservices");
var gettoken=require("../Middleware/token");
var sendmail=require("../Middleware/sendmail");

exports.registration = (req, res) => {
    try {
        console.log("controller",req.body);
        var responseResult = {} 
        userService.registration(req.body, (err, result) => {
            
            if (err) {
                responseResult.success = false;
                responseResult.error = err;
                res.status(500).send(responseResult);
            }
            else {
                responseResult.success = true;
                responseResult.result = result;
                res.status(200).send(responseResult)
            }
        });
    } catch (err) {
        res.send(err);
    }
}
exports.login = (req, res) => {
    try {
        var responseResult = {};
        userService.login(req.body, (err, result) => {
            if (err) {
                responseResult.success = false;
                responseResult.error = err;
                res.status(500).send(responseResult);
            }
            else {
                responseResult.success = true;
                responseResult.result = result;
                res.status(200).send(responseResult)
            }
        });
    } catch (err) {
        res.send(err);
    }
}
exports.forgotPassword=(req,res)=>{
    try{
        var responseresult={};
        userservices.forgotpass(req.body,(err,result)=>{
            if(err) {
                responseresult.success=false;
                responseresult.result=err;
                res.status(500).send(responseresult);
            }
            else {
                responseresult.success=true;
                responseresult.result=reult;
                const payload={
                    user_id: responseresult.result._id
                }
                console.log(payload);
                const obj=gettoken.generateToken(payload);
                console.log(obj);
                sendmail.sendEmailFunction(url,req.body.email);
                //Send email using this token generated
                res.status(200).send(url);

            }
        })
    }catch(err){
        res.send(err);
    }
}

exports.resetPassword=(req,res)=>{
    try {
    var responseresult={};
    userservices.resetpass(req.body,(err,result)=>{
        if(err) {
            responseresult.success="false";
            responseresult.error=err;
            res.status(500).send(responseresult);
        }
        else {
            responseresult.success="true";
            responseresult.result=result;
            res.status(200).send(responseresult);
        }

    });
}catch(err) {
    res.send(err);
}
}


    

