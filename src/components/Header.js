import React from "react";
import Carousel from 'react-bootstrap/Carousel';

const Header = () => {
  return (
    <>
      <header>
        <section className="container main-hero-container">
          <div className="row">
            <div className="col-12 col-lg-6 header-left-side d-flex justify-content-center flex-column 
            align-items-start order-lg-first order-last">
              <h1 className="display-2">
                The biggest and most trusted matrimony service for Kannadigas!
              </h1>

              <p className="main-hero-para">
                Now find matches based on your hobbies & interests
              </p>
              <h3>Get early access for you</h3>
              <div className="input-group mt-3">
                <input
                  type="text"
                  className="rounded-pill w-75 w-lg-75 me-3 p-2 form-control-text"
                  placeholder="Enter Your Email"
                />
                <div className="input-group-button">Get it now</div>
              </div>
            </div>
            {/*  --------------- main header right side--------------  */}
            <div className="col-12 col-lg-6">
              <Carousel data-bs-theme="dark">
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="https://imgs.bharatmatrimony.com/bmimgs/homepage-revamp-images/ss-images/anusha-and-vishal-aug-2023.jpg"
                    alt="First slide"
                  />
                  <Carousel.Caption>
                    <h5>First slide label</h5>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="https://imgs.bharatmatrimony.com/bmimgs/homepage-revamp-images/ss-images/shreevathsa-and-mahalakshmi-aug-2023.jpg"
                    alt="Second slide"
                  />
                  <Carousel.Caption>
                    <h5>Second slide label</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="https://imgs.bharatmatrimony.com/bmimgs/homepage-revamp-images/ss-images/nithin-and-vidyashree-aug-2023.jpg"
                    alt="Third slide"
                  />
                  <Carousel.Caption>
                    <h5>Third slide label</h5>
                    <p>
                      Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </div>
          </div>
        </section>
      </header>
    </>
  );
};

export default Header;
