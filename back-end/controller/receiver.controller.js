var jwt = require('jsonwebtoken');
var express = require('express');
var SHA256 = require('crypto-js/sha256');

//
var app = express();
var eventEmitter = require('eventemitter3');
var emitter = new eventEmitter();

//
const config = require('../config.js');
var events = require('./event');
var receiRepo = require('../repo/receiver.repo')

module.exports.getListReceivers = async function (req, res) {
    try {
        //console.log(req);
        var rec = await Receiver.find();
        res.statusCode = 200;
        res.send(JSON.stringify(rec));
    } catch (error) {
        res.statusCode = 500;
        console.log(error);
    }
}

module.exports.getRe_by_userName = async (req, res) => {
    try {
        var data = req.body;
        console.log(data);
        var rec = await receiRepo.findoneReceiver(data);
        //console.log(rec);
        if (rec != null) {
            var payload = {
                id: rec._id,
                user_name: rec.user_name
            }
            
            var actoken = jwt.sign(payload, config.secret, { expiresIn: "10m" });
            var rft = "";
            //receiRepo.saveRFT({id:payload.id,rft:rft});

            res.statusCode = 200;
            res.json({
                payload,
                actoken: actoken
                //rfToken: rft
            });
        } else {
            res.json({ success: false })
        }
    } catch (error) {
        res.statusCode = 500;
        console.log(error);

    }
}

module.exports.verifying_User = (req, res) => {
    try {
        return res.json(req.token_payload);
    } catch (error) {
        res.statusCode = 500;
        console.log(error);
    }
}

module.exports.shortAdd_Added =async (req, res) => {
   try {
        //console.log(req);
        var data = req.body;
       // console.log(req.body);
        await receiRepo.addAddress(data)
        //events.publishShortAdded(data);
        res.json(data);
    } catch (error) {
        console.log(error)

    }
}

module.exports.loadAdd = async (req,res)=>{
    try {
        var data = await receiRepo.loadAddress();
        //console.log(data);
        res.json(data);
    } catch (err) {
        console.log(err);
    }
}