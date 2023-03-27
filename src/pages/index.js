import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { BrowserRouter, Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import User from './User/userSignUp'
import Link from 'next/link'
import SignUpImg from '../images/SignUp.jpg'
import LoginImg from '../images/Login.jpg'
import Layout from './components/topLayout'
import NavBar from './components/NavBar'
import greenImg from '../images/trust-bg.jpg'
import natureImg from '../images/keepgreen.jpg'
import AboutUs from './components/aboutUs'
import adminImg from '../images/admin.jpg'


 


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const needSignUp =true;
  return (
   
      <div className='blue'>
      <div><NavBar
      needSignUp={needSignUp} 
      /></div>
        <div >
  <h1 align="center" className="intro-title">This will be our intro, slideshow type maybe (image transition with faded animation)</h1>
 
  <div className="image-container">
    <Link href="/User/userLogin">
      <Image src={LoginImg} /><br/>
      Login
    </Link>

    <Link href="User/userSignUp">
      <Image src={SignUpImg} />
      Sign Up
    </Link>
    <br/>
    <Link href="/components/aboutUs">
      <Image src={SignUpImg} />
      About Us
    </Link>

  </div>
</div>



<style jsx>{`
  .image-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  .image-container img {
    margin: 0 10px;
  }
`}</style>
      <br/>
        <div className="container">
        
</div>
<div className='.image-container' align="center">
    <h1 align="center">Admin Login</h1>
    <Link href="/Admin/AdminLogin"><Image src={adminImg}/></Link>
    <br/>

  </div>
        </div>

        
  )
}
