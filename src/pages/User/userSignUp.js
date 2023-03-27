import React from "react";
import { useState } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import Layout from "../components/topLayout";
import NavBar from "../components/NavBar";



const User = () => {

const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [sectorNumber, setSectorNumber] = useState('');
const [whatsappNumber, setWhatsappNumber] = useState('');

const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch('/api/hello', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name,
        email,
        password,
        sectorNumber,
        whatsappNumber
      })
    });
    const data = await response.json();
    console.log(data); // Print the response data to the console for testing
  };
  const needLogin = true;
  const needSignUp = true;
  

    return (
      
        <div align="center" className="intro-title">
          <NavBar 
          needLogin={needLogin}
          needSignUp={needSignUp}
          />
            <h1>Cool User Login</h1>


        <input onChange={(e) => setName(e.target.value) } value={name}type='text' placeholder="Name"></input><br/>
        
        <input onChange={(e) => setEmail(e.target.value)} value={email} type='email' placeholder="Email"></input><br/>
       
        <input onChange={(e) => setPassword(e.target.value)} value={password} type='password' placeholder="Choose a secure password"></input><br/>
       
        <input onChange={(e) => setSectorNumber(e.target.value)} value={sectorNumber} type='number' placeholder="Sector Number"></input><br/>
        
        <input onChange={(e) => setWhatsappNumber(e.target.value)} value={whatsappNumber} type='number' placeholder="Your Whatsapp/Mobile Number"></input><br/>

        <button onClick={handleSubmit}>Click to save the details</button><p><br/></p>
        
        

        </div>
        
    )
}
export default User;

