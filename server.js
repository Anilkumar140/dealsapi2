'use strict';
// Load dependencies

const express = require('express');
const jwt = require('express-jwt');
const jwks = require('jwks-rsa');
const cors = require('cors');
const bodyParser = require('body-parser');
const host = '0.0.0.0';
const port = process.env.PORT || 3000;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// const  = jwt({
//   secret: jwks.expressJwtSecret({
//         cache: true,
//         rateLimit: true,
//         jwksRequestsPerMinute: 5,
//         jwksUri: "https://dev-797te40r.us.auth0.com/.well-known/jwks.json"
//     }),
//     // This is the identifier we set when we created the API
//     audience: 'http://localhost:3001',
//     issuer: "https://dev-797te40r.us.auth0.com/", // e.g., https://you.auth0.com/
//     algorithms: ['RS256']
// });
// Public route
app.get('/api/data/cuttack', (req, res)=>{
  let deals = [
    {
        id: 1,
        
      },
      {
        id: 2,
       
      },
      {
        id: 2,
        
      },
      {
        id: 4,
       
      },
      {
        id: 5,
       
      },
      {
        id: 6,
      
      }, {
    id: 7,
   
  },
  {
    id: 8,
    
  },
  {
    id: 9,
    
  },
  {
    id: 10,
    
  },
  {
    id: 11,
    
  },
  {
id: 12,
        
},
{
  id: 13,
 
},
{
  id: 14,
  
},
{
  id: 15,
 
},
{
  id: 16,
 
},
{
  id:17,

}, {
id: 18,

},
{
id: 19,

},
{
id: 20,

},
{
id: 21,

},
{
id: 22,

},
{
id: 23,
        
},
{
  id: 24,
 
},
{
  id: 25,
  
},
{
  id: 26,
 
},
{
  id: 27,
 
},
{
  id: 28,

}, {
id: 29,

},
{
id: 30,

},
{
id: 31,

},
{
id: 32,

},
{
id: 33,

},
{
id: 34,
        
},
{
  id: 35,
 
},
{
  id: 36,
  
},
{
  id: 37 ,
 
},
{
  id: 38,
 
},
{
  id: 39,

}, {
id: 40,

},
{
id: 41,

},
{
id: 42,

},
{
id: 43,

},
{
id: 44,

},
{
id: 45,
        
},
{
  id: 46,
 
},
{
  id: 47,
  
},
{
  id: 48,
 
},
{
  id: 49,
 
},
{
  id: 50,

}, {
id: 51,

},
{
id: 52,

},
{
id: 53,

},
{
id: 54,

},
{
id: 55,

},

 
  ];
  res.json(deals);
})

// Private route
app.get('/api/data/anugul', (req,res)=>{
  let deals = [
    {
      id: 1,
      
    },
    {
      id: 2,
     
    },
    {
      id: 2,
      
    },
    {
      id: 4,
     
    },
    {
      id: 5,
     
    },
    {
      id: 6,
    
    }, {
  id: 7,
 
},
{
  id: 8,
  
},
{
  id: 9,
  
},
{
  id: 10,
  
},
{
  id: 11,
  
},
{
id: 12,
      
},
{
id: 13,

},
{
id: 14,

},
{
id: 15,

},
{
id: 16,

},
{
id:17,

}, {
id: 18,

},
{
id: 19,

},
{
id: 20,

},
{
id: 21,

},
{
id: 22,

},
{
id: 23,
      
},
{
id: 24,

},
{
id: 25,

},
{
id: 26,

},
{
id: 27,

},
{
id: 28,

}, {
id: 29,

},
{
id: 30,

},
{
id: 31,

},
{
id: 32,

},
{
id: 33,

},
{
id: 34,
      
},
{
id: 35,

},
{
id: 36,

},
{
id: 37 ,

},
{
id: 38,

},
{
id: 39,

}, {
id: 40,

},
{
id: 41,

},
{
id: 42,

},
{
id: 43,

},
{
id: 44,

},
{
id: 45,
      
},
{
id: 46,

},
{
id: 47,

},


  ];
  res.json(deals);
})
app.get('/api/deals/khorda', (req,res)=>{
  let deals = [
    {
      id: 1,
      
    },
    {
      id: 2,
     
    },
    {
      id: 2,
      
    },
    {
      id: 4,
     
    },
    {
      id: 5,
     
    },
    {
      id: 6,
    
    }, {
  id: 7,
 
},
{
  id: 8,
  
},
{
  id: 9,
  
},
{
  id: 10,
  
},
{
  id: 11,
  
},
{
id: 12,
      
},
{
id: 13,

},
{
id: 14,

},
{
id: 15,

},
{
id: 16,

},
{
id:17,

}, {
id: 18,

},
{
id: 19,

},
{
id: 20,

},
{
id: 21,

},
{
id: 22,

},
{
id: 23,
      
},
{
id: 24,

},
{
id: 25,

},
{
id: 26,

},
{
id: 27,

},
{
id: 28,

}, {
id: 29,

},
{
id: 30,

},
{
id: 31,

},
{
id: 32,

},
{
id: 33,

},
{
id: 34,
      
},
{
id: 35,

},
{
id: 36,

},
{
id: 37 ,

},


  ];
  res.json(deals);
})
app.get('/api/data/sambalpur', (req,res)=>{
  let deals = [
    {
      id: 1,
      
    },
    {
      id: 2,
     
    },
    {
      id: 2,
      
    },
    {
      id: 4,
     
    },
    {
      id: 5,
     
    },
    {
      id: 6,
    
    }, {
  id: 7,
 
},
{
  id: 8,
  
},
{
  id: 9,
  
},
{
  id: 10,
  
},
{
  id: 11,
  
},
{
id: 12,
      
},
{
id: 13,

},
{
id: 14,

},
{
id: 15,

},
{
id: 16,

},
{
id:17,

}, {
id: 18,

},
{
id: 19,

},
{
id: 20,

},
{
id: 21,

},
{
id: 22,

},
{
id: 23,
      
},
{
id: 24,

},
{
id: 25,

},
{
id: 26,

},
{
id: 27,

},
{
id: 28,

}, {
id: 29,

},
{
id: 30,

},
{
id: 31,

},
{
id: 32,

},
{
id: 33,

},
{
id: 34,
      
},


  ];
  res.json(deals);
})
app.get('/api/data/Baripada', (req,res)=>{
  let deals = [
    {
      id: 1,
      
    },
    {
      id: 2,
     
    },
    {
      id: 2,
      
    },
    {
      id: 4,
     
    },
    {
      id: 5,
     
    },
    {
      id: 6,
    
    }, {
  id: 7,
 
},
{
  id: 8,
  
},
{
  id: 9,
  
},
{
  id: 10,
  
},
{
  id: 11,
  
},
{
id: 12,
      
},
{
id: 13,

},
{
id: 14,

},
{
id: 15,

},
{
id: 16,

},
{
id:17,

}, {
id: 18,

},
{
id: 19,

},
{
id: 20,

},
{
id: 21,

},
{
id: 22,

},
{
id: 23,
      
},
{
id: 24,

},
{
id: 25,

},
{
id: 26,

},
{
id: 27,

},
{
id: 28,

}, {
id: 29,

},
{
id: 30,

},
{
id: 31,

},
{
id: 32,

},
{
id: 33,

},
{
id: 34,
      
},
{
id: 35,

},
{
id: 36,

},
{
id: 37 ,

},
{
id: 38,

},
{
id: 39,

}, {
id: 40,

},
{
id: 41,

},
{
id: 42,

},
{
id: 43,

},
{
id: 44,

},
{
id: 45,
      
},
{
id: 46,

},
{
id: 47,

},
{
id: 48,

},
{
id: 49,

},
{
id: 50,

}, {
id: 51,

},
{
id: 52,

},
{
id: 53,

},
{
id: 54,

},
{
id: 55,

},
{
id: 56,
      
},
{
id: 57,

},
{
id: 58,

},
{
id: 60,

},
{
id: 61,

},
{
id: 62,

}, {
id: 63,

},
{
id: 64,

},
{
id: 65,

},
{
id: 66,

},
{
id: 67,

},
{
id: 68,
      
},
{
id: 69,

},
{
id: 70,

},
app.get('/api/data/maurbhanj',(req,res)=>{
  let deals = [
    {
      id: 1,
      
    },
    {
      id: 2,
     
    },
    {
      id: 2,
      
    },
    {
      id: 4,
     
    },
    {
      id: 5,
     
    },
    {
      id: 6,
    
    }, {
  id: 7,
 
},
{
  id: 8,
  
},
{
  id: 9,
  
},
{
  id: 10,
  
},
{
  id: 11,
  
},
{
id: 12,
      
},
{
id: 13,

},
{
id: 14,

},
{
id: 15,

},
{
id: 16,

},
{
id:17,

}, {
id: 18,

},
{
id: 19,

},
{
id: 20,

},
{
id: 21,

},
{
id: 22,

},
{
id: 23,
      
},
{
id: 24,

},
{
id: 25,

},
{
id: 26,

},
{
id: 27,

},
{
id: 28,

}, {
id: 29,

},
{
id: 30,

},
{
id: 31,

},
{
id: 32,

},
{
id: 33,

},
{
id: 34,
      
},
{
id: 35,

},
{
id: 36,

},
{
id: 37 ,

},
{
id: 38,

},
{
id: 39,

}, {
id: 40,

},
{
id: 41,

},
{
id: 42,

},
{
id: 43,

},
{
id: 44,

},
{
id: 45,
      
},
{
id: 46,

},
{
id: 47,

},
{
id: 48,

},
{
id: 49,

},
{
id: 50,

}, 

  ];
  res.json(deals);
})

  ];
  res.json(deals);
})
app.listen(port, host, function() {
  console.log("Server started.......");
});