import React from "react";
import { useState } from "react";
import Link from "next/link";
import NavBar from "../components/NavBar";



function UploadImage() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("myImage", selectedFile);
    const response = await fetch("/api/upload", {
      method: "POST",
      body: formData,
    });
    const data = await response.json();
    console.log(data);
  };

    const onDashboard= true;
    const onRewards = true;
    const onParticipate = true;
    const onPostPic = true;
    const onAboutUs = true;

  return (
    <div className="intro-title">
       <NavBar
           
            onDashboard={onDashboard}
            onRewards={onRewards}
            onParticipate={onParticipate}
            onPostPic={onPostPic}
            onAboutUs={onAboutUs}></NavBar>
      <div>
    <form onSubmit={handleSubmit}>
      <input type="file" onChange={handleFileChange} />
      <button type="submit">Upload</button>
    </form>
    </div>

    <div align="center">
      <h1>Your Uploaded Image</h1>
      <div style={{width: '500px', height: '500px', border: '1px solid #ccc'}}></div>
      <button>Confirm</button>                                               <button>Retry</button>
    </div>
    </div>
  );
}

export default UploadImage;

