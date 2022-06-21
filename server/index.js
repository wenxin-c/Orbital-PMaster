const mysql = require('mysql');
const express = require("express");
const session = require('express-session');
const path = require("path");
const cors = require("cors");

const app = express(); // create express app

app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, "..", "build")));


const db = mysql.createConnection({
	host     : 'localhost',
	user     : 'root',
	password : '000825',
	database : 'nodelogin'
});

app.post("/register",(req,res)=>{

	const username = req.body.username;
	const password = req.body.password;
	const email = req.body.email;

	db.query("INSERT INTO accounts (username,password,email) VALUES (?,?,?)",
	[username, password, email], 
	(err,result)=>{console.log(err);}
	);
})

app.post("/addCost",(req,res)=>{
	const itemType = req.body.itemType;
	const item = req.body.item;
	const date = req.body.date;
	const unitCost = req.body.unitCost;
	const units = req.body.units;
	const totalCost = req.body.totalCost;

	db.query("INSERT INTO wenxincost (itemtype, item, date, unitcost, units, totalcost) VALUES (?,?,?,?,?,?)",
	[itemType, item, date, unitCost, units, totalCost],
	(err,result)=>{
		if(err){
			res.send({err:err});
		}
		if(result){
			res.send(result);
		}
	});
})

app.post("/addTask",(req,res)=>{
	const taskName = req.body.taskName;
	const taskDescription = req.body.taskDescription;
	const peopleInvolved = req.body.peopleInvolved;
	const prerequisiteTask = req.body.prerequisiteTask;
	const duration = req.body.duration;
	const remark = req.body.remark;

	db.query("INSERT INTO wenxintask (taskname, taskdescription, peopleinvolved, prerequisitetask, duration, remark) VALUES (?,?,?,?,?,?)",
	[taskName, taskDescription, peopleInvolved, prerequisiteTask, duration, remark],
	(err,result)=>{
		if(err){
			res.send({err:err});
		}
		if(result){
			res.send(result);
		}
	});
})

app.post("/addHR",(req,res)=>{
	const name = req.body.name;
	const ic = req.body.ic;
	const phoneNumber = req.body.phoneNumber;
	const email = req.body.email;
	const department = req.body.department;
	const role = req.body.role;

	db.query("INSERT INTO wenxinhr (name, ic, phoneNumber, email, department, role) VALUES (?,?,?,?,?,?)",
	[name, ic, phoneNumber, email, department, role],
	(err,result)=>{
		if(err){
			res.send({err:err});
		}
		if(result){
			res.send(result);
		}
	});
})

app.get("/getCost", (req,res)=>{
	db.query("SELECT * FROM wenxincost",
	(err,result)=>{
		if(err){
			res.send({err:err});
		}
		if(result){
			res.send(result);
		}
	})
})

app.get("/getTask", (req,res)=>{
	db.query("SELECT * FROM wenxinTask",
	(err,result)=>{
		if(err){
			res.send({err:err});
		}
		if(result){
			res.send(result);
		}
	})
})

app.get("/getHR", (req,res)=>{
	db.query("SELECT * FROM wenxinHR",
	(err,result)=>{
		if(err){
			res.send({err:err});
		}
		if(result){
			res.send(result);
		}
	})
})

app.post("/deleteCost", (req,res)=>{
	const itemType = req.body.itemType;
	const item = req.body.item;
	const date = req.body.date;
	const unitCost = req.body.unitCost;
	const units = req.body.units;
	const totalCost = req.body.totalCost;
    console.log(itemType, item, date, unitCost, units, totalCost);
	db.query("DELETE FROM wenxincost WHERE itemType=? and item=? and date=? and unitCost=? and units=? and totalCost=?",
	[itemType, item, date, unitCost, units, totalCost],
	(err,result)=>{
		if(err){
			res.send({err:err});
		}
		if(result){
			res.send(result);
		}
	});
})

app.post("/deleteTask", (req,res)=>{
	const taskName = req.body.taskName;
	const taskDescription = req.body.taskDescription;
	const peopleInvolved = req.body.peopleInvolved;
	const prerequisiteTask = req.body.prerequisiteTask;
	const duration = req.body.duration;
	const remark = req.body.remark;

	db.query("DELETE FROM wenxintask WHERE taskName=? AND taskDescription=? AND peopleInvolved=? AND prerequisiteTask=? AND duration=? AND remark=? ",
	[taskName, taskDescription, peopleInvolved, prerequisiteTask, duration, remark],
	(err,result)=>{
		if(err){
			res.send({err:err});
		}
		if(result){
			res.send(result);
		}
	});
})

app.post("/deleteHR", (req,res)=>{
	const name = req.body.name;
	const ic = req.body.ic;
	const phoneNumber = req.body.phoneNumber;
	const email = req.body.email;
	const department = req.body.department;
	const role = req.body.role;

	db.query("DELETE FROM wenxinhr WHERE name=? AND ic=? AND phoneNumber=? AND email=? AND department=? AND role=? ",
	[name, ic, phoneNumber, email, department, role],
	(err,result)=>{
		if(err){
			res.send({err:err});
		}
		if(result){
			res.send(result);
		}
	});
})


app.post("/login", (req,res)=>{
	const username = req.body.username;
	const password = req.body.password;
	// const email = req.body.email;
	db.query("SELECT * FROM accounts WHERE username=? AND password=?",
	[username, password], 
	
	(err,result)=>{
		if(err){
			res.send({err:err});
		}
		if(result.length>0){
			
			res.send(result)
		}else{
			res.send({message:"Wrong username or password, please try again!"})
		}
	  }
	);
})

app.post('/main',(req, respond, next) => {
	respond.sendFile(path.join(__dirname, "..", "build", "index.html"));
 });

app.listen(5004, () => {
  console.log("server started on port 5004");
});