const router = require('./router/routes');

const express = require('express');
var bodyParser = require('body-parser');
const expressValidator = require('express-validator');
const http= require('http');
const cors=require('cors');


//var frontend=require("../FrontEnd/app");
const app = express();
app.use(expressValidator());
app.use(cors());

const databaseConfig = require('../BackEnd/configuration/DatabaseConfiguration');
const mongoose = require('mongoose');

app.use(bodyParser.urlencoded({ extended: false }))

// parse requests of content-type - application/json
app.use(bodyParser.json());
app.use(express.static('../FrontEnd'));
app.use('/', router);
//app.use('/', authorization);
/*app.get('/',(req,res)=>{
    //console.log("Welcome to chatapp");
    res.send("Welcome to chatapp");
})*/

const server = app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});
const io = require('socket.io')(server);
io.on('connection', function (socket) {
    console.log("socket is connected ");
    socket.on('createMessage',function(message)
    {
        chatController.message(message,(err,data)=>
        {
if (err)
{
console.log("Error:in message",err);

}
else{
console.log(message+'in server');
io.emit('newMessageSingle',message);
}
});
socket.on('disconnect',function(){
console.log('socket is disconnect');
});
    });
});
// define a simple route
//app= express.createServer();

// app.get('/', (req, res) => res.send('Hello World!'));
// app.get('/', (req, res) => res.send('Hello World!'))

mongoose.Promise = global.Promise;

// Connecting to the database
mongoose.connect(databaseConfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});

