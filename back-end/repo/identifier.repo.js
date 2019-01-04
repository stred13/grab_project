const mongoose = require('mongoose');
const remodel = require('../models/models');
var myId = mongoose.Types.ObjectId();

module.exports = {
    async updateAdd(data){
        var iden = await remodel.AddresRI.update({_id:data._id}, {$set :{fulladd:data.fulladd}},(err=>{
            console.log(err)
        }));
        
        return iden;
    }
}