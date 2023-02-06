import React from 'react'
import NavbarComp from '../components/Navbar';
import LowerNav from '../components/LowerNav';
import Footer from '../components/Footer';


const PrivacyPolicy = () => {
  return (
    <>
        <NavbarComp />
        <LowerNav />
        <div class="standerd-header flex">
                <h1>Privacy Policy</h1>
                </div>
            <div class="standerd-content">
                <p>Lancaster House abides by Canadian and international standards with regard to customer privacy protection. Lancaster House does not collect personal information about you or your company without your consent, and has set up means to keep personal information confidential.</p>
                <p>At times, Lancaster House may use a Third Party company to perform certain services on its behalf. This may require transfer of information to this company; however, this information will not be used for any purposes other than those for which it was collected.</p>

                <h3>Copyright Policy: Distributing Lancaster House Materials in Your Workplace</h3>

                <p>All Lancaster House print and electronic resources are protected by Canadian copyright law and cannot be sold, reproduced, published, posted, distributed, or otherwise made available internally in your workplace without our express permission. All improper sharing of Lancaster House materials constitutes an infringement of Canadian copyright law and is subject to penalty under the <a href='https://www.canlii.org/en/ca/laws/stat/rsc-1985-c-c-42/latest/rsc-1985-c-c-42.html'>Copyright Act</a>.</p>

                <p>If you wish to internally distribute electronic resources obtained from Lancaster House, please contact Customer Service at <a href='mailto:customerservice@lancasterhouse.com'>customerservice@lancasterhouse.com</a> for pricing and permission.</p>

                <h3>Cardholder Information</h3>
                <p>Our electronic commerce service requires that cardholders provide contact information (including: name, address, city, province, postal code, country, telephone and email) as well as credit card information (including: name on credit card, credit card number and expiry date).</p>

                <p>This information is collected and used only to process payments for our products.</p>


                <h3>Email/Telephone Inquiries</h3>

                <p>No information sent to Lancaster House via email, or over the telephone, is used for any reason other than to respond to your inquiry.</p>

                <p>At any time, you wish to: remove your information from our database; cancel/renew a service; or update your information on our database, you can contact Customer Service by calling 416-977-6618 or by e-mailing <a href='mailto:customerservice@lancasterhouse.com'>customerservice@lancasterhouse.com</a>.</p>
                
            </div>
        <Footer />
    </>
  )
}

export default PrivacyPolicy