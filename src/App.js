import React, {useState}from 'react'
import ReactDOM from 'react-dom'
import "bootstrap/dist/css/bootstrap.min.css";
import MainPage from './pages/main.js'
import NewExpense from './pages/newExpense.js'
import NewTask from './pages/newTask.js'
import NewPerson from './pages/newPerson.js'
import ScrollToTop from './pages/wrapper.js';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

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

  function HandleIncrementCost(typeParam, nameParam, dateParam, unitCostParam, unitsParam, totalCostParam){
    const newCost = [...tableCostContent,
    {
      type:typeParam,
      name:nameParam,
      date:dateParam,
      unitCost:unitCostParam,
      units:unitsParam,
      totalCost:totalCostParam,
      
    }];
    setTableCostContent(newCost)
  }
  
  function HandleIncrementTask(nameParam,descriptionParam,durationParam,preParam,memberParam,remarkParam){
    const newTask = [...tableTimeContent,
    {
      name:nameParam,
      description:descriptionParam,
      people:memberParam,
      prerequisite:preParam,
      duration:durationParam,

      remark:remarkParam,
    }]
    setTableTimeContent(newTask);
  }

  function HandleIncrementPerson(nameParam, icParam, phoneParam, emailParam, departmentParam, roleParam){
    const newPerson = [...tableHRContent,
    {
      name:nameParam,
      ic:icParam,
      phone:phoneParam,
      email:emailParam,
      department:departmentParam,
      role:roleParam
    }]
    setTableHRContent(newPerson);
  }

  function HandleRemoveCostItem(name){
    console.log(name);
    const newCost = tableCostContent.filter((item)=>item.name!==name);
    setTableCostContent(newCost);
  }

  function HandleRemoveTaskItem(name){
    const newTask = tableTimeContent.filter((item)=>item.name!==name);
    setTableTimeContent(newTask);
  }

  function HandleRemovePersonItem(name){
    const newPerson = tableHRContent.filter((item)=>item.name!==name);
    setTableHRContent(newPerson);
  }

  return (
      <Router>
      <ScrollToTop>
        <div className="App">
          <header className="App-header">
            <Routes>
              <Route path='/' element={<MainPage 
              tableCostTitle={tableCostTitle} tableCostContent={tableCostContent} 
              tableTimeTitle={tableTimeTitle} tableTimeContent={tableTimeContent}
              tableHRTitle={tableHRTitle} tableHRContent={tableHRContent}
              onDeleteCost={HandleRemoveCostItem}
              onDeleteTask={HandleRemoveTaskItem}
              onDeletePerson={HandleRemovePersonItem}
              />}/>
              <Route path='expense' element={<NewExpense onIncrementCost={HandleIncrementCost}/>}/>
              <Route path='task' element={<NewTask onIncrementTask={HandleIncrementTask}/>}/>
              <Route path='person' element={<NewPerson onIncrementPerson={HandleIncrementPerson}/>}/>
            </Routes>
          </header>
        </div>
        </ScrollToTop>
      </Router>  
  );
}

export default App;
