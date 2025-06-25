import React from 'react';
import Home from './Home.jsx';
import {Link} from 'react-router-dom';
import { useNavigate } from "react-router-dom";

import "./Login.css";
import logo from './assets/logo.png'
import facebook from './assets/FacebookLogo.png';
import google from './assets/googleLogo.png';
import linkedIn from './assets/LinkedInLogo.png';
import Instagram from './assets/InstagramLogo.png';



function Login () {
    
    const navigate = useNavigate();

        return(
            <section>
                {/*login container*/}
            <div className="loginContainer">
                <div className="topContainer">
                    <div className = "navLinksContainer">
                     <a href="#" className="navLinks ">Client</a>
                     <a href="#" className="navLinks active">Provider</a>
                    </div>

                    {/* logo container inside loginContainer */}
                <div className="logoContainer">
                    <img src={logo} alt="BuildLink Logo"  />
                </div>

                    {/* The login Form */}
                <div className="loginForm">
                    <div className="topLoginForm">
                        <span><h3 id="loginTitle">Login</h3></span>
                        <span><h3 id="newAccountTitle">Create New Account</h3></span>
                    </div>

{/* where the input fields are placed */}
                <div className="inputContainer">
                    <label htmlFor="usernameInput">Username</label> <br /> <br />
                    <input type="text" id="usernameInput" /> <br /> <br />

                    <label htmlFor="passwordInput">Password</label> <br /> <br />
                    <input type="password" id="passwordInput" /> <br />
                                       
                    <input type="checkbox" id="rememberMeCheckbox"  />
                    <label htmlFor="rememberMeCheckbox">remember me</label>

                </div>
                <div className="buttonContainer">
                    <button onClick={() => navigate('/Home')} id="loginButton" 
                >Login</button>
                </div>

                <div className="loginFooter">
                    <div className="divider">
                        <hr /> 
                        <span> or Sign Up Using</span>
                        <hr /> 
                    </div>
                  
              <div className="footerLinks">
                        <a href="#">
                            <img src={google} alt="Google" />                        
                        </a>
                        <a href="#">
                            <img src={linkedIn} alt="linkedIn" />                        
                        </a>
                        <a href="#">
                            <img src={Instagram} alt="Instagram"  />
                        </a>
                         <a href="#">
                            <img src={facebook} alt="Instagram"  />
                        </a>
                    </div>

                
                    <a href="#">Don't Have an account? Register.</a>

                </div>
                </div>
                </div>
            </div>
            </section>
        );
    
}

export default Login;

