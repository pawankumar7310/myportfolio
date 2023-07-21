import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import img7 from "../../testimonials/img7.png";
import img8 from "../../testimonials/img8.jpg";
import img2 from "../../testimonials/img2.jpg";

import "./testimonial.css";
function Testimonial() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <>
      <div className="d-flex justify-content-center align-items-center flex-column my-5">
        <h2>What our Client Say</h2>
      </div>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item interval={1000}>
          <div className="row">
            <div className="col-md-5 offset-md-4">
              <div className="testimonial-card">
                <div className="d-flex testimonial">
                  <img src={img8} alt="img" />
                  <div className="ps-3">
                    <h4>Albert</h4>
                    <p>Co-Founder</p>
                  </div>
                </div>
                <p>
                  "This website exceeded my expectations! The interface is
                  incredibly intuitive, making navigation a breeze. I'm
                  thoroughly impressed and will definitely be returning for
                  more!"
                </p>
              </div>
            </div>
          </div>
        </Carousel.Item>

        <Carousel.Item interval={1000}>
          <div className="row">
            <div className="col-md-5 offset-md-4">
              <div className="testimonial-card">
                <div className="d-flex testimonial">
                  <img src={img2} alt="img" />
                  <div className="ps-3">
                    <h4>yeldi</h4>
                    <p>IT Manager</p>
                  </div>
                </div>
                <p>
                  "Bravo to the website team for creating such a seamless and
                  delightful online experience. It's a true gem among websites,
                  and I couldn't be happier with my visit!"
                </p>
              </div>
            </div>
          </div>
        </Carousel.Item>

        <Carousel.Item interval={1000}>
          <div className="row">
            <div className="col-md-5 offset-md-4">
              <div className="testimonial-card">
                <div className="d-flex testimonial">
                  <img src={img7} alt="img" />
                  <div className="ps-3">
                    <h4>jhonD</h4>
                    <p>Founder</p>
                  </div>
                </div>
                <p>
                  "I can't say enough good things about this website! From the
                  sleek design to the wealth of valuable content, it's a true
                  pleasure to explore. The user experience is top-notch
                </p>
              </div>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default Testimonial;
