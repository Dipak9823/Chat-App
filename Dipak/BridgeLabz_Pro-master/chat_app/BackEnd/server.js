const router = require('../BackEnd/router/routes');
const express = require('express');
var bodyParser = require('body-parser');

const app = express();

const databaseConfig = require('../BackEnd/configuration/DatabaseConfiguration');
const mongoose = require('mongoose');
app.use(bodyParser.json())
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

const server = app.listen(4000, () => {
    console.log("Server is listening on port 4000");
});