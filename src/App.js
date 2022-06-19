import React, {useState}from 'react'
import ReactDOM from 'react-dom'
import "bootstrap/dist/css/bootstrap.min.css"
import MainPage from './pages/main.js'
import NewExpense from './pages/newExpense.js'
import NewTask from './pages/newTask.js'
import NewPerson from './pages/newPerson.js'
import ScrollToTop from './pages/wrapper.js'
import Login from './pages/login.js'
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import { TableCostIncrement, TableTaskIncrement, TablePersonIncrement } from './functions/tableIncrement.js'
import { TableDelete } from './functions/tableDelete.js'


function App() {

  const [tableCostTitle,setTableCostTitle]=useState(['Item Type','Item','Date','Unit Cost','Units','Total Cost']);
  const [tableCostContent, setTableCostContent]=useState([ 
  {type:'metal',name:'steal',date:'',unitCost:'10/kg', units:'10kg', totalCost:'100', },
  {type:'metal',name:'aluminium',date:'',unitCost:'20/kg', units:'10kg', totalCost:'200', }])

  const [tableTimeTitle, setTableTimeTitle]=useState([ 'Task Name','Task Description','People involved','Prerequisite Task','Duration(with Date)', 'Remark'])
  const [tableTimeContent, setTableTimeContent]=useState([
    {name:'Kick-out meeting',description:'discuss proposal with all project managers',people:'',prerequisite:'none', duration:'5 hours', remark:''},
    {name:'Building foundation',description:'important', people:' ',prerequisite:'design of the foundation must be done', duration:'5 months', remark:''},
  ])

  const [tableHRTitle, setTableHRTitle]=useState([ 'Name','IC Number','Phone Number','E-mail','Department','Role']);
  const [tableHRContent, setTableHRContent]=useState([
    {name:'Amy',ic:'T1234567A',phone:'12345678',email:'123@gmail.com',department:'finance',role:'accountant'},
    {name:'Lisa',ic:'T1234567B',phone:'87654321',email:'321@gmail.com',department:'management commitee',role:'project leader'},
  ])


  return (
      <Router>
      <ScrollToTop>
        <div className="App">
          <header className="App-header">
            <Routes>
              <Route path='/' element={<Login />}/>
              <Route path='/main' element={<MainPage 
              tableCostTitle={tableCostTitle} tableCostContent={tableCostContent} 
              tableTimeTitle={tableTimeTitle} tableTimeContent={tableTimeContent}
              tableHRTitle={tableHRTitle} tableHRContent={tableHRContent}
              onDeleteCost={(name)=>setTableCostContent(TableDelete(tableCostContent, name))}
              onDeleteTask={(name)=>setTableTimeContent(TableDelete(tableTimeContent, name))}
              onDeletePerson={(name)=>setTableHRContent(TableDelete(tableHRContent, name))}
              />}/>
              <Route path='/main/expense' element={<NewExpense 
              onIncrementCost={(typeParam, nameParam, dateParam, unitCostParam, unitsParam, totalCostParam)=>
              {setTableCostContent(TableCostIncrement(tableCostContent, typeParam, nameParam, dateParam, unitCostParam, unitsParam, totalCostParam))}}/>}/>
              <Route path='/main/task' element={<NewTask 
              onIncrementTask={(nameParam,descriptionParam,durationParam,preParam,memberParam,remarkParam)=>
              {setTableTimeContent(TableTaskIncrement(tableTimeContent,nameParam,descriptionParam,durationParam,preParam,memberParam,remarkParam))}}/>}/>
              <Route path='/main/person' element={<NewPerson 
              onIncrementPerson={(nameParam, icParam, phoneParam, emailParam, departmentParam, roleParam)=>
              {setTableHRContent(TablePersonIncrement(tableHRContent, nameParam, icParam, phoneParam, emailParam, departmentParam, roleParam))}}/>}/>
            </Routes>
          </header>
        </div>
        </ScrollToTop>
      </Router>  
  );
}

export default App;

// const express = require("express");
// const app = express();
  
// app.get("/post", (req, res) => {
//   res.send("Connect to react");
//   res.redirect('/');
// });
  
// const PORT = process.env.PORT || 8080;
  
// app.listen(PORT, console.log(`Server started on port ${PORT}`));