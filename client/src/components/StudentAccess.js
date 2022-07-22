import { Image, Button } from 'react-bootstrap';
import StudentImage from "../assets/images/StudentAccess/sap.jpg";

import React from "react";

export default function StudentAccess() {
    return (
      <>

        <div className='student-box'>
            <Image src={StudentImage} />
            <div className='student-text-box'>
                <h3>Student</h3>
                <h3>Access</h3>

                <h3>Program</h3>

                <Button>Learn more</Button>
            </div>
           
        </div>
        
        
     
       

      </>
    );
  }