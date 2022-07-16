import React, {useState} from 'react'
import ReactDOM from 'react-dom'
import "bootstrap/dist/css/bootstrap.min.css";
import {FaUser, FaBars} from "react-icons/fa";
import Confirmation from './../componentsCommon/confirmation.js'

/**
 * @file: topNavBar.js
 * @author: wenxin
 * 
 * This is the top navigation bar of all pages. 
 * It contains a few icons and the logout button(a confirmation window will popup on click)
 * 
 * @param {in} props 
 * @returns react-dom
 */
function TopNavBar  (props)  {
  console.log(props);
  const [confirmDisplayStatus, setConfirmDisplayStatus]=useState("none");
 
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{position:'fixed', top:'0',left:'0', width:'100%', borderBottom:'0.5px solid #d0c9c9'}}>
      
      <div style={{marginRight:'5px', marginLeft:'80px'}}>
        <FaBars />
        <span style={{backgroundColor:'#f4b106', color:'#ffffff', fontSize:'18px',borderRadius:'6px',marginLeft:'10px', display:'inline-block'}}>Pm</span>
      </div>
      <a className="navbar-brand" href="#" style={{fontSize:'16px'}}>
        PMaster
      </a>
      <div style={{position:'absolute', right:'80px',top:'15px'}}>
        <FaUser/>
        <span style={{marginLeft:'10px', display:'inline'}}>{props.username}</span>
      </div>
      <span style={{position:'absolute', right:'14px', top:'15px', fontSize:'16px', borderLeft:'1px solid black', paddingLeft:'5px', color:'black', cursor:'pointer'}} onClick={()=>{setConfirmDisplayStatus("block")}}>
        Logout
      </span>
      <Confirmation 
      confirmDisplayStatus={confirmDisplayStatus}
      setConfirmDisplayStatus={setConfirmDisplayStatus}
      setID={props.setID} 
      setUsername={props.setUsername} 
      setPassword={props.setPassword} 
      setLoginStatus={props.setLoginStatus}
      setDisplayStatus={props.setDisplayStatus}/>
    </nav>
  );
};


export default TopNavBar;