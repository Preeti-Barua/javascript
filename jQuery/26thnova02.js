let x ="Hi";
//what is syntax i need to type, welcome to hell open the program
//whcih you did earlier..
const express = require('express');
const app = express();


const mysql = require('mysql2');
const con = mysql.createConnection({
  host: 'localhost',
  port:3309,
  user: 'root',
  password:'root',
  database: 'test'
});



app.use(express.static('./abc'));
//below two lines are required in your code.
//to process post based requests.
const bodyParser = require('body-parser');//get the object
app.use(bodyParser.urlencoded({ extended: true })); //call the function of object

app.post("/againstepbystep",function(req,res){
	
	
	let msg =req.body.xno  +  "  " + req.body.xname +  " " + 
	req.body.xprice; 
	console.log("input is" +  msg)
	let ddbs={status:0,reason:"failed because of priamrykey"};
		
	//let me copy paste below here..
	
	
	//databse function should end here...
	
	
	
	//end of the post event handling function
	
});
	
app.listen(600,function(){console.log('server is walking');});
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
