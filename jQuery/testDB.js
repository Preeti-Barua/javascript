const express = require('express');

const bodyParser = require('body-parser');
const app = express();

app.use(express.static('./abc'));
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

app.post(("/insert"), (req, res) => {
    let empno = req.body.empno;
    let empname = req.body.empname;
    let deptid = req.body.deptid;
    let demand = "insert into emp values(?,?,?)";
    let fill = [empno, empname, deptid];
    let output = { status: 0, message: "" };
    connection.query(demand, fill, (err, rset) => {
        if (err) {
            console.log(err);
            output.message = "Duplicate Primary Key entry";
        }
        else {
            output.status = 1;
            output.message = "Operation successful";
        }
        res.send(output);
    });
});


app.post(("/update"), (req, res) => {
    let empno = req.body.empno;
    let deptid = req.body.deptid;
    let demand = "update emp set deptid=? where empno=?";
    let fill = [deptid, empno];
    let output = { status: 0, message: "" };
    connection.query(demand, fill, (err, rset) => {
        if (err) {
            console.log(err);
        }
        else {
            let rows = rset.affectedRows;
            if (rows === 0) {
                output.message = "No rows matched";
            }
            else {
                output.status = 1;
                output.message = "Operation successful";
            }
            res.send(output);
        }

    });


});


app.post(("/select"), (req, res) => {
    let empno = req.body.empno;
    let demand = "select * from emp where empno=?";
    let fill = [empno];
    let output = { status: 0, content: [] };
    connection.query(demand, fill, (err, rset) => {
        if (err) {
            console.log(err);

        }
        else {
            let rows = rset.affectedRows;
            if (rows === 0) {
                res.send(output);
            }
            else {
                output.status = 1;
                output.content = rset;
                res.send(output);
            }
        }
    });
});

app.post(("/swempname"), (req, res) => {
    let empname = req.body.empname;
    let demand = "select * from emp where empname=?";
    let fill = [empname];
    let output = { status: 0, content: [] };
    connection.query(demand, fill, (err, rset) => {
        if (err) {
            console.log(err);
        }
        else {
            let rows = rset.affectedRows;
            if (rows === 0) {
                res.send(output);
            }
            else {
                output.status = 1;
                output.content = rset;
                res.send(output);
            }
        }
    });
});

app.post(("/selectall"), (req, res) => {
    let demand = "select * from emp";
    let output = { status: 0, content: [] };
    connection.query(demand, (err, rset) => {
        if (err) {
            console.log(err);

        }
        else {
            let rows = rset.affectedRows;
            if (rows === 0) {
                res.send(output);
            }
            else {
                output.status = 1;
                output.content = rset;
                res.send(output);
            }
        }
    });
});