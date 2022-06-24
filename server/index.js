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
	const id = req.body.id

	db.query("INSERT INTO wenxincost (itemtype, item, date, unitcost, units, totalcost, id) VALUES (?,?,?,?,?,?,?)",
	[itemType, item, date, unitCost, units, totalCost, id],
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
	const id = req.body.id;

	db.query("INSERT INTO wenxintask (taskname, taskdescription, peopleinvolved, prerequisitetask, duration, remark, id) VALUES (?,?,?,?,?,?,?)",
	[taskName, taskDescription, peopleInvolved, prerequisiteTask, duration, remark, id],
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
	const id = req.body.id;

	db.query("INSERT INTO wenxinhr (name, ic, phoneNumber, email, department, role, id) VALUES (?,?,?,?,?,?,?)",
	[name, ic, phoneNumber, email, department, role, id],
	(err,result)=>{
		if(err){
			res.send({err:err});
		}
		if(result){
			res.send(result);
		}
	});
})

app.post("/addSummary",(req,res)=>{
	const issue = req.body.issue;
	const solution = req.body.solution;
	const stakeholders = req.body.stakeholers;
	const outcome = req.body.outcome;
	const id = req.body.id;
	
	db.query("INSERT INTO summary (id, issue, solution, stakeholders, outcome) VALUES (?,?,?,?,?) ON DUPLICATE KAY UPDATE issue=?, solution=?, stakeholders=?, outcome=?",
	
	[id, issue, solution, stakeholders, outcome, issue, solution, stakeholders, outcome],
	(err,result)=>{
		if(err){
			res.send({err:err});
		}
		if(result){
			res.send(result);
		}
	});
})

app.post("/getCost", (req,res)=>{
	const id = req.body.id;

	db.query("SELECT itemtype, item, date, unitcost, units, totalcost FROM wenxincost WHERE id=?",
	[id],
	(err,result)=>{
		if(err){
			res.send({err:err});
		}
		if(result){
			res.send(result);
		}
	})
})

app.post("/getTask", (req,res)=>{
	const id = req.body.id;
	db.query("SELECT taskname, taskdescription, peopleinvolved, prerequisitetask, duration, remark FROM wenxinTask WHERE id=?",
	[id],
	(err,result)=>{
		if(err){
			res.send({err:err});
		}
		if(result){
			res.send(result);
		}
	})
})

app.post("/getHR", (req,res)=>{
	const id = req.body.id;
	db.query("SELECT name, ic, phonenumber, email, department, role FROM wenxinHR WHERE id=?",
	[id],
	(err,result)=>{
		if(err){
			res.send({err:err});
		}
		if(result){
			res.send(result);
		}
	})
})

app.post("/getSummary", (req,res)=>{
	const id = req.body.id;
	db.query("SELECT issue, solution, stakeholders, outcome FROM summary WHERE id=?",
	[id],
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
	const id = req.body.id;
   
	db.query("DELETE FROM wenxincost WHERE itemType=? and item=? and date=? and unitCost=? and units=? and totalCost=? and id=?",
	[itemType, item, date, unitCost, units, totalCost, id],
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
	const id = req.body.id;

	db.query("DELETE FROM wenxintask WHERE taskName=? AND taskDescription=? AND peopleInvolved=? AND prerequisiteTask=? AND duration=? AND remark=? AND id=?",
	[taskName, taskDescription, peopleInvolved, prerequisiteTask, duration, remark, id],
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
	const id = req.body.id;

	db.query("DELETE FROM wenxinhr WHERE name=? AND ic=? AND phoneNumber=? AND email=? AND department=? AND role=? AND id=?",
	[name, ic, phoneNumber, email, department, role, id],
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
	const username = req.body.username.username;
	const password = req.body.password.password;
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
		// if(result){
		// 	res.send(result);
		// }
	  }
	);
})

app.post('/main',(req, respond, next) => {
	respond.sendFile(path.join(__dirname, "..", "build", "index.html"));
 });

app.listen(5004, () => {
  console.log("server started on port 5004");
});