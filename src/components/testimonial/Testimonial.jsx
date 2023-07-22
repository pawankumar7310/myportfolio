import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import clients from "../../testimonial.json";
import "./testimonial.css";

function Testimonial() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <>
      <div className="d-flex justify-content-center align-items-center flex-column my-4">
        <h2>What our Client Say</h2>
      </div>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        {clients &&
          clients.map((data) => (
            <Carousel.Item interval={1000} key={data.id} className="px-1">
              <div className="row">
                <div className="col-md-5 m-auto">
                  <div className="testimonial-card">
                    <div className="d-flex testimonial">
                      <img
                        src={process.env.PUBLIC_URL + data.image}
                        alt="img"
                      />
                      <div className="ps-3">
                        <h4>{data.name}</h4>
                        <p>{data.position}</p>
                      </div>
                    </div>

                    <p>{data.comment}</p>
                  </div>
                </div>
              </div>
            </Carousel.Item>
          ))}
      </Carousel>
    </>
  );
}

export default Testimonial;
