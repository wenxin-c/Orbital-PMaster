import React from 'react'
import ReactDOM from 'react-dom'
import "bootstrap/dist/css/bootstrap.min.css";
import './../styles/login.css'
import { FaFacebook, FaTwitter, FaGoogle} from "react-icons/fa";
import {
     Link, Navigate,
  } from "react-router-dom";
import Axios from 'axios';

class Login extends React.Component{
    state={
        usernameReg:"",
        passwordReg:"",
        emailReg:"",
        username:"",
        password:"",
        loginStatus:"",
    }

    register =(event)=>{
        event.preventDefault()
        Axios.post("http://localhost:5004/register",{
            username:this.state.usernameReg,
            password:this.state.passwordReg,
            email:this.state.emailReg,
        })
    }

    login =(event)=>{
        event.preventDefault()
        Axios.post("http://localhost:5004/login",{
            username:this.state.username,
            password:this.state.password,
        }).then((response)=>{
            console.log(response);
            console.log(response.data)
            if(response.data.message){
                this.setState({loginStatus:response.data.message})
            }else{
                this.setState({loginStatus:response.data[0].username});
                // if(this.state.loginStatus){
                //    <Navigate from='*' to='/main'/>
                // }
            }
        })
    }

    render(){
        
        return(
            <div className='container'>
                 <div id="loginform">
                    <h2 id="headerTitle">Registration</h2>
                    <form >
                        <div class="row">
                            <label>Username</label>
                            <input onChange={(e)=>{this.setState({usernameReg:e.target.value})}} type="text" name="usernameReg" placeholder="Username" id="usernameReg" required/>
                        </div>  
                        <div class="row">
                            <label>Password</label>
                            <input onChange={(e)=>{this.setState({passwordReg:e.target.value})}} type="password" name="passwordReg" placeholder="Password" id="passwordReg" required/>
                        </div>
                        <div class="row">
                            <label>Email</label>
                            <input onChange={(e)=>{this.setState({emailReg:e.target.value})}} type="text" name="emailReg" placeholder="Email" id="emailReg" required/>
                        </div>
                        <div id="button" class="row">
                            <input onClick={this.register} className='btn' type="submit" value="Submit"></input>
                        </div>
                    </form>
                </div>
                <div id="loginform">
                    <h2 id="headerTitle">Login</h2>
                    <form >
                        <div class="row">
                            <label>Username</label>
                            <input onChange={(e)=>{this.setState({username:e.target.value})}} type="text" name="username" placeholder="Username" id="usernameLog" required/>
                        </div>  
                        <div class="row">
                            <label>Password</label>
                            <input onChange={(e)=>{this.setState({password:e.target.value})}} type="password" name="password" placeholder="Password" id="passwordLog" required/>
                        </div>  
                        <div id="button" class="row">
                            {/* <button>Log in</button> */}
                            {/* <Link to='main' className='btn'>Log in</Link> */}
                            <input onClick={this.login} className='btn' type="submit" value="Login"></input>
                        </div>
                    </form>
                    {/* <div id="alternativeLogin">
                        <label>Or sign in with:</label>
                        <div id="iconGroup">
                            <a href="#" id="facebookIcon"><FaFacebook className='logoFacebook'/></a>
                            <a href="#" id="twitterIcon"><FaTwitter className='logoTwitter'/></a>
                            <a href="#" id="googleIcon"><FaGoogle className='logoGoogle'/></a>
                        </div>
                    </div> */}
                </div>
                <h1>{this.state.loginStatus}</h1>
            </div>
        );
    }
}

export default Login;


