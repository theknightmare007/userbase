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
        <input type="email" value={Email} onChange={setEmail} placeholder="Your Email" /><br/>
        <input type="password" value={Password} onChange={setPassword} placeholder="Password Here"/><br/> 
        <input type="file" />
        <button><Link href="/User/userDashboard">Login</Link></button><br/>
        <button><Link href="/User/userSignUp">Back to Sign Up</Link></button>
        <Link href="/"><h2 type="url">Back to Home</h2></Link>
        
        </div>
    )
}

export default Login;