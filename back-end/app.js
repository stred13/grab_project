var express = require('express');
var app = express();
var cors = require('cors');
var bodyParser = require('body-parser');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

const connection = require('./models/connection');

connection.connectmg;


var port = process.env.port || 3000;
app.listen(port, () => {
    console.log(`api running on port ${port}`);
})