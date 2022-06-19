import React from 'react'
import ReactDOM from 'react-dom'
import "bootstrap/dist/css/bootstrap.min.css";
import './../styles/login.css'
import { FaFacebook, FaTwitter, FaGoogle} from "react-icons/fa";
import {
    Link,
  } from "react-router-dom";

class Login extends React.Component{
    render(){
        return(
            <div className='container'>
                 <div id="loginform">
                    <h2 id="headerTitle">Registration</h2>
                    <form action='/auth' method='post'>
                        <div class="row">
                            <label>Username</label>
                            <input type="text" name="username" placeholder="Username" id="username" required/>
                        </div>  
                        <div class="row">
                            <label>Password</label>
                            <input type="password" name="password" placeholder="Password" id="password" required/>
                        </div>
                        <div class="row">
                            <label>Email</label>
                            <input type="text" name="email" placeholder="Email" id="email" required/>
                        </div>
                        <div id="button" class="row">
                            <input className='btn' type="submit" value="Submit"></input>
                        </div>
                    </form>
                </div>
                <div id="loginform">
                    <h2 id="headerTitle">Login</h2>
                    <form action='/auth' method='post'>
                        <div class="row">
                            <label>Username</label>
                            <input type="text" name="username" placeholder="Username" id="username" required/>
                        </div>  
                        <div class="row">
                            <label>Password</label>
                            <input type="password" name="password" placeholder="Password" id="password" required/>
                        </div>  
                        <div id="button" class="row">
                            {/* <button>Log in</button> */}
                            <Link to='main' className='btn'>Log in</Link>
                            {/* <input className='btn' type="submit" value="Login">Log in</input> */}
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
            </div>
        );
    }
}

export default Login;


