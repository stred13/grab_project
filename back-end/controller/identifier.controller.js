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
var identifier = require('../repo/identifier.repo');

module.exports = {
  async updateFulladd(req, res) {
    try {
      var a = await identifier.updateAdd(req.body);
      //console.log(a);
      events.publishFullUpdate(a);
      res.send(JSON.stringify(a));
    } catch (err) {
      console.log(err);
    }
  }
};
