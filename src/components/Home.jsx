import React from "react";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { HashLink } from "react-router-hash-link";

import "./style.css";

function Home() {
  return (
    <div className="row mt-5 " id="home">
      <div className="col-md-6 pt-5">
        <div className="row ">
          <div className=" col-1  social-icon offset-md-4 pt-2">
            <a
              href="https://www.instagram.com/pawan_ncr/"
              target="_blank"
              style={{ color: "#29335c" }}
            >
              <BsInstagram />
            </a>

            <a
              href="https://www.linkedin.com/in/pawan-kumar-7439561a0/"
              target="_blank"
              style={{ color: "#29335c" }}
            >
              <BsLinkedin />
            </a>
            <a
              href="https://github.com/pawankumar7310"
              target="_blank"
              style={{ color: "#29335c" }}
            >
              <BsGithub />
            </a>
          </div>
          <div className="col-7">
            <h1>Pawan Kumar </h1>

            <h5>FrontEnd Developer</h5>

            <p className="pe-3">
              I am a FrontEnd Developer and I am very passionate and dedicated
              to my work
            </p>
            <HashLink smooth to="#contact">
              <button className="buttons">
                Say hello{" "}
                {/* <a href="" style={{ color: "white !important" }}>
                  <GrWaypoint />
                </a> */}
                <ChatOutlinedIcon />
              </button>
            </HashLink>
          </div>
        </div>
      </div>

      <div className="col-md-6 img-container">
        <div className="home_profile"></div>
      </div>
    </div>
  );
}

export default Home;
