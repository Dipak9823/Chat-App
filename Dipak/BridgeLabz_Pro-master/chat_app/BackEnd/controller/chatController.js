
const chatservice = require('../services/chatService')

try {
    exports.saveMessage= (req, res) => {
        let responseResult = {}
        chatservice.saveMessageService(req.body, (err, result) => {
            if (err) {
                responseResult.err = err;
                responseResult.status = false;
                res.status(500).send(responseResult)
            }
            else {
                responseResult.data = result;
                responseResult.status = true;
                res.status(200).send(responseResult);
            }
        })


    }
}catch(err){
    console.log(err);
}


try {
    exports.chat= (req, res) => {
        let responseResult = {}
        chatservice.chatService(req.body, (err, result) => {
            if (err) {
                responseResult.err = err;
                responseResult.status = false;
                res.status(500).send(responseResult)
            }
            else {
                responseResult.data = result;
                responseResult.status = true;
                console.log("hi how ",responseResult);
                res.status(200).send(responseResult);
            }
        })


    }
}catch(err){
    console.log(err);
}
