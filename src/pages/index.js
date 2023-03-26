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
import NavBar from './components/Navbar'
import greenImg from '../images/trust-bg.jpg'
import natureImg from '../images/keepgreen.jpg'
import AboutUs from './components/aboutUs'

 


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
   
      <div className='App'
      style={{
        backgroundImage: `url(https://newevolutiondesigns.com/images/freebies/nature-hd-background-23.jpg)`,
      }}>
      <div><NavBar /></div>
        <div className='App'>
  <h1 align="center" className="intro-title">This will be our intro, slideshow type maybe (image transition with faded animation)</h1>
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
      <p></p>
        <button>
          <Link href="/User/redeemYourRewards" > Click Here to check your reward Activity</Link>
        </button>

        <div className="container">
        <div style={{ 
      backgroundImage: `url("../images/trust-bg.jpg")`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      width: "70%",
      height: "100vh",
      float: "left",
    }}>
    <h1 align ="center">Bio Gas</h1>
    
    <p>Biogas is a renewable energy source that can be produced from organic waste through a process called anaerobic digestion. Anaerobic digestion is a biological process that occurs in the absence of oxygen, where microorganisms break down organic materials and convert them into biogas.The biogas produced through anaerobic digestion is primarily composed of methane and carbon dioxide, with small amounts of other gases such as hydrogen and nitrogen. Methane is the primary component of biogas and is a potent greenhouse gas that has a global warming potential 28 times greater than carbon dioxide.Biogas can be used as a fuel for cooking, heating, and electricity generation. It is a versatile fuel that can replace fossil fuels and reduce greenhouse gas emissions. Biogas can also be upgraded to produce compressed natural gas (CNG) or liquefied natural gas (LNG) for use in transportation.Biogas production from organic waste has several benefits. It reduces greenhouse gas emissions by diverting waste from landfills, where it would decompose and release methane into the atmosphere. Biogas production also provides a source of renewable energy that can be used to meet the energy demands of households, industries, and communities. Additionally, biogas production from organic waste can help to address the problem of waste management, particularly in developing countries where waste management infrastructure is inadequate.In India, biogas production from organic waste has gained importance in recent years. The Indian government has initiated several programs to promote biogas production from organic waste, particularly in rural areas. The National Biogas and Manure Management Program (NBMMP) is a flagship program that aims to promote biogas production from organic waste, particularly in rural areas, and to provide clean energy for cooking and lighting. The program also aims to promote sustainable waste management practices and to reduce greenhouse gas emissions.In conclusion, biogas production from organic waste is a sustainable solution that can provide multiple benefits, including reducing greenhouse gas emissions, providing a source of renewable energy, and addressing the problem of waste management. In India, the promotion of biogas production from organic waste has the potential to improve energy access and reduce environmental pollution, particularly in rural areas.</p>
  </div>
  <div className="image-box">
    <img src="" alt="Image description" />
  </div>
</div>

<style jsx>{`
  .container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .text-box {
    width: 70%;
    height: 300px;
    overflow-y: scroll;
    box-sizing: border-box;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  .image-box {
    width: 30%;
    height: 300px;
    box-sizing: border-box;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  `}
</style>
<AboutUs />
        </div>

        
  )
}
