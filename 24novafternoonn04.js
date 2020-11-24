console.log(2);

const express = require('express');
const app = express();

//below two lines are required in your code.
//to process post based requests..
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('./abc'));

app.get("/di",function(req,res){ 

let ix = req.query.wc;//reading the parametr
//from the request.
ix = ix *2;

res.send("double is" + ix);


});


app.post("/ti",function(req,res){ 

	let x = req.body.wc *3;
	res.send("triple it " + x);

	}


);
app.listen(500,function(){console.log('server is running')});