'use strict';
// Load dependencies
const express = require('express');
const express = require('express');
const jwt = require('express-jwt');
const jwks = require('jwks-rsa');
const cors = require('cors');
const bodyParser = require('body-parser');
const host = '0.0.0.0';
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

const authCheck = jwt({
  secret: jwks.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri: "https://dev-797te40r.us.auth0.com/.well-known/jwks.json"
    }),
    // This is the identifier we set when we created the API
    audience: 'http://localhost:3001',
    issuer: "https://dev-797te40r.us.auth0.com/", // e.g., https://you.auth0.com/
    algorithms: ['RS256']
});
// Public route
app.get('/api/deals/public', (req, res)=>{
  let deals = [
    {
        id: 12231,
        image:'/assets/neemcapsule.png',
        name: 'Neem capsule',
        description: 'The Playstation 4 is the next gen console to own. With the best games and online experience.',
        originalPrice: 249,
        salePrice: 299.99,
        leftitem: 2,
      },
      {
        id: 12236,
        image:'/assets/kajal.png',
        name: 'Make up black kajal',
        description: 'The Note 7 has been fixed and will no longer explode. Get it an amazing price!',
        originalPrice: 175.00,
        salePrice: 499.99,
        leftitem: 5,
      },
      {
        id: 12245,
        image:'/assets/macbook.jpg',
        name: 'Tulsi power',
        description: 'The Macbook Pro is the de-facto standard for best in breed mobile computing.',
        originalPrice: 265.00,
        salePrice: 1999.99,
        leftitem: 7,
      },
      {
        id: 12267,
        image:'/assets/tulsipowder1.png',
        name: 'Tulsi power',
        description: 'Turn your home into a smart home with Amazon Echo. Just say the word and Echo will do it.',
        originalPrice: 265.00,
        salePrice: 129.99,
        leftitem: 5,
      },
      {
        id: 12288,
        image:'/assets/fat.png',
        name: 'Oreslim powder-200gms',
        description: 'The Nest Outdoor camera records and keeps track of events outside your home 24/7.',
        originalPrice: 749.00,
        salePrice: 149.99,
        leftitem: 15,
      },
      {
        id: 12290,
        image:'/assets/paindomplus.png',
        name: 'Paindon plus capsules-120caps',
        description: 'Record yourself in first person 24/7 with the GoPro 4. Show everyone how exciting your life is.',
        originalPrice: 525.00,
        salePrice: 199.99,
        leftitem: 7,
      }, {
    id: 12231,
    image:'/assets/paindomplus.png',
    name: 'Paindon plus capsules-30caps',
    description: 'The Playstation 4 is the next gen console to own. With the best games and online experience.',
    originalPrice: 190.00,
    salePrice: 299.99,
    leftitem: 22,
  },
  {
    id: 12237,
    image:'/assets/Tulsipowder2.png',
    name: 'Tulsi power-20ml',
    description: 'The Note 7 has been fixed and will no longer explode. Get it an amazing price!',
    originalPrice: 265.00,
    salePrice: 499.99,
    leftitem: 2,
  },
  {
    id: 12225,
    image:'/assets/nutroncapsule.png',
    name: 'Nutroton capsule-60caps',
    description: 'The Macbook Pro is the de-facto standard for best in breed mobile computing.',
    originalPrice: 625.00,
    salePrice: 1999.99,
    leftitem: 6,
  },
  {
    id: 12278,
    image:'/assets/vigvitcapsule.png',
    name: 'Vigvit capsule-60caps',
    description: 'Turn your home into a smart home with Amazon Echo. Just say the word and Echo will do it.',
    originalPrice: 625.00,
    salePrice: 129.99,
    leftitem: 15,
  },
  {
    id: 12288,
    image:'/assets/nest.jpg',
    name: 'Oregon-80, for agriculture aid-500ml',
    description: 'The Nest Outdoor camera records and keeps track of events outside your home 24/7.',
    originalPrice: 550.00,
    salePrice: 149.99,
    leftitem: 12,
  },
 
  ];
  res.json(deals);
})

// Private route
app.get('/api/deals/private',authCheck, (req,res)=>{
  let deals = [
    {
        id: 14423,
        name: 'Tesla S',
        description: 'Ride in style and say goodbye to paying for gas. The Tesla S is the car of the future.',
        originalPrice: 90000.00,
        salePrice: 75000.00
      },
      {
        id: 14553,
        name: 'DJI Phantom 4',
        description: 'The Drone revolution is here. Take to the skies with the DJI Phantom 4.',
        originalPrice: 1299.99,
        salePrice: 749.99
      },
      {
        id: 15900,
        name: 'iPhone 7 - Jet Black',
        description: 'Get the latest and greatest iPhone in the limited edition jet black.',
        originalPrice: 899.99,
        salePrice: 799.99
      },
      {
        id: 16000,
        name: '70" Samsung 4K HDR TV',
        description: 'Watch as if you were there with the latest innovations including 4K and HDR.',
        originalPrice: 2999.99,
        salePrice: 2499.99
      },
      {
        id: 17423,
        name: 'Canon t8i DSLR',
        description: 'Capture life\'s moments with the amazing Canon t8i DSLR',
        originalPrice: 999.99,
        salePrice: 549.99
      },
      {
        id: 17423,
        name: 'Xbox One S',
        description: 'Get the latest Xbox and play the best first party games including Gears of War and Forza.',
        originalPrice: 299.99,
        salePrice: 279.99
      },
  ];
  res.json(deals);
})

app.listen(port, host, function() {
  console.log("Server started.......");
});