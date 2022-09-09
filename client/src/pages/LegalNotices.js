import React from 'react'
import NavbarComp from '../components/Navbar';
import LowerNav from '../components/LowerNav';
import Footer from '../components/Footer';


const LegalNotices = () => {
  return (
    <>
        <NavbarComp />
        <LowerNav />
            <div>
                <h1>Legal Notices</h1>
                <p>By accessing this website and any pages thereof, you agree to be bound by the terms of the Legal Notices set out below. If you do not agree with the terms of these Legal Notices, do not access this website or any pages thereof.</p>
                <p>References on this website to "Lancaster House" are to the corporate entity L.A.N. Ltd. and include its subsidiaries and affiliates.</p>


                <h1>Confidentiality</h1>
                <p>Absent the use of encryption, the Internet is not a secure medium and privacy cannot be ensured. Internet e-mail is vulnerable to interception and forging. Lancaster House cannot ensure the privacy and authenticity of any information or instructions you send to us or that we send to you over the Internet. Lancaster House will not be responsible for any damages you may incur if you communicate confidential information to us over the Internet or if we communicate such information to you at your request.</p> 

                
                <h1>No Advice</h1>
                <p>The information provided on this website is intended for informational purposes only and is not intended to constitute legal, financial, accounting, or tax advice. Many factors unknown to us may affect the applicability of any statement or comment that we make on our website to your particular circumstances. You should consult directly with a legal advisor before acting on any information on this website.</p>


                
                <h1>Accuracy and Changes</h1>
                <p>Facts and information provided on this website are believed to be accurate at the time they are posted. However, this website could include inaccuracies, typographical errors, or out-of-date information. Changes may be made at any time to the information on this website without prior notice.</p>
            </div>
        <Footer />
    </>
  )
}

export default LegalNotices