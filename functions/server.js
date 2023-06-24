const express = require('express');
const serverless = require('serverless-http');
const https = require('https');


const app = express();
const bodyParser = require('body-parser');

// const router = express.Router()

app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static(__dirname + '/public'));

app.get("/index", function(req, res) {
    res.sendFile(__dirname + "/index.html");
});



app.post("/index", function(req, res){

const codes = ["1NKCI", "V3L7R", "60HPC", "8SF6L", "AHG08"]
const codes2 = ["2WEMV", "KWWNI", "XNB7X", "6BN2T", "Y2FOK"]
const codes3 = ["YJYZL", "6HNP2", "V9FF8", "8SF5L", "5B23I"]
const codes4 = ["UVUNU", "1N5UL", "IINVK", "AEZNP", "HM2NM"]
const codes5 = ["KGFIA", "XI28K", "2QQ8K", "9Y4HK", "DMQJT"]

    if (codes.includes(req.body.field)) {
        res.redirect("/promo1.html");
    } else if (codes2.includes(req.body.field)) {
        res.sendFile(__dirname + "/promo2.html");
    } else if (codes3.includes(req.body.field)) {
        res.sendFile(__dirname + "/promo3.html");
    } else if (codes4.includes(req.body.field)) {
        res.sendFile(__dirname + "/promo4.html");
    } else if (codes5.includes(req.body.field)) {
        res.sendFile(__dirname + "/promo5.html");
    } else {
        res.send("The code is invalid");
    }
});

app.get('/promo1.html', (req, res) => {
    res.send('/promo1.html');
});

app.listen(3000, function(){
    console.log('server is running on port 3000.');
})

// app.use("/.netlify/functions/server", router);

module.exports.handler = serverless(app);