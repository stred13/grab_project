const mongoose = require('mongoose');
const config = require('../config')

module.exports.connectmg = mongoose.connect(config.database,function(err,db){
    if(!err){
        console.log('connected');
    }
    else{
        console.log('failed');
    }
});