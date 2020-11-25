console.log(3);

const express = require('express');
const app = express();

//below two lines are required in your code.
//to process post based requests.
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('./abc'));

app.post("/areaperimeter",function(req,res){
	
	let a =req.body.x;
	let z =0;//get used to the habitof putting
	//some vlaue into the local variable
	if( a === "perimetr")
	{
		z=req.body.s1*4;
		
	}
	else if( a === "area") 
	{
		
		z =req.body.s1 *req.body.s1;
		
	}
	res.send("ok we have to do " + z);
	
	
});












app.listen(600,function(){console.log('server is jogging')});
