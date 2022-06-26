import React from 'react'
import ReactDOM from 'react-dom'
import "bootstrap/dist/css/bootstrap.min.css";
import './../styles/login.css'
import { FaFacebook, FaTwitter, FaGoogle} from "react-icons/fa";
import {
     Link, Router
  } from "react-router-dom";
import Axios from 'axios';

class Login extends React.Component{

    render(){
        return(
            <div className='container'>
                 <div id="loginform">
                    <h2 id="headerTitle">Registration</h2>
                    <form >
                        <div class="row">
                            <label>Username</label>
                            <input onChange={(event)=>{this.props.changeUsernameReg(event)}} type="text" name="usernameReg" placeholder="Username" id="usernameReg" required/>
                        </div>  
                        <div class="row">
                            <label>Password</label>
                            <input onChange={(event)=>{this.props.changePasswordReg(event)}} type="password" name="passwordReg" placeholder="Password" id="passwordReg" required/>
                        </div>
                        <div class="row">
                            <label>Email</label>
                            <input onChange={(event)=>{this.props.changeEmailReg(event)}} type="text" name="emailReg" placeholder="Email" id="emailReg" required/>
                        </div>
                        <div id="button" class="row">
                            <input onClick={(event)=>{this.props.register(event); alert("You have registered your account successfully, you can proceed to login!");}} className='btn' type="submit" value="Submit"></input>
                        </div>
                    </form>
                </div>
                <div id="loginform">
                    <h2 id="headerTitle">Login</h2>
                    <form >
                        <div class="row">
                            <label>Username</label>
                            <input onChange={(event)=>{this.props.changeUsername(event)}} type="text" name="username" placeholder="Username" id="usernameLog" required/>
                        </div>  
                        <div class="row">
                            <label>Password</label>
                            <input onChange={(event)=>{this.props.changePassword(event)}} type="password" name="password" placeholder="Password" id="passwordLog" required/>
                        </div>  
                        <div id="button" class="row">
                            {/* <button>Log in</button> */}
                            {/* <Link to='main' className='btn'>Log in</Link> */}
                            <input onClick={(event)=>this.props.login(event)} className='btn' type="submit" value="Login"></input>
                        </div>
                    </form>
                </div>
                <div className='login' >
                    <h1>{this.props.loginStatus}</h1>
                    
                        <Link to='/main' className='navLink' style={{display:this.props.displayStatus}}>Click to proceed</Link>
                    
                    
                </div>
            </div>
        );
    }
}

export default Login;


