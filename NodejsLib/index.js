const bodyparser = require('body-parser') 
const express = require("express") 
const path = require('path')
const cookieParser = require('cookie-parser');  
const app = express() 


var PORT = process.env.port || 3000 

// View Engine Setup 
app.set("views", path.join(__dirname)) 
app.set("view engine", "ejs") 
app.use(cookieParser()); 

// Body-parser middleware 
app.use(bodyparser.urlencoded({extended:false})) 
app.use(bodyparser.json()) 

app.get("/", function(req, res){ 
	res.render("SampleForm") 
}); 

app.post('/saveData', (req, res) => { 	
	console.log("Using Body-parser: ", req.body.email) 
}) 
app.get('/cookie', (req, res) => { 
	res.cookie('name', 'AnilKumarswain').cookie('password','Anilks123').send(); 
	console.log(req.cookies); 
   
 }); 


 app.listen(3000, (err) => { 
    if(err){ console.log(err) }  
    else { console.log('Success!!') } 
}); 