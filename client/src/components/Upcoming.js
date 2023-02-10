
import { Image } from 'react-bootstrap';
import conferenceIcon from "../assets/images/Upcoming/conference_icon1.png";
import webinarIcon1 from "../assets/images/Upcoming/webinar_icon1.png";
import webinarIcon2 from "../assets/images/Upcoming/webinar_icon2.png";
import webinarIcon3 from "../assets/images/Upcoming/webinar_icon3.png";
import React from "react";

export default function Upcoming() {
    return (
      <>

<div className="row">
    <div class="col-lg-6 col-md-6 col-xs-12 conference-row">
        <h1 class="text-center big-title">Upcoming Conferences</h1>
            <div className="row">
                <div class="col-lg-3 col-md-6 col-xs-3">
                    <img src={conferenceIcon} alt="Conference Icon" class="conf-icon" />
                </div>
                <div class="col-lg-9 col-md-6 col-xs-9 conference-info">
                    
                    <h3>Conference</h3>
                    <p>date</p>
                    <p>city</p>
                    <button type="button" class="btn btn-red conference-btn">More Information</button>
                    <button type="button" class="btn btn-red conference-btn">Register</button>
                </div>
            </div>
            <div className="row">
                <div class="col-lg-3 col-md-6 col-xs-3">
                    <img src={conferenceIcon} alt="Conference Icon" class="conf-icon" />
                </div>
                <div class="col-lg-9 col-md-6 col-xs-9 conference-info">
                    
                    <h3>Conference</h3>
                    <p>date</p>
                    <p>city</p>
                    <button type="button" class="btn btn-red conference-btn">More Information</button>
                    <button type="button" class="btn btn-red conference-btn">Register</button>
                </div>
            </div>
            <div className="row">
                <div class="col-lg-3 col-md-6 col-xs-3">
                    <img src={conferenceIcon} alt="Conference Icon" class="conf-icon" />
                </div>
                <div class="col-lg-9 col-md-6 col-xs-9 conference-info">
                    
                    <h3>Conference</h3>
                    <p>date</p>
                    <p>city</p>
                    <button type="button" class="btn btn-red conference-btn">More Information</button>
                    <button type="button" class="btn btn-red conference-btn">Register</button>
                </div>
            </div>

            <div className="row">
                <div class="col-lg-12 col-md-12 col-xs-12 flex conf-btn-main-wrap">
            <button type="button" class="btn btn-primary text-center conference-btn-main red-btn">Access conference catalog</button>
            </div>
            </div>
        </div>

    <div class="col-lg-6 col-md-6 col-xs-12 webinar-section">
        <h1 class="text-center big-title">Upcoming Webinars</h1>
            <div className="row">
                <div class="col-xl-4 col-lg-12 col-md-12 col-xs-12 flex webinar-wrap">
                    <img src={webinarIcon1} alt="Webinar Icon" />
                
                    <h3>Webinar</h3>
                    <p>Sed sed nunc facilisis, semper massa varius, imperdiet sem. Aenean aliquam mauris ipsum, a fermentum enim porta id. Cras eu nulla libero. Curabitur dignissim lorem ac efficitur pretium.</p>
                    <button type="button" class="btn btn-red conference-btn">More Information</button>
                    <button type="button" class="btn btn-red conference-btn">Register</button>
                
                </div>
                <div class="col-xl-4 col-lg-12 col-md-12 col-xs-12 flex webinar-wrap">
                    <img src={webinarIcon2} alt="Webinar Icon" />
                    <h3>Webinar</h3>
                    <p>Sed sed nunc facilisis, semper massa varius, imperdiet sem. Aenean aliquam mauris ipsum, a fermentum enim porta id. Cras eu nulla libero. Curabitur dignissim lorem ac efficitur pretium.</p>
                    <button type="button" class="btn btn-red conference-btn">More Information</button>
                    <button type="button" class="btn btn-red conference-btn">Register</button>
                </div>
                <div class="col-xl-4 col-lg-12 col-md-12 col-xs-12 flex webinar-wrap">
                    <img src={webinarIcon3} alt="Webinar Icon" />
                    <h3>Webinar</h3>
                    <p>Sed sed nunc facilisis, semper massa varius, imperdiet sem. Aenean aliquam mauris ipsum, a fermentum enim porta id. Cras eu nulla libero. Curabitur dignissim lorem ac efficitur pretium.</p>
                    <button type="button" class="btn btn-red conference-btn">More Information</button>
                    <button type="button" class="btn btn-red conference-btn">Register</button>
                </div>

            </div>

            <div className="row">
                <div class="col-lg-12 col-md-12 col-xs-12 flex conf-btn-main-wrap">
            <button type="button" class="btn btn-primary text-center conference-btn-main purple-btn">Access our audio and webinar archive</button>
            </div>
            </div>
    </div>
</div>


      </>
    );
  }