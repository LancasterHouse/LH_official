// import { Image } from 'react-bootstrap';
// import PLPImage1 from "../assets/images/PLP/plp1.jpg";
// import PLPImage2 from "../assets/images/PLP/plp2.png";

// import React from "react";

// export default function PLP() {
//     return (
//       <>

//         <div className='plp-text-box'>
//             <h1>Professional Learning Programs</h1>
//             <Image src={PLPImage1} />
//             <Image src={PLPImage2} />

//         </div>
        
        
     
       

//       </>
//     );
//   }




import { Image } from 'react-bootstrap';
import TMUtr from "../assets/images/PLP/TMU_TR.png";
import youtubeIcon from "../assets/images/PLP/yt-icon.png";
import React from "react";

export default function PLP() {
    return (
      <>
<h1 className='text-center big-title'>Professional Learning Programs and Skills Training</h1>
<div className='parallelogram-wrap'>
  
    <div className='PLP-Left'>
    <div id="rectangle"></div>
      <div className='plp-box-LRC'>
      

        <h2 className='plp-title'>Labour Relations</h2>
            <p className='plp-subtitle'>Video Preview</p>
              <Image src={TMUtr} className='iconSize' />
              <Image src={youtubeIcon} className='ytSize' />
      </div>
        </div>
        <div className='parallelogram'>

                <div className='plp-box-LRC'>
                  <p className='plp-lrc'>Labour Relations Certificate</p>

            </div>
        </div>
     
       </div>

      </>
    );
  }