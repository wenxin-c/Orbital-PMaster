import React from 'react'
import ReactDOM from 'react-dom'
import "bootstrap/dist/css/bootstrap.min.css";
import {FaUser, FaBars} from "react-icons/fa";

const TopNavBar = () => {
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
        <span style={{marginLeft:'10px', display:'inline'}}>Username</span>
      </div>
    </nav>
  );
};


export default TopNavBar;