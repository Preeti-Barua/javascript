//poets deserve suffering... in programming i am doing a poetic job
//again... it wont work in reasl life..

/////////////////////////////////////////////////////////multi select query

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


//I hate this.. becuase i did not go step by step. i am writing a poet

app.get("/repeitionisimportant",function(req,res){
	
	
	let msg =req.query.xprice; 
	console.log("input is" +  msg)
	let ddbs={status:0,content:[]};
		
	//let me copy paste below here..
	con.connect(function(err) 
{   if (err)
    {
			console.log("connection failed" + err);
	}
    else
    {
		let sql ="select itemno, price , itemname from item where price < ?";
		let vtbfiq=[req.query.xprice];//fill the values that goes into question mark
		//in an array.
		con.query(sql,vtbfiq,function(err,neverkeepx) // neverkeepx is array.obj
		{
			if(err) { console.log("select failed" + err); }
			else {
					
					if(neverkeepx.length === 0)
					{
						res.send(ddbs);
						
						
					}
					else
					{
						ddbs.status=1;
						ddbs.content=neverkeepx;
						res.send(ddbs);
					}
							
			}
			
		});
		
		
			
	}
});

	
	
	
	
	
	
	//databse function should end here...
	
	
	
	//end of the post event handling function
	
});
	
app.listen(600,function(){console.log('server is walking');});
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
