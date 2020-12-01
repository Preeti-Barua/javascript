const express = require('express');

const bodyParser = require('body-parser');
const app = express();

app.use(express.static('./'));
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));

const mysql = require('mysql2');

app.listen(8081, function () {
    console.log("server listening at port 8081...");
});

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    port: '3306',
    password: 'root',
    database: 'new1'
});


app.get("/select", (req, res) => {
    let pincode = req.query.pincode;
    let output = { status: 0, contents: [] };
    let demand = "select * from country where pincode=?";
    let fill = [pincode];
    connection.query(demand, fill, (err, rset) => {
        if (err) {
            console.log("Selection failed" + err);
        }
        else {
            if (rset.affectedRows === 0) {
                res.send(output);
            }
            else {
                output.status = 1;
                output.contents = rset;
                console.log("Selection successful!");
                console.log(rset);
                res.send(output);
            }
        }
    });
});

app.post("/update", (req, res) => {
    let area = req.body.area;
    let city = req.body.city;
    let pincode = req.body.pincode;
    console.log(area + " " + city + " " + pincode);
    let output = { status: 0, message: "" };
    let demand = "update country set area=?,city=? where pincode=?";
    let fill = [area, city, pincode];
    connection.query(demand, fill, (err, rset) => {
        let rows = rset.affectedRows;
        if (err) {
            console.log("Updation failed!" + err);
        }
        else {
            if (rows === 0) {
                console.log("No rows updated");
                res.send(output);
            }
            else {
                output.status = 1;
                output.message = "Updation successful!";
                res.send(output);
            }
        }
    });
});

app.post("/insert", (req, res) => {
    let area = req.body.area;
    let city = req.body.city;
    let pincode = req.body.pincode;
    console.log(pincode + " " + area + " " + city);
    let output = { status: 0, message: "" };
    let demand = "insert into country values(?,?,?)";
    let fill = [pincode, area, city];
    connection.query(demand, fill, (err, rset) => {
        if (err) {
            console.log(err);
            output.message="Insertion error occured!";
        }
        else {
            let rows = rset.affectedRows;
            output.status = 1;
            output.message = rows + " rows affected";
        }
        res.send(output);
    });
});

app.post("/multiselect",(req,res)=>{
    let city=req.body.city;
    let output={status:0,content:[]};
    let demand="select pincode,area,city from country where city=?";
    let fill=[city];
    connection.query(demand,fill,(err,rset)=>{
        if(err){
            console.log(err);
        }
        else{
            if(rset.length===0)
            {res.send(output);}
            else{
                output.status=1;
                output.content=rset;
                res.send(output);
                console.log(rset);
            }
        }
    });
});


app.get("/areaselect",(req,res)=>{
    let area=req.query.area;
    let output={status:0,content:[]};
    let demand="select pincode,area,city from country where area=?";
    let fill=[area];
    connection.query(demand,fill,(err,rset)=>{
        if(err){
            console.log(err);
        }
        else{
            if(rset.length===0)
            {res.send(output);}
            else{
                output.status=1;
                output.content=rset;
                res.send(output);
                console.log(rset);
            }
        }
    });
});