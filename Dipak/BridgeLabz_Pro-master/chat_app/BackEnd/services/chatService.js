const chatModel = require('../model/chatmodel');


try {

    exports.saveMessageService = (data, callback) => {
        chatModel.saveMsg(data, (err, result) => {
            if (err) {
                console.log(err);
                callback(err);
            }
            else {
                return callback(null, result);

            }

        })

    }
} catch (err) {
    console.log(err);
}
//chatService

try {

    exports.chatService= (data, callback) => {
        chatModel.getMsg(data, (err, result) => {
            if (err) {
                console.log(err);
                callback(err);
            }
            else {
                console.log("in services");
                
                return callback(null, result);

            }

        })

    }
} catch (err) {
    console.log(err);
}
