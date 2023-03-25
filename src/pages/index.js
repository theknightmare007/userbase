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
 


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
   
      <div className='App'>
        <div className='App'>
  <h1 align="center">This will be our intro, slideshow type maybe (image transition with faded animation)</h1>

  <h3>Login</h3>
  <div className="image-container">
    <Link href="/User/userLogin">
      <Image src={LoginImg} /><br/>
      Login
    </Link>

    <Link href="User/userSignUp">
      <Image src={SignUpImg} />
      Sign Up
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

     
        <button>
        <Link href="/User/postWastagePic"> Click here to upload<br/> Waste pic</Link>
        </button>
      

      
        <button>
          <Link href="/User/redeemYourRewards" > Click Here to check your reward Activity</Link>
        </button>
      
        </div>
  )
}
