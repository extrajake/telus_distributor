const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({extended:true}));

app.get("/", function(req, res) {
    res.sendFile(__dirname, "/index.html");
});

app.post("/", function(req, res){

    console.log(req.body);
    res.send("Thanks for posting that!");
});

app.listen(3001, function(){
    console.log('server is running on port 3000.');
})



let r = ((Math.random() + 1)*5).toString(36).substring(7);
console.log(r.toUpperCase());

const promo1 = ["1NKCI", "V3L7R", "60HPC", "8SF5L", "AHG08"];
const promo2 = ["2WEMV", "KWWNI", "XNB7X", "6BN2T", "Y2FOK"];
const promo3 = ["YJYZL", "6HNP2", "V9FF8", "8SF5L", "5B23I"];
const promo4 = ["UVUNU", "1N5UL", "IINVK", "AEZNP", "HM2NM"];
const promo5 = ["KGFIA", "XI28K", "2QQ8K", "9Y4HK", "DMQJT"];

// const HTML = promo1.map( item => `<li>${item}</li> ` ).join('');
// document.getElementById("item-list").innerHTML = '<ul style="list-style:none;">' + HTML + '</ul>';

// const HTML2 = promo2.map( item => `<li>${item}</li> ` ).join('');
// document.getElementById("item-list2").innerHTML = '<ul style="list-style:none;">' + HTML2 + '</ul>';

// const HTML3 = promo3.map( item => `<li>${item}</li> ` ).join('');
// document.getElementById("item-list3").innerHTML = '<ul style="list-style:none;">' + HTML3 + '</ul>';

// const HTML4 = promo4.map( item => `<li>${item}</li> ` ).join('');
// document.getElementById("item-list4").innerHTML = '<ul style="list-style:none;">' + HTML4 + '</ul>';

// const HTML5 = promo5.map( item => `<li>${item}</li> ` ).join('');
// document.getElementById("item-list5").innerHTML = '<ul style="list-style:none;">' + HTML5 + '</ul>';
