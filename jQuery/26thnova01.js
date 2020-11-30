let x ="Hi";
//what is syntax i need to type, welcome to hell open the program
//whcih you did earlier..
const express = require('express');
const app = express();


const mysql = require('mysql2');
const con = mysql.createConnection({
  host: 'localhost',
  port:3306,
  user: 'root',
  password:'root',
  database: 'test'
});



app.use(express.static('./abc'));
//below two lines are required in your code.
//to process post based requests.
const bodyParser = require('body-parser');//get the object
app.use(bodyParser.urlencoded({ extended: true })); //call the function of object

app.post("/stepbystep",function(req,res){
	
	let x = req.body.ino;
	console.log("input " + x);
	let y ={itemno:0,itemname:"",price:0};//mock value or dummy value.
	
	
	
	
	con.connect(function(err) 
{   if (err)
    {
			console.log("connection failed" + err);
	}
    else
    {
		let sql ="select itemno, price , itemname from item where itemno=?";
		let vtbfiq=[x];//it is a textbovalue.
		
		con.query(sql,vtbfiq,function(err,neverkeepx)
		{
			if(err) { console.log("select failed" + err); }
			else {
					
					if(neverkeepx.length === 0)
						res.send(y);//we are sending the response from this function
					else
						res.send(neverkeepx[0]);//send the response here
					
							
			}
			
		});
		
		
			
	}
});
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
});


app.listen(600,function(){console.log('server is walking');});