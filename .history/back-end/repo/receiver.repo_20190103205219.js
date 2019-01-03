const mongoose = require('mongoose');
const remodel = require('../models/models');

async function findoneReceiver(data) {
  var rec = remodel.Receivers.findOne({
    user_name: data.user_name,
    pass: data.pass
  });
  return rec;
}

async function saveRFT(data) {
  var rft = new remodel.RfToken({
    id: data.id,
    rftToken: data.rft
  });

  rft.save((err, result) => {
    if (err) {
      console.log(err);
    }
  });
}

async function addAddress(data) {
  var add = new remodel.AddresRI({
    name: data.name,
    sdt: data.sdt,
    shortadd: data.shortadd,
    fulladd: data.fulladd,
    note: data.note
  });
  //console.log(add);
  add.save((err, result) => {
    if (err) {
      console.log(err);
    }
  });
}

async function loadAddress() {
  var addes = remodel.AddresRI.find({});
  //console.log(addes);
  return addes;
}

module.exports = {
  findoneReceiver,
  addAddress,
  loadAddress,
  saveRFT
};
