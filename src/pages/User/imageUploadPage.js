import React from "react";
import Image from "next/image";
import uploadImage from "./postWastagePic";

function ImageUploadPage() {
    return (
        <div>
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