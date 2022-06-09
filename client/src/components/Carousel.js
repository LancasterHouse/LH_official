// import Button from "reactstrap/lib/Button";
// import Container from "container/lib/container";
// import Carousel from "reactstrap/lib/Carousel";
// import Item from "reactstrap/lib/Carousel";
// import Caption from 'react-bootstrap';

import { Button, Contariner, Carousel, Item, Caption, Image} from 'react-bootstrap';
import Slide1 from '../assets/images/Slide1.png';
import Slide2 from '../assets/images/Slide2.jpg';

import Slide3 from '../assets/images/Slide3.jpg';


import React from "react";
import Container from 'container/lib/container';

export default function JumboCarousel() {
    return (
      <>
     
        {/* <Container> */}
          <Carousel>
              <Carousel.Item>
                  <img width={1200} height={400} alt="900x500" src={Slide1} />
                  <Carousel.Caption>
                    <div className="text-block">
                      <h6><p>First Resort™ is Lancaster's comprehensive resource for research and current awareness in labour, employment, and workplace human rights law.</p></h6>

                      <p className=''>Subscribe today</p>
                      <p>Spend less time on research tomorrow</p>
                      
                    </div>
                    <p>To request a demo, or for discount pricing for multiple users, e-mail Customer Service at <a href="mailto:customerservice@lancasterhouse.com" className="emailLink">customerservice@lancasterhouse.com</a>, or call (416)-977-6618.</p>
                  
                  </Carousel.Caption>
                  
              </Carousel.Item>
              <Carousel.Item>
                  <img width={900} height={400} alt="900x500" src={Slide2} />
                  <Carousel.Caption>
                    <div className="text-block">
                        <h3>Conference title</h3>
                        <h4>Confernece subtitle</h4>
                        <div>
                          <p>Date</p>
                          <Button>More Information</Button>
                        </div>
                        <div>
                          <p>Program type</p>
                          <Button>Register</Button>
                        </div>
                        
                    </div>
                  </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                  <img width={900} height={500} alt="900x500" src={Slide3} />
                  <Carousel.Caption>
                  <div className="text-block">
                        <h3>Conference title</h3>
                        <h4>Confernece subtitle</h4>
                        <div>
                          <p>Date</p>
                          <Button>More Information</Button>
                        </div>
                        <div>
                          <p>Program type</p>
                          <Button>Register</Button>
                        </div>
                        
                    </div>
                  </Carousel.Caption>
              </Carousel.Item>
          </Carousel>;
        {/* </Container> */}
        
      </>
    );
  }