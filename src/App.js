import React, { useState } from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import MainPage from "./pages/main.js";
import NewExpense from "./pages/newExpense.js";
import NewTask from "./pages/newTask.js";
import NewPerson from "./pages/newPerson.js";
import ScrollToTop from "./pages/wrapper.js";
import Login from "./pages/login.js";
import SummaryInput from './pages/summary.js'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Axios from "axios";

/**
 * @file: App.js
 * @author: wenxin
 * 
 * This is the main app function of the react project. 
 * This is the component that will be rendered, all other components are within this component. 
 * It contains several react routes: login, mainpage, newexpense, newtask, newperson
 * 
 * @returns react-dom
 */

function App() {
  const [tableCostTitle, setTableCostTitle] = useState([
    "Item Type",
    "Item",
    "Date",
    "Unit Cost/unit",
    "Units",
    "Total Cost",
  ]);
  const [tableCostContent, setTableCostContent] = useState([]);

  const [tableTimeTitle, setTableTimeTitle] = useState([
    "Task Name",
    "Task Description",
    "People involved",
    "Prerequisite Task",
    "Date",
    "Remark",
  ]);
  const [tableTimeContent, setTableTimeContent] = useState([]);

  const [tableHRTitle, setTableHRTitle] = useState([
    "Name",
    "IC Number",
    "Phone Number",
    "E-mail",
    "Department",
    "Role",
  ]);
  const [tableHRContent, setTableHRContent] = useState([]);

  const [usernameReg, setUsernameReg] = useState("");
  const [passwordReg, setPasswordReg] = useState("");
  const [emailReg, setEmailReg] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginStatus, setLoginStatus] = useState("");
  const [displayStatus, setDisplayStatus] = useState("none");
  const [id, setID] = useState("");

  const [totalCost, setTotalCost] = useState("");
  const [budget, setBudget] = useState("");
  const [totalDuration, setTotalDuration] = useState("");

  const [issue, setIssue] = useState("");
  const [solution, setSolution] = useState("");
  const [stakeholder, setStakeholder] = useState("");
  const [outcome, setOutcome] = useState("");

  const changeUsernameReg = (event) => {
    setUsernameReg(event.target.value);
  };

  const changePasswordReg = (event) => {
    setPasswordReg(event.target.value);
  };

  const changeEmailReg = (event) => {
    setEmailReg(event.target.value);
  };

  const changeUsername = (event) => {
    setUsername(event.target.value);
  };

  const changePassword = (event) => {
    setPassword(event.target.value);
  };

  /**
   * @file: App.js
   * @author: wenxin
   * 
   * Upon clicking on register button, a backend post request api with route /register is called. 
   * Data will be passed to backend and inserted into database. 
   * 
   * @param {in} event 
   */
  
  const register = (event) => {
    event.preventDefault();
    Axios.post("/register", {
      username: usernameReg,
      password: passwordReg,
      email: emailReg,
    });
  };

  /**
   * @file: App.js
   * @author: wenxin
   * 
   * Upon clicking on login button, a backend post request api with rooute /login is called. 
   * Data will be passed to backend. 
   * If matching data is found in the database, the accounts exists and users can login. 
   * Otherwise, the account does not exist and users cannot login. 
   * 
   * @param {in} event 
   */
  
  const login = (event) => {
    event.preventDefault();
    Axios.post("/login", {
      // method:"post",
      username: username,
      password: password,
      // headers: { 'content-type': 'application/x-www-form-urlencoded' }
    }).then((response) => {
      console.log(response);
      console.log(response.data);
      if (response.data.message) {
        setLoginStatus(response.data.message);
        setDisplayStatus("none");
      } else {
        setLoginStatus("Welcom back, " + response.data[0].username);
        setID(response.data[0].id);
        setDisplayStatus("block");
      }
    });
  };

  return (
    <Router>
      <ScrollToTop>
        <div className="App">
          <header className="App-header">
            <Routes>
              <Route
                path="/"
                element={
                  <Login
                    displayStatus={displayStatus}
                    loginStatus={loginStatus}
                    usernameReg={usernameReg}
                    changeUsernameReg={changeUsernameReg}
                    passwordReg={passwordReg}
                    changePasswordReg={changePasswordReg}
                    emailReg={emailReg}
                    changeEmailReg={changeEmailReg}
                    username={username}
                    changeUsername={changeUsername}
                    password={password}
                    changePassword={changePassword}
                    register={register}
                    login={login}
                  />
                }
              />
              <Route
                path="/main"
                element={
                  <MainPage
                    tableCostTitle={tableCostTitle}
                    tableTimeTitle={tableTimeTitle}
                    tableHRTitle={tableHRTitle}
                    id={id}
                    username={username}
                    tableCostContent={tableCostContent}
                    setTableCostContent={setTableCostContent}
                    tableTimeContent={tableTimeContent}
                    setTableTimeContent={setTableTimeContent}
                    tableHRContent={tableHRContent}
                    setTableHRContent={setTableHRContent}
                    totalCost={totalCost}
                    setTotalCost={setTotalCost}
                    budget={budget}
                    setBudget={setBudget}
                    totalDuration={totalDuration}
                    setTotalDuration={setTotalDuration}
                    setID={setID}
                    setUsername={setUsername}
                    setPassword={setPassword}
                    setDisplayStatus={setDisplayStatus}
                    setLoginStatus={setLoginStatus}
                    issue={issue}
                    setIssue={setIssue}
                    solution={solution}
                    setSolution={setSolution}
                    stakeholder={stakeholder}
                    setStakeholder={setStakeholder}
                    outcome={outcome}
                    setOutcome={setOutcome}
                  />
                }
              />
              <Route
                path="/main/expense"
                element={
                  <NewExpense
                    username={username}
                    id={id}
                    tableCostContent={tableCostContent}
                    setTableCostContent={setTableCostContent}
                    totalCost={totalCost}
                    setTotalCost={setTotalCost}
                    setID={setID}
                    setUsername={setUsername}
                    setPassword={setPassword}
                    setDisplayStatus={setDisplayStatus}
                    setLoginStatus={setLoginStatus}
                  />
                }
              />
              <Route
                path="/main/task"
                element={
                  <NewTask
                    username={username}
                    id={id}
                    tableTimeContent={tableTimeContent}
                    tableHRContent={tableHRContent}
                    setTableTimeContent={setTableTimeContent}
                    setID={setID}
                    setUsername={setUsername}
                    setPassword={setPassword}
                    setDisplayStatus={setDisplayStatus}
                    setLoginStatus={setLoginStatus}
                  />
                }
              />
              <Route
                path="/main/person"
                element={
                  <NewPerson
                    username={username}
                    id={id}
                    tableHRContent={tableHRContent}
                    setTableHRContent={setTableHRContent}
                    setID={setID}
                    setUsername={setUsername}
                    setPassword={setPassword}
                    setDisplayStatus={setDisplayStatus}
                    setLoginStatus={setLoginStatus}
                  />
                }
              />
               <Route
                path="/main/summary"
                element={
                  <SummaryInput
                    username={username}
                    id={id}
                    tableHRContent={tableHRContent}
                    setTableHRContent={setTableHRContent}
                    setID={setID}
                    setUsername={setUsername}
                    setPassword={setPassword}
                    setDisplayStatus={setDisplayStatus}
                    setLoginStatus={setLoginStatus}
                    issue={issue}
                    setIssue={setIssue}
                    solution={solution}
                    setSolution={setSolution}
                    stakeholder={stakeholder}
                    setStakeholder={setStakeholder}
                    outcome={outcome}
                    setOutcome={setOutcome}
                  />
                }
              />
            </Routes>
          </header>
        </div>
      </ScrollToTop>
    </Router>
  );
}

export default App;
