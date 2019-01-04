const mongoose = require('mongoose');

var rftokenSchema = new mongoose.Schema({
    reu_name: String,
    rft: String
})
var addressriSchema = new mongoose.Schema({
    name:String,
    sdt:String,
    shortadd: String,
    fulladd: String,
    note:String,
    dateRe:String,
    status:String
})

var receiversSchema = new mongoose.Schema({
    receiver_name: String,
    user_name: String,
    pass: String
});

var RfToken = mongoose.model('RfToken', rftokenSchema, 'rftoken');
var AddresRI = mongoose.model('AddresRI', addressriSchema, 'addressri');
var Receivers = mongoose.model('Receivers',receiversSchema,'receivers');
module.exports = {
    RfToken, AddresRI,Receivers
}


