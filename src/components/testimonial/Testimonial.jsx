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
                  <div className="ps-2">
                    <h4>jhonD</h4>
                    <p>web Developer</p>
                  </div>
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
                  rerum quod, id, illo aut praesentium earum unde ea ab minima
                  libero. Iure quo ex laborum, quis sunt incidunt modi
                  accusantium.
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
                  <div className="ps-2">
                    <h4>jhonD</h4>
                    <p>web Developer</p>
                  </div>
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
                  rerum quod, id, illo aut praesentium earum unde ea ab minima
                  libero. Iure quo ex laborum, quis sunt incidunt modi
                  accusantium.
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
                  <div className="ps-2">
                    <h4>jhonD</h4>
                    <p>web Developer</p>
                  </div>
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
                  rerum quod, id, illo aut praesentium earum unde ea ab minima
                  libero. Iure quo ex laborum, quis sunt incidunt modi
                  accusantium.
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
