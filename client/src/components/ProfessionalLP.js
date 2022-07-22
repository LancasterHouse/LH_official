import { Image } from 'react-bootstrap';
import PLPImage1 from "../assets/images/PLP/plp1.jpg";
import PLPImage2 from "../assets/images/PLP/plp2.png";

// import PLPImage2 from "../assets/images/PLP/plp2.jpg";
import React from "react";

export default function PLP() {
    return (
      <>

        <div className='plp-text-box'>
            <h1>Professional Learning Programs</h1>
            <Image src={PLPImage1} />
            <Image src={PLPImage2} />

        </div>
        
        
     
       

      </>
    );
  }