import React from 'react'
import ReactDOM from 'react-dom'
import './../styles/confirmation.css'
import {Logout} from './../functions/logout.js'
import {
    Link, Router
  } from "react-router-dom";

class Confirmation extends React.Component{

    render(){
        return(
            <div className='confirmationBox' style={{display:this.props.confirmDisplayStatus}}>
                <div className="confirmation">
                    <span>Are you sure you wish to logout?</span>
                    <div className='options'>
                        <button className='btn' onClick={()=>{this.props.setConfirmDisplayStatus('none')}}>NO</button>
                        <Link to='/' className='btn' onClick={()=>{Logout(this.props.setID, this.props.setUsername, this.props.setPassword, this.props.setLoginStatus, 
                        this.props.setDisplayStatus); this.props.setConfirmDisplayStatus('none')}}>YES</Link>
                       
                    </div>
                </div>
            </div>
        );
    };
}

export default Confirmation;