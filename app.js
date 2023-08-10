const express = require('express');
const serverless = require('serverless-http');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

// Static files
app.use(express.static(__dirname + '/public'));

const apiKey = 'pat-na1-70302af9-f0f7-4814-96cd-f3648b8f4eca';

// const companyId = '16292331916'; // Replace 'COMPANY_ID' with the ID of the specific company you want to retrieve deals for.

// const associationsEndpoint = `https://api.hubapi.com/crm/v3/associations/${encodeURIComponent(companyId)}/company_to_deal/deals`;

// const params = {
//   limit: 10, // Adjust the limit as needed to fetch more or fewer deals per request
//   // Add any other parameters you need here
// };

// const queryParams = new URLSearchParams(params);
// const url = `${associationsEndpoint}?${queryParams.toString()}`;

// fetch(url, {
//   headers: {
//     Authorization: `Bearer ${apiKey}`,
//     Accept: 'application/json',
//   },
// })
//   .then(response => response.json())
//   .then(data => {
//     // Log the list of deals associated with the company to the console
//     console.log(data);

//     // Access the associated deal data
//     const deals = data.results;

//     // Now, you can process the individual deals or access their properties as needed
//     deals.forEach(deal => {
//       console.log('Deal ID:', deal.id);
//       console.log('Deal Name:', deal.properties.dealname);
//       // Add more deal properties as needed
//     });
//   })
//   .catch(error => {
//     console.error('Error fetching deals associated with the company:', error);
//   });
// const dealNames = [];

// const dealsEndpoint = 'https://api.hubapi.com/crm/v3/objects/deals';
// const associationsEndpoint = `https://api.hubapi.com/crm/v3/companies/16292331916/contacts`;
// const companiesEndpoint = 'https://api.hubapi.com/crm/v3/objects/companies';
// const associatedDeals = 'https://api.hubapi.com/crm/v4/associations/companies/deals/labels';
// const companyDeals =  'https://api.hubapi.com/crm/v3/objects/deals/properties=notes_last_updated&associations=company';

// // Parameters for the request (you can add more as needed)
// const params = {
//   properties: 'dealname, dealstage, toObjectId',
//   // dealName: 'dealname',
//   // associations: [],
//   limit: 10,
//   // Add any other parameters you need here
// };

// const queryParams = new URLSearchParams(params);
// const url = `${companiesEndpoint}?${queryParams.toString()}`;


// fetch(url, {
//   headers: {
//     Authorization: `Bearer ${apiKey}`,
//   }
// })
//   .then(response => response.json())
//   .then(data => {
//     // Process the data returned from HubSpot APIß
//     // console.log(data.results);

//     // Logs only specific deals, not associated with companies

   

//     data.results.forEach(result => {
//       dealNames.push(result.properties);
//       // console.log(result.properties.dealname);
//     });

//     console.log(dealNames);
//     // let promoCodes = data.results(result.properties.dealname);

//     // console.log('properties:', data.results);
//     // console.log('Deal Name:', response.properties.dealname);
//     // console.log('properties:', data.results);
//     // console.log('properties:', data.results[2].properties.dealname);
//     // console.log('properties:', data.results[1].properties.dealname);
//     // console.log('properties:', data.results[2].properties.dealname);

//   })
//   .catch(error => {
//     console.error('Error fetching deals:', error);
//   });

const companyIds = ['16292331916', '16712213297', '16714678107']; // Replace with the IDs of the specific companies you want to retrieve deals for.

const associationsEndpoint = 'https://api.hubapi.com/crm/v3/associations/company';

// Function to fetch deals associated with a specific company
async function fetchDealsForCompany(companyId) {
  const dealsEndpoint = `${associationsEndpoint}/${companyId}/company_to_deal/deals`;

  try {
    const response = await fetch(dealsEndpoint, {
      headers: {
        Authorization: `Bearer ${apiKey}`,
        Accept: 'application/json',
      },
    });

    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error(`Error fetching deals for company ID ${companyId}:`, error);
    return [];
  }
}

// Function to fetch deals for multiple companies
async function fetchDealsForMultipleCompanies(companyIds) {
  try {
    const dealsByCompany = {};

    for (const companyId of companyIds) {
      const deals = await fetchDealsForCompany(companyId);
      dealsByCompany[companyId] = deals;
    }

    // Perform further processing using dealsByCompany object
    console.log(dealsByCompany);
  } catch (error) {
    console.error('Error fetching deals for multiple companies:', error);
  }
}

// Call the function to fetch deals for multiple companies
fetchDealsForMultipleCompanies(companyIds);



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