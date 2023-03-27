import React from "react";
import Link from "next/link";
import SellBio from '../../images/SellWaste.jpg'
import Head from "next/head";
import Script from "next/script";
import { useEffect } from "react";
import NavBar from "./NavBar";
import Admin from "../Admin/AdminLogin";


const AboutUs = () => {
  return (
    <div align="center">
      <div>
        <h1>Admin test</h1>
        <Admin />
      </div>
    </div>
  )
}

export default AboutUs;