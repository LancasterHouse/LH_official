import { Image, Button } from 'react-bootstrap';
import bookImage from "../assets/images/StudentAccess/bookstore-image.png";
import cleljThumbImage from "../assets/images/StudentAccess/clelj.png";

import React from "react";

export default function StudentAccess() {
    return (
      <>

<div class="flex">
        <div className='directory-box'>
            <div className='directory-text-box'>
                <h3>Directory of Arbitrators</h3>
            

                <Button>Learn more</Button>
            </div>
           
        </div>
        <div className='student-box'>
            <div className='student-text-box'>
                <h3>Student Access Program</h3>

                <Button>Learn more</Button>
            </div>
           
        </div>
        <div className='link-box'>
            <div className='link-box-inner'>
                <img src={bookImage} alt="bookstore" />
                <div class="link-box-title">
                <p>Browse our Bookstore</p>
                <a href="#test">More Information &#x3E;</a>
                </div>
            </div>
            <div className='link-box-inner'>
                <img src={cleljThumbImage} alt="clelj Thumb" />
                <div class="link-box-title">
                <p>Canadian Labour &amp; Employment Law Journal</p>
                <a href="#test">Read more &#x3E;</a>
                </div>
            </div>
           
        </div>
</div>
        
     
       

      </>
    );
  }