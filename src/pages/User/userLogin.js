import React from "react";
import { useState } from "react";
import Link from "next/link";
import NavBar from "../components/NavBar";

const Login = () => {
    const[Email ,setEmail] = useState();
    const[Password , setPassword] = useState();

    const needLogin = true;
    const needSignUp = true;

    return (
        <div align ="center" className="intro-title">
            <NavBar 
            needLogin={needLogin}
            needSignUp={needSignUp}>
            </NavBar>

        <h1 align="center">User Login</h1>
        <input type="email" value={Email} onChange={setEmail} placeholder="Your Email" /><br/><br/>
        <input type="password" value={Password} onChange={setPassword} placeholder="Password Here"/><br/><br/>
        <br/>
        <button><Link href="/User/userDashboard">Login</Link></button><br/>
        
        
        </div>
    )
}

export default Login;