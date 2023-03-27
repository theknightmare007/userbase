import React from "react";
import Image from "next/image";
import uploadImage from "./postWastagePic";
import NavBar from "../components/NavBar";

function ImageUploadPage() {
    const needLogin = false;
    const onDashboard= true;
    const onRewards = true;
    const onParticipate = true;
    const onPostPic = true;
    return (
        <div>
             <NavBar
            needLogin={needLogin}
            onDashboard={onDashboard}
            onRewards={onRewards}
            onParticipate={onParticipate}
            onPostPic={onPostPic}></NavBar>

            <uploadImage />
            <Image 
            src= ""
            alt= "Uploaded Image"
            width={500}
            height={500} 
            />
        </div>
    )
}

export default ImageUploadPage;