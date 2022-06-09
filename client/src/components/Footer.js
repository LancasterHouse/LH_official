import React from "react";
import logo from "../assets/images/lhlogo.png";
// import { Container, Row, Col } from 'react-bootstrap';


const Footer = () => {
return (

  <>
    <div className="mt-5 pt-5 pb-5 footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 col-xs-12 about-company">
            <img src={logo} alt="Lancaster House logo" className="logoImage" />
            
          
          </div>
         
          <div className="col-lg-4 col-xs-12 location">
            <h4 className="mt-lg-0 mt-sm-4 footerList">Lancaster House</h4>
            <ul className="mb-0 footerList">
              <li>188 Yonge Street, Suite 200</li>
              <li>Toronto, On M4S 3C4</li>

              <li>Canada</li>

              <li>Tel: 416-977-6618</li>

              <li>Toll Free: 1-888-298-8841</li>

              <li>Fax: 416-977-5873</li>
              <li>customerservice@lancasterhouse.com</li>
            </ul>
            <p><a href="#"><i className="fa fa-facebook-square mr-1"></i></a><a href="#"><i className="fa fa-linkedin-square"></i></a></p>
           
          </div>
          <div className="col-lg-3 col-xs-12 links">
            {/* <h4 className="mt-lg-0 mt-sm-3">Links</h4> */}
              <ul className="m-0 p-0 footerList">
               <li><a href="#">Terms and Conditions</a></li>
               <li><a href="#">Privacy Policy</a></li>
               <li><a href="#">Refund Policy</a></li>
 
               <li><a href="#">Legal Notice</a></li>

               <li><a href="#">AODA Policy</a></li>
               <li><a href="#">About Us</a></li>
               <li><a href="#">Join Our Team</a> </li>
               <li><a href="#">Contact</a></li>
              </ul>
          </div>
        </div>
       
      </div>
    </div>
    <div className="row">
      <div className="col  copyright">
        <p className=""><small class="text-white-50">The land on which Lancaster House operates is the traditional territory of the Mississaugas of the Credit, the Anishnabe, Haudensosaunee, and the Wedat peoples, and it is now home to many diverse First Nations, Inuit and Métis.</small></p>
      </div>
    </div>

  </>
     

);
};
export default Footer;
