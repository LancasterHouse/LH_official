




import { Image } from 'react-bootstrap';
import conferenceIcon from "../assets/images/Upcoming/conference_icon1.png";
import React from "react";

export default function Upcoming() {
    return (
      <>

<div className="row conference-row">
    <div class="col-lg-6 col-md-6 col-xs-12">
        <h1 class="text-center big-title">Upcoming Conferences</h1>
            <div className="row">
                <div class="col-lg-3 col-md-3 col-xs-3">
                    <img src={conferenceIcon} alt="Conference Icon" />
                </div>
                <div class="col-lg-9 col-md-9 col-xs-9">
                    <h3>Conference</h3>
                    <p>date</p>
                    <p>city</p>
                    <button type="button" class="btn btn-primary">More Information</button>
                    <button type="button" class="btn btn-primary">Register</button>
                </div>
            </div>

            <button type="button" class="btn btn-primary text-center">Access conference catalog</button>
        </div>

    <div class="col-lg-6 col-md-6 col-xs-12">
        <h1 class="text-center big-title">Upcoming Webinars</h1>
    </div>
</div>


      </>
    );
  }