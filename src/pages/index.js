import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { BrowserRouter, Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import User from './User/userSignUp'
import Link from 'next/link'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
   
      <div className='App'>
        <h1 align="center">kya haal</h1>
        <User />
        Already an User?<button>
        <Link href="/User/userLogin">
          Login
        </Link>
      </button><br/>

      <p align="center">
        <button>
        <Link href="/User/postWastagePic"> Click here to upload<br/> Waste pic</Link>
        </button>
      </p>

      <p>
        <button>
          <Link href="/User/redeemYourRewards" > Click Here to check your reward Activity</Link>
        </button>
      </p>
        </div>
  )
}
