const router = require('./router/routes');
const express = require('express');
var bodyParser = require('body-parser');


//var frontend=require("../FrontEnd/app");
const app = express();

//app.use(cors());

const databaseConfig = require('../BackEnd/configuration/DatabaseConfiguration');
const mongoose = require('mongoose');

app.use(bodyParser.urlencoded({ extended: false }))

// parse requests of content-type - application/json
app.use(bodyParser.json());
app.use(express.static('../FrontEnd'));
app.use('/', router);

/*app.get('/',(req,res)=>{
    //console.log("Welcome to chatapp");
    res.send("Welcome to chatapp");
})*/
mongoose.Promise = global.Promise;

mongoose.connect(databaseConfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");
}).catch(err => {

    console.log('Could not connect to the database. Exit now...', err);
    process.exit();
});

const server = app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});