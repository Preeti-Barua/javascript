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


//I hate this.. becuase i did not go step by step. i am writing a poet

app.post("/Stepstepagain",function(req,res){
	
	
	let msg =req.body.xno  +  "  " + req.body.xname +  " " + 
	req.body.xprice; 
	console.log("input is" +  msg)
	let ddbs={status:-1,reason:"db failure"};
		
	//let me copy paste below here..
	
	con.connect(function(err) 
{   if (err)
    {
			res.send(ddbs);//this time we told when db fails we should tell
	}
    else
    {
		let sql ="update item set price=?,itemname=? where itemno=?";
		let vtbfiq=[req.body.xprice,req.body.xname,req.body.xno];//fill the values that goes into question mark
		//in an array.
		con.query(sql,vtbfiq,function(err,neverkeepx)
		{
			if(err) { res.send(ddbs); }
			else {
					let y = neverkeepx.affectedRows;
					console.log("affected rows value" + neverkeepx.affectedRows );
					if( y === 0)
					{
						ddbs.status=0;
						ddbs.reason="where condtion failed";
						
						
					}
					 else
					 {
						 
						 ddbs.status=1;
						ddbs.reason="success";
						 
					 }
					 res.send(ddbs);
						  
				
				
			}
			
		});
		
		
			
	}
});


	
	//databse function should end here...
	
	
	
	//end of the post event handling function
	
});
	
app.listen(600,function(){console.log('server is walking');});
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
