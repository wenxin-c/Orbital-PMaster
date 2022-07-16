const mysql = require('mysql');
const express = require("express");
const path = require("path");
const cors = require("cors");
const PORT =  process.env.PORT || 5003;

const app = express(); // create express app

app.use(cors());
app.use(express.json());

// Setting up backend server
// Setup API that communicate and send data between frontend and backend
// Connect to database
// Backend server use query to add/delete/retrieve/manipulate data in database

// Production database

// const db = mysql.createPool({
// 	host:'us-cdbr-east-06.cleardb.net',
//     user:'b94bbcf7e05710',
//     password:'5dd2521b',
//     database:'heroku_00e579b1950659a'
// });

// Local database

const db = mysql.createConnection({
	host     : 'localhost',
	user     : 'root',
	password : '000825',
	database : 'nodelogin'
});

// Backend API

// register, insert user input into database
app.post("/register",(req,res)=>{

	const username = req.body.username;
	const password = req.body.password;
	const email = req.body.email;

	db.query("INSERT INTO accounts (username,password,email) VALUES (?,?,?)",
	[username, password, email], 
	(err,result)=>{console.log(err);}
	);
})

// insert new cost items into database table cost
app.post("/addCost",(req,res)=>{
	const itemType = req.body.itemType;
	const item = req.body.item;
	const date = req.body.date;
	const unitCost = req.body.unitCost;
	const units = req.body.units;
	const totalCost = req.body.totalCost;
	const id = req.body.id

	db.query("INSERT INTO cost (itemtype, item, date, unitcost, units, totalcost, id) VALUES (?,?,?,?,?,?,?)",
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

//insert new tasks into database table task
app.post("/addTask",(req,res)=>{
	const taskName = req.body.taskName;
	const taskDescription = req.body.taskDescription;
	const peopleInvolved = req.body.peopleInvolved;
	const prerequisiteTask = req.body.prerequisiteTask;
	const duration = req.body.duration;
	const remark = req.body.remark;
	const id = req.body.id;

	db.query("INSERT INTO task (taskname, taskdescription, peopleinvolved, prerequisitetask, duration, remark, id) VALUES (?,?,?,?,?,?,?)",
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

// insert new personnel information into table hr
app.post("/addHR",(req,res)=>{
	const name = req.body.name;
	const ic = req.body.ic;
	const phoneNumber = req.body.phoneNumber;
	const email = req.body.email;
	const department = req.body.department;
	const role = req.body.role;
	const id = req.body.id;

	db.query("INSERT INTO hr (name, ic, phoneNumber, email, department, role, id) VALUES (?,?,?,?,?,?,?)",
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

//save summary content into database table summary
app.post("/addSummary",(req,res)=>{
	const issue = req.body.issue;
	const solution = req.body.solution;
	const stakeholders = req.body.stakeholers;
	const outcome = req.body.outcome;
	const id = req.body.id;
	
	db.query("INSERT INTO summary (issue, solution, stakeholders, outcome, id) VALUES (?,?,?,?,?) ",
	
	[issue, solution, stakeholders, outcome, id],
	(err,result)=>{
		if(err){
			res.send({err:err});
		}
		if(result){
			res.send(result);
		}
	});
})

//save budget input into database table budgetplan
app.post("/addBudget", (req,res)=>{
	const budget = req.body.budget;
	const id = req.body.id;
	
	db.query("INSERT INTO budgetplan (budget, id) VALUES (?,?) ",
	
	[budget, id],
	(err,result)=>{
		if(err){
			res.send({err:err});
		}
		if(result){
			res.send(result);
		}
	});
})

//save duration input into database table durationPlan
app.post("/addDuration", (req,res)=>{
	const duration = req.body.duration;
	const id = req.body.id;
	
	db.query("INSERT INTO durationplan (duration, id) VALUES (?,?) ",
	
	[duration, id],
	(err,result)=>{
		if(err){
			res.send({err:err});
		}
		if(result){
			res.send(result);
		}
	});
})

//retrieve all cost items that belong to a particular id and send to frontend to generate cost table
app.post("/getCost", (req,res)=>{
	const id = req.body.id;

	db.query("SELECT itemtype, item, date, unitcost, units, totalcost FROM cost WHERE id=?",
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

// retrieve all tasks that belong to a particular id and send to frontend to generate task table
app.post("/getTask", (req,res)=>{
	const id = req.body.id;
	db.query("SELECT taskname, taskdescription, peopleinvolved, prerequisitetask, duration, remark FROM task WHERE id=?",
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

// retrieve all personnel information that belong to a particular id and send to frontend to generate human resource table
app.post("/getHR", (req,res)=>{
	const id = req.body.id;
	db.query("SELECT name, ic, phonenumber, email, department, role FROM hr WHERE id=?",
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

// retrieve summary content from database and send to frontend for display
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

// retrieve budget from database and send to frontend for display
app.post("/getBudget", (req,res)=>{
	const id = req.body.id;
	db.query("SELECT budget FROM budgetplan WHERE id=?",
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

//calculate the total cost of all the cost items and send to frontend for display
app.post("/getTotalCost", (req,res)=>{
	const id = req.body.id;
	db.query(" SELECT SUM(totalcost) AS totalCost FROM cost WHERE id=?",
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

// retrieve total duration of the project from database and send to frontend for display
app.post("/getDuration", (req,res)=>{
	const id = req.body.id;
	db.query("SELECT duration FROM durationplan WHERE id=?",
	[id],
	(err,result)=>{
		if(err){
			res.send({err:err});
		}
		if(result){
			// console.log(result);
			res.send(result);

		}
	})
})

// delete a row of cost item from database table cost
app.post("/deleteCost", (req,res)=>{
	const itemType = req.body.itemType;
	const item = req.body.item;
	const date = req.body.date;
	const unitCost = req.body.unitCost;
	const units = req.body.units;
	const totalCost = req.body.totalCost;
	const id = req.body.id;
 
	db.query("DELETE FROM cost WHERE itemType=? and item=? and unitCost=? and units=? and totalCost=? and id=?",
	[itemType, item, unitCost, units, totalCost, id],
	(err,result)=>{
		if(err){
			res.send({err:err});
		}
		if(result){
			console.log(result);
			res.send(result);

		}
	});
})

// delete a row of activity from database table task
app.post("/deleteTask", (req,res)=>{
	const taskName = req.body.taskName;
	const taskDescription = req.body.taskDescription;
	const peopleInvolved = req.body.peopleInvolved;
	const prerequisiteTask = req.body.prerequisiteTask;
	const duration = req.body.duration;
	const remark = req.body.remark;
	const id = req.body.id;

	db.query("DELETE FROM task WHERE taskName=? AND taskDescription=? AND peopleInvolved=? AND prerequisiteTask=? AND  remark=? AND id=?",
	[taskName, taskDescription, peopleInvolved, prerequisiteTask, remark, id],
	(err,result)=>{
		if(err){
			res.send({err:err});
		}
		if(result){
			res.send(result);
		}
	});
})

// delete a row of personnel information from database table hr
app.post("/deleteHR", (req,res)=>{
	const name = req.body.name;
	const ic = req.body.ic;
	const phoneNumber = req.body.phoneNumber;
	const email = req.body.email;
	const department = req.body.department;
	const role = req.body.role;
	const id = req.body.id;

	db.query("DELETE FROM hr WHERE name=? AND ic=? AND phoneNumber=? AND email=? AND department=? AND role=? AND id=?",
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

// get unit cost of selected types of items
app.post("/getDetail", (req,res)=>{
	const userInput = req.body.userInput;
	
	db.query("SELECT * FROM costdetail WHERE itemtype=? OR itemname=?",
	[userInput, userInput],
	(err,result)=>{
		
		if(err){
			res.send({err:err});
		}
		if(result){
			res.send(result);
		}
	})
})

// login, check whether user input can match information in the database
// if matches, this account exists, otherwise, this account doesn't exist
app.post("/login", (req,res)=>{
	const username = req.body.username;
	const password = req.body.password;

	db.query("SELECT * FROM accounts WHERE username=? and password=?",
	[username, password], 
	
	(err,result)=>{
		if(err){
			res.send({err:err});
		}
		if(result.length>0){
			res.send(result)
		}else{
			res.send({message:"Wrong credentials, please try again!"})
		}
	  }
	);
})

// server static react files to frontend

app.use(express.static(path.join(__dirname, "../react-app/build")))
// app.use(express.static(path.join(__dirname, "/public")));

app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname + '../react-app/build/index.html'))
	// res.sendFile(path.join(__dirname + '/public/index.html'))
  })


app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});