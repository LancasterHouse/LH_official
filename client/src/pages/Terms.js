import React from 'react'
import NavbarComp from '../components/Navbar';
import LowerNav from '../components/LowerNav';
import Footer from '../components/Footer';


const Terms = () => {
  return (
    <>
        <NavbarComp />
        <LowerNav />
        <div class="standerd-header flex">
                <h1>Terms and Conditions</h1>
                </div>
            <div class="standerd-content">
                <p>All prices are payable in Canadian funds, and payment is due to Lancaster House upon receipt.</p>
                <p>All prices are subject to change without notice.</p>
                <p>Claims for missing or non-receipt of conference/workshop materials should be made no later than 15 days after the conference/workshop date.</p>
                <p>Claims for missing or non-receipt of books/loose-leaf services should be made within 15 days of the purchase date.</p>
                <p>By accessing this web site and any pages thereof, you agree to be bound by the terms of the Legal Notices. If you do not agree with the terms of these Legal Notices, do not access this web site or any pages thereof.</p>


                <h1>Shipping</h1>
                <p>All orders are subject to a shipping rate. These rates vary, and can be found on the product order page. Please allow up to 15 business days for orders to be processed.</p> 
                <p>For more information on shipping, including international shipping rates, please contact our Customer Service department.</p>

                
                <h3>Telephone</h3>
                <p>1-416-977-6618</p>

                <h3>Business Hours</h3>
                <p>9:00 - 5:00 p.m. ET Monday-Friday</p>
            </div>
        <Footer />
    </>
  )
}

export default Terms