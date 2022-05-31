import Jumbotron from "reactstrap/lib/Jumbotron";
import Button from "reactstrap/lib/Button";
import Container from "container/lib/container";
import Carousel from "reactstrap/lib/Carousel";

import React from "react";

export default function JumbotronExample() {
    return (
      <>
     
      {/* //think I am going with this one and adding a carosel */}
       <Jumbotron>
            <div className="Jumbo">
            <h1>Hello, world!</h1>
            <p>
                This is a simple hero unit, a simple jumbotron-style component for calling
                extra attention to featured content or information.
            </p>
            <p>
                <Button bsStyle="primary">Learn more</Button>
            </p>
            </div>
          
        </Jumbotron>;
{/* 
        <Carousel>
            <Carousel.Item>
                <img width={900} height={500} alt="900x500" src="First_resort_banner_image.png" />
                <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img width={900} height={500} alt="900x500" src="/carousel.png" />
                <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img width={900} height={500} alt="900x500" src="/carousel.png" />
                <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>; */}
      </>
    );
  }