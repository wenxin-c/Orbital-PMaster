import React from 'react'
import ReactDOM from 'react-dom'
import "bootstrap/dist/css/bootstrap.min.css";
import './login.css'
import { FaFacebook, FaTwitter, FaGoogle} from "react-icons/fa";
import {
    Link,
  } from "react-router-dom";

class Login extends React.Component{
    render(){
        return(
            <div className='container'>
                <div id="loginform">
                    <h2 id="headerTitle">Login</h2>
                    <div>
                        <div class="row">
                            <label>Username</label>
                            <input type='text' placeholder='Enter your username'/>
                        </div>  
                        <div class="row">
                            <label>Password</label>
                            <input type='password' placeholder='Enter your password'/>
                        </div>  
                        <div id="button" class="row">
                            {/* <button>Log in</button> */}
                            <Link to='main' className='btn'>Log in</Link>
                        </div>
                    </div>
                    <div id="alternativeLogin">
                        <label>Or sign in with:</label>
                        <div id="iconGroup">
                            <a href="#" id="facebookIcon"><FaFacebook className='logoFacebook'/></a>
                            <a href="#" id="twitterIcon"><FaTwitter className='logoTwitter'/></a>
                            <a href="#" id="googleIcon"><FaGoogle className='logoGoogle'/></a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;


