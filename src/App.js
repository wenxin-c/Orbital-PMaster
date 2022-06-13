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

  const [tableCostTitle,setTableCostTitle]=useState(['Item','Cost','Deadline']);
  const [tableCostContent, setTableCostContent]=useState([ 
  {name:'steal',cost:'100', deadline:''},
  {name:'concrete',cost:'500', deadline:""},
  {name:'wood',cost:'90', deadline:""}])

  const [tableTimeTitle, setTableTimeTitle]=useState([ 'Task Name','Task Description','Duration','Prerequisite Task','Members', 'Remark'])
  const [tableTimeContent, setTableTimeContent]=useState([
    {name:'Kick-out meeting',description:'discuss proposal with all project managers',duration:'5',prerequisite:'none', members:'', remark:''},
    {name:'Building foundation',description:'important',duration:'500',prerequisite:'design of the foundation must be done', members:'', remark:''},
    {name:'Electricity work',description:'including electricity wiring, installing ceiling fans',duration:'100',prerequisite:'structure of the building must be done' , members:'', remark:''}
  ])

  const [tableHRTitle, setTableHRTitle]=useState([ 'Name','Subgroup','Role']);
  const [tableHRContent, setTableHRContent]=useState([
    {name:'Amy',subgroup:'finance',role:'accountant'},
    {name:'Lisa',subgroup:'management committee',role:'project manager'},
    {name:'Ben',subgroup:'management committee',role:'cost manager'},
  ])

  function HandleIncrementCost(nameParam, dateParam, costParam){
    const newCost = [...tableCostContent,
    {
      name:nameParam,
      cost:costParam,
      deadline:dateParam,
    }];
    setTableCostContent(newCost)
  }
  
  function HandleIncrementTask(nameParam,descriptionParam,durationParam,preParam,memberParam,remarkParam){
    const newTask = [...tableTimeContent,
    {
      name:nameParam,
      description:descriptionParam,
      duration:durationParam,
      prerequisite:preParam,
      members:memberParam,
      remark:remarkParam,
    }]
    setTableTimeContent(newTask);
  }

  function HandleIncrementPerson(nameParam, subgroupParam, roleParam){
    const newPerson = [...tableHRContent,
    {
      name:nameParam,
      subgroup:subgroupParam,
      role:roleParam
    }]
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
