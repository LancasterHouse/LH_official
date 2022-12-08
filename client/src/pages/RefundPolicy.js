import NavbarComp from '../components/Navbar';
import LowerNav from '../components/LowerNav';
import Footer from '../components/Footer';


const RefundPolicy = () => {
  return (
    <>
        <NavbarComp />
        <LowerNav />
            <div>
                <p>A refund and/or credit for future Lancaster House events is available according to when the request is placed. Please contact customer service at <a href='mailto:customerservice@lancasterhouse.com'>customerservice@lancasterhouse.com</a> if you need to request a refund and/or credit for your existing registration.</p>

                <p>Please note that some Lancaster House conferences are preceded by a "pre-conference workshop," which is considered to be the first day of the event for the purposes of this policy. For professional learning programs, the "program start date" shall be understood as the date of the program's first session.</p>

                <h3>Conferences:</h3>
                <ul>
                    <li>Four weeks or more before the event begins, a full refund is available.</li>
                    <li>Fewer than four weeks, but more than one day, before the event begins, the registrant may obtain either:<ul>
                        <li>a full credit, redeemable for future Lancaster House programming, or</li><li>a refund in the amount of 80% of the registration fee.</li></ul></li>

                    <li>In a "no-show" situation, no refund or credit is available. The registrant may still access digital materials related to the conference, if applicable.</li>

                </ul>
                <h3>Virtual conferences and webinars:</h3>
                <ul>
                    <li>A full refund or credit is available if requested on or before the day prior to the event.</li>
                    <li>In a "no-show" situation, no refund or credit is available. The registrant may still access digital materials related to the event, if applicable.</li>
                </ul>

                <h3>Professional development programs held in-person:</h3>
                <ul>
                    <li>A full refund or credit is available if requested four weeks or more before the program start date.</li>
                    <li>If requested fewer than four weeks before the program start date, but with advance notice of one week (7 days) or more, the registrant may obtain either: 
                        <ul>
                            <li>a full credit for a future professional development program, or</li>
                            <li>an 80% refund</li>
                        </ul></li>
                        <li>If requested fewer than 7 days before the program start date, but before the first session, the registrant is eligible for a full credit, but no refund option is available.</li>
                </ul>

                <h3>Professional development programs held virtually:</h3>
                <ul>
                    <li>A full refund or credit is available if requested one week (7 days) or more prior to the first session.</li>
                    <li>If requested fewer than 7 days before the program start date, but before the first session, the registrant may obtain either:
                        <ul>
                            <li>a full credit to be used for future Lancaster House programming, or</li>
                            <li>an 80% refund.</li>
                        </ul>
                    </li>
                </ul>
                <h3>Subscriptions:</h3>
                <ul>
                    <li>The minimum subscription term is one year. Subscriptions are billed annually in advance. Unfortunately, refunds are not offered for Lancaster House subscription products.</li>
                </ul>

                <p>For all Lancaster House programs, transfer of registration to a co-worker is permitted at no charge.</p>

                <p>For more information please e-mail <a href='mailto:customerservice@lancasterhouse.com'>Customer Service</a> or call (416) 977-6618.</p>
            </div>
        <Footer />
    </>
  )
}

export default RefundPolicy