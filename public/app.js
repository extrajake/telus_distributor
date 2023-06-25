const express = require('express');
const serverless = require('serverless-http');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

// Static files
app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.post('/index.html', function (req, res) {

  res.send('success');
  // const codes = ["1NKCI", "V3L7R", "60HPC", "8SF6L", "AHG08"];
  // const codes2 = ["2WEMV", "KWWNI", "XNB7X", "6BN2T", "Y2FOK"];
  // const codes3 = ["YJYZL", "6HNP2", "V9FF8", "8SF5L", "5B23I"];
  // const codes4 = ["UVUNU", "1N5UL", "IINVK", "AEZNP", "HM2NM"];
  // const codes5 = ["KGFIA", "XI28K", "2QQ8K", "9Y4HK", "DMQJT"];

  // if (codes.includes(req.body.field)) {
  //   res.redirect('/promo1.html');
  // } else if (codes2.includes(req.body.field)) {
  //   res.redirect('/promo2.html');
  // } else if (codes3.includes(req.body.field)) {
  //   res.redirect('/promo3.html');
  // } else if (codes4.includes(req.body.field)) {
  //   res.redirect('/promo4.html');
  // } else if (codes5.includes(req.body.field)) {
  //   res.redirect('/promo5.html');
  // } else {
  //   res.send('The code is invalid');
  // }
});

module.exports.handler = serverless(app);