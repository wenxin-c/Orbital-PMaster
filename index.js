const mysql = require('mysql');
const express = require("express");
const path = require("path");
const cors = require("cors");
const PORT =  process.env.PORT || 5003;

const app = express(); // create express app

app.use(express.json());
app.use(cors());

// app.use(express.static(path.join(__dirname, "/public")));
// app.use(express.static(path.join(__dirname, "..", "build")));

const db = mysql.createPool({
    host:'us-cdbr-east-05.cleardb.net',
    user:'bd2b48a64c73c1',
    password:'94bb7a5d',
    database:'heroku_f8d453ebec76bec'
});

// const db = mysql.createConnection({
// 	host     : 'localhost',
// 	user     : 'root',
// 	password : '000825',
// 	database : 'nodelogin'
// });

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

app.post("/getDuration", (req,res)=>{
	const id = req.body.id;
	db.query("SELECT duration FROM durationplan WHERE id=?",
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
   
	db.query("DELETE FROM cost WHERE itemType=? and item=? and date=? and unitCost=? and units=? and totalCost=? and id=?",
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

	db.query("DELETE FROM task WHERE taskName=? AND taskDescription=? AND peopleInvolved=? AND prerequisiteTask=? AND duration=? AND remark=? AND id=?",
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

// app.get("/api/login/:username/:password", async(req,res)=>{
//     try {
//         const username = req.params.username;
// 		const password = req.params.password;
//         await db.query("SELECT * FROM accounts WHERE username=? and password=?", 
//         [username, password],
// 		(err,result)=>{
// 			if(err){
// 				console.log(err)
// 				res.send({err:err});
// 			}
// 			if(result.length>0){
// 				res.send(result)
// 			}else{
// 				res.send({message:"Wrong username or password, please try again!"})
// 			}
// 			// if(result){
// 			// 	console.log(result);
// 			// }
// 		}
//         );
// 		// console.log(username);
// 		// console.log(password);
//     } catch (error) {
//         console.error(error.message);
//     }
// });

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
			res.send({message:"Wrong username or password, please try again!"})
		}
	  }
	);
})

// app.post('/main',(req, respond, next) => {
// 	respond.sendFile(path.join(__dirname, "/public", "index.html"));
// 	// respond.sendFile(path.join(__dirname, "..", "build", "index.html"));
//  });
if(process.env.NODE_ENV === "production"){
	app.use(express.static(path.join(__dirname, "/public")));
};
// else{
// 	app.use(express.static(path.join(__dirname, "..", "build")));
// }

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});