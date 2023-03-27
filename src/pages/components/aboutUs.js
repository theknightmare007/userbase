import React from "react";
import Link from "next/link";
import SellBio from '../../images/SellWaste.jpg'
import Head from "next/head";
import Script from "next/script";
import { useEffect } from "react";
import NavBar from "./NavBar";


const AboutUs = () => {

    useEffect(() => {
        const fadeElems = document.querySelectorAll(".fade-in-div");
    
        const checkFade = () => {
          fadeElems.forEach((elem) => {
            const distanceFromTop = elem.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
    
            if (distanceFromTop - windowHeight <= 0) {
              elem.style.opacity = "1";
            } else {
              elem.style.opacity = "0";
            }
          });
        };
    
        window.addEventListener("scroll", checkFade);
    
        return () => {
          window.removeEventListener("scroll", checkFade);
        };
      }, []);

    const onDashboard= true;
    const onRewards = true;
    const onParticipate = true;
    const onPostPic = true;

    return (
        <div className="intro-title">
          <NavBar
          onDashboard={onDashboard}
            onRewards={onRewards}
            onParticipate={onParticipate}
            onPostPic={onPostPic}
          ></NavBar>
          

            <div
              className="fade-in-div"
              style={{
                backgroundImage: `url(https://ipfs.io/ipfs/QmY6pzgw4oF8f9G4kxpWHLBdfHqfpd9EQKyfsoewe21Gad)`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                width: "70%",
                height: "100vh",
                float: "left",
                  }}
            ></div>
            <div>
              <p>kya re</p>
            </div>
          
    
          <div className="fade-in-div">
            <div
              className="fade-in-div"
              style={{
                backgroundImage: `url(https://ipfs.io/ipfs/QmY6pzgw4oF8f9G4kxpWHLBdfHqfpd9EQKyfsoewe21Gad)`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                width: "70%",
                height: "100vh",
                float: "left",
                  }}
            ></div>
            <div>
              <p>kya re</p>
            </div>
          </div>
          <div className="fade-in-div">
            <div
              className="fade-in-div"
              style={{
            backgroundImage: `url(https://ipfs.io/ipfs/QmY6pzgw4oF8f9G4kxpWHLBdfHqfpd9EQKyfsoewe21Gad)`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            width: "70%",
            height: "100vh",
            float: "left",
              }}
            ></div>
            <div>
              <p>kya re</p>
            </div>
          </div>
        </div>
      );
}

export default AboutUs;