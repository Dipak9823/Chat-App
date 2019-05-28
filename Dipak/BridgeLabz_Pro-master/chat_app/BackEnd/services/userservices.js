const usermodel=require('../model/usermodel');

exports.login=(data,callback)=> {
     try{
         console.log("services use data"+data);
         usermodel.login(data,(err,result)=>{
             if(err) {
                console.log("Service error");                 
                callback(err);
             }

             else {
                console.log("in service");
                callback(null,result);
             }
         })
     }catch(error) {
         callback.send(error);
     }
}

exports.registration=(data,callback)=>{

        console.log("services use data 1",data);
        /*usermodel.registration(req,()=>{
            console.log("services use data 2",req);
        });*/
       usermodel.addUser(data,(err,result)=>{
            console.log("services use data 2",data);
            if(err) {
                console.log("services Error");
            return callback(err);
            }
            else {
                console.log("In service");
                return callback(null,result);
            }
        });
 
}

exports.forgotpass=(data,callback)=>{
    console.log("Services used data",data);
    usermodel.forgotPassword(data,(err,result)=>{
        if(err){
            return callback(err);
        }else {
            return callback(null,result);
        }
    })
}
//reset purpose
exports.resetpass=(req,callback)=>{
    usermodel.updateUserPassword(req,(err,result)=>{
        if(err){
            callback(err);
        }else {
            callback(null,result)
        }
    })
}
/*exports.updatepassword=(data,callback)=>{

    console.log("services use data 1",data);
    usermodel.registration(req,()=>{
        console.log("services use data 2",req);
    });
   usermodel.addUser(data,(err,result)=>{
        console.log("services use data 2",data);
        if(err) {
            console.log("services Error");
        return callback(err);
        }
        else {
            console.log("In service");
            return callback(null,result);
        }
    });

} */