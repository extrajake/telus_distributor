const express = require('express');
const serverless = require('serverless-http');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

// Static files
app.use(express.static(__dirname + '/public'));

const apiKey = 'pat-na1-70302af9-f0f7-4814-96cd-f3648b8f4eca';
const companiesEndpoint = 'https://api.hubapi.com/companies/v3/companies';

// Parameters for the request (if you want to filter or limit the results)
const params = {
  limit: 100, // Adjust the limit as needed to fetch more or fewer companies per request
  // Add any other parameters you need here
};

const queryParams = new URLSearchParams(params);
const url = `${companiesEndpoint}?${queryParams.toString()}`;

fetch(url, {
  headers: {
    Authorization: `Bearer ${apiKey}`,
  }
})
  .then(response => response.json())
  .then(data => {
    // Log the list of companies to the console
    console.log(data);

    // If you want to see specific properties of the companies, you can access them like this:
    data.companies.forEach(company => {
      console.log('Company Name:', company.properties.name);
      console.log('Company ID:', company.id);
      // Add more properties as needed
    });
  })
  .catch(error => {
    console.error('Error fetching companies:', error);
  });



app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.post('/', function (req, res) {

  const codes = ["1NKCI", "V3L7R", "60HPC", "8SF6L", "AHG08"];
  const codes2 = ["2WEMV", "KWWNI", "XNB7X", "6BN2T", "Y2FOK"];
  const codes3 = ["YJYZL", "6HNP2", "V9FF8", "8SF5L", "5B23I"];
  const codes4 = ["UVUNU", "1N5UL", "IINVK", "AEZNP", "HM2NM"];
  const codes5 = ["KGFIA", "XI28K", "2QQ8K", "9Y4HK", "DMQJT"];

  if (codes.includes(req.body.field)) {
    res.sendFile(__dirname  + '/promo1.html');
  } else if (codes2.includes(req.body.field)) {
    res.sendFile(__dirname  + '/promo2.html');
  } else if (codes3.includes(req.body.field)) {
    res.sendFile(__dirname  + '/promo3.html');
  } else if (codes4.includes(req.body.field)) {
    res.sendFile(__dirname  + '/promo4.html');
  } else if (codes5.includes(req.body.field)) {
    res.sendFile(__dirname  + '/promo5.html');
  } else {
    res.send('The code is invalid');
  }
});

app.listen(3000, function() {
  console.log('App is running on port 3000');
});

module.exports.handler = serverless(app);