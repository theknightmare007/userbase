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

  const needLogin = false;
    const onDashboard= true;
    const onRewards = true;
    const onParticipate = true;
    const onPostPic = true;

  return (
    <div className="intro-title">
       <NavBar
            needLogin={needLogin}
            onDashboard={onDashboard}
            onRewards={onRewards}
            onParticipate={onParticipate}
            onPostPic={onPostPic}></NavBar>
      <div>
    <form onSubmit={handleSubmit}>
      <input type="file" onChange={handleFileChange} />
      <button type="submit">Upload</button>
    </form>
    </div>

    <div>
    <Link href="/"><h2 type="url">Back to Home</h2></Link>
    </div>
    </div>
  );
}

export default UploadImage;

