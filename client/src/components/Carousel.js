// import Button from "reactstrap/lib/Button";
// import Container from "container/lib/container";
// import Carousel from "reactstrap/lib/Carousel";
// import Item from "reactstrap/lib/Carousel";
// import Caption from 'react-bootstrap';

import { Button, Carousel, Item, Caption, Image} from 'react-bootstrap';
import Slide1 from '../assets/images/Slider/slider-background1.jpg';
import Slide2 from '../assets/images/Slider/slider-background2.jpg';
import Slide3 from '../assets/images/Slider/slider-background3.jpg';
import compImage from '../assets/images/Slider/comp.png';

import React from "react";
import Container from 'container/lib/container';

export default function JumboCarousel() {
    return (
      <>
     
        {/* <Container> */}
          <Carousel>
              <Carousel.Item id="slide-background-1">
              <img src={Slide1} />
                  <Carousel.Caption>
                  <div className="text-block" id="text-block-1">
                        <h3 class="grid-2">Conference title</h3>
                        <h4 class="grid-2">Confernece subtitle</h4>
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
                  <img src={Slide2} id="slide-background-2" />
                  <Carousel.Caption>
                    <div className="text-block" id="text-block-2">
                        <h3 class="grid-2">Conference title</h3>
                        <h4 class="grid-2">Confernece subtitle</h4>
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
                  <img src={Slide3} id="slide-background-3"/>
                  <Carousel.Caption>
                  <div className="text-block" id="text-block-3">
                      <p class="grid-2">First Resort™ is Lancaster's comprehensive resource for research and current awareness in labour, employment, and workplace human rights law.</p>
                      
                      <img src={compImage} class="comp-image"/>
                      <p className=''>Subscribe today</p>
                      <p>Spend less time on research tomorrow</p>
                      
                    </div>
                    <p>To request a demo, or for discount pricing for multiple users, e-mail Customer Service at <a href="mailto:customerservice@lancasterhouse.com" className="emailLink">customerservice@lancasterhouse.com</a>, or call (416)-977-6618.</p>
                  
                  </Carousel.Caption>
              </Carousel.Item>
          </Carousel>;
        {/* </Container> */}
        
      </>
    );
  }