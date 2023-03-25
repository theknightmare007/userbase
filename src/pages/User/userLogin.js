import React from "react";
import { useState } from "react";
import Link from "next/link";

const Login = () => {
    const[Email ,setEmail] = useState();
    const[Password , setPassword] = useState();

    return (
        <div align ="center">
        <h1 align="center">User Login</h1>
        <input type="email" value={Email} onChange={setEmail} placeholder="Your Email" /><br/>
        <input type="password" value={Password} onChange={setPassword} placeholder="Password Here"/><br/> 
        <input type="file" />
        <button>Login</button><br/>
        <button><Link href="/User/userSignUp">Back to Sign Up</Link></button>
        <Link href="/"><h2 type="url">Back to Home</h2></Link>
        
        </div>
    )
}

export default Login;