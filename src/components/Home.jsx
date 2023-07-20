import React from "react";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { HashLink } from "react-router-hash-link";

import "./style.css";

function Home() {
  return (
    <div className="row mt-3 " id="home">
      <div className="col-md-6 pt-5">
        <div className="row ">
          <div className=" col-2  social-icon  pt-2  text-center">
            <a
              href="https://www.instagram.com/pawan_ncr/"
              target="_blank"
              style={{ color: "#29335c" }}
              rel="noopener noreferrer"
            >
              <BsInstagram />
            </a>

            <a
              href="https://www.linkedin.com/in/pawan-kumar-7439561a0/"
              target="_blank"
              style={{ color: "#29335c" }}
              rel="noopener noreferrer"
            >
              <BsLinkedin />
            </a>
            <a
              href="https://github.com/pawankumar7310"
              target="_blank"
              style={{ color: "#29335c" }}
              rel="noopener noreferrer"
            >
              <BsGithub />
            </a>
          </div>
          <div className="col-10 ">
            <h1>Pawan Kumar </h1>

            <h5>FrontEnd Developer</h5>

            <p>
              I am a FrontEnd Developer and I am very passionate and dedicated
              to my work
            </p>
            <HashLink smooth to="#contact">
              <button className="buttons">
                Say hello <ChatOutlinedIcon />
              </button>
            </HashLink>
          </div>
        </div>
      </div>

      <div className="col-md-6 img-container mt-3">
        <div className="home_profile"></div>
      </div>
    </div>
  );
}

export default Home;
