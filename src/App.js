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
// import Axios from 'axios';
const Axios = require('axios').default;

function App() {

  const [tableCostTitle,setTableCostTitle]=useState(['Item Type','Item','Date','Unit Cost/unit','Units','Total Cost']);

  const [tableTimeTitle, setTableTimeTitle]=useState([ 'Task Name','Task Description','People involved','Prerequisite Task','Duration(with Date)', 'Remark']);

  const [tableHRTitle, setTableHRTitle]=useState([ 'Name','IC Number','Phone Number','E-mail','Department','Role']);

  const [usernameReg, setUsernameReg]=useState("");
  const [passwordReg, setPasswordReg]=useState("");
  const [emailReg, setEmailReg]=useState("");
  const [username, setUsername]=useState("");
  const [password, setPassword]=useState("");
  const [loginStatus, setLoginStatus]=useState("");
  const [displayStatus, setDisplayStatus]=useState("none");
  const [id, setID]=useState("");
 
  const changeUsernameReg =(event)=>{
    setUsernameReg(event.target.value)
  }

  const changePasswordReg=(event)=>{
    setPasswordReg(event.target.value)
  }

  const changeEmailReg=(event)=>{
    setEmailReg(event.target.value)
  }

  const changeUsername=(event)=>{
    setUsername(event.target.value)
  }

  const changePassword=(event)=>{
    setPassword(event.target.value)
  }
  
  const register =(event)=>{
    event.preventDefault()
    Axios.post("/register",{
        username:usernameReg,
        password:passwordReg,
        email:emailReg,
    })
  }

  // const login = async (event)=>{
  //   event.preventDefault();
  //   try{
  //   await fetch(`/api/login/${username}/${password}`,{
  //     method:"GET",
  //     headers: { 
  //       "Content-Type": "application/json",
  //       'Accept': 'application/json'
  //      },
  //     redirect: "follow"
  //   }).then(response=>
  //     response.json()
  //   ).then(data=>{
  //     console.log(data);
  //     if(data.message){
  //         setLoginStatus(data.message)
  //         setDisplayStatus('none')
  //     }else{
  //         setLoginStatus('Welcom back, '+data[0].username);
  //         setID(data[0].id);
  //         setDisplayStatus('block');
  //     }
  //   }
  //   );
    
  //   }catch(err){
  //     console.log("Here is an error!!")
  //     console.error(err.message);
  //   }
  // }

  const login =(event)=>{
    event.preventDefault()
    Axios.post("/login",{
        // method:"post",
        username:username,
        password:password,
        // headers: { 'content-type': 'application/x-www-form-urlencoded' }
    }).then((response)=>{
        console.log(response);
        console.log(response.data)
        if(response.data.message){
            setLoginStatus(response.data.message)
            setDisplayStatus('none')
        }else{
            setLoginStatus('Welcom back, '+response.data[0].username);
            setID(response.data[0].id);
            setDisplayStatus('block');
        }
    })
  }

  
  return (
      <Router >
      <ScrollToTop>
        <div className="App">
          <header className="App-header">
            <Routes>
              <Route path='/' element={<Login 
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
              />}/>
              <Route path='/main' element={<MainPage 
              tableCostTitle={tableCostTitle}  
              tableTimeTitle={tableTimeTitle} 
              tableHRTitle={tableHRTitle} 
              id={id}
              username={username}
              />}/>
              <Route path='/main/expense' element={<NewExpense  username={username} id={id}/>}/>
              <Route path='/main/task' element={<NewTask username={username} id={id}/>}/>
              <Route path='/main/person' element={<NewPerson username={username} id={id}/>}/>
            </Routes>
          </header>
        </div>
        </ScrollToTop>
      </Router>  
  );
}

export default App;
