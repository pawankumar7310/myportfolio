import React, { useState } from "react";
import { MdOutlineWorkHistory } from "react-icons/md";
import { MdOutlineWorkspacePremium } from "react-icons/md";
import { BiSupport } from "react-icons/bi";
import "./about.css";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import pawan from "./pawan.pdf";

function About() {
  const [counterOn, setCounterOn] = useState(false);

  return (
    <div id="about">
      <div className="d-flex justify-content-center align-items-center flex-column mt-5">
        <h2>About me</h2>
        <p>My introduction</p>
      </div>
      <div className="row">
        <div className="col-md-4">
          <div className="about_profile"></div>
        </div>

        <div className="col-md-8 ">
          <ScrollTrigger
            onEnter={() => setCounterOn(true)}
            onExit={() => setCounterOn(false)}
          >
            <div className="d-flex justify-content-center align-items-center flex-wrap p-2">
              <div
                className="about_card"
                data-aos="fade-down"
                style={{
                  background: "#607D8B",
                  border: "none",
                  color: "white",
                }}
              >
                <span style={{ fontSize: "20px" }}>
                  <MdOutlineWorkspacePremium />
                </span>
                <h5>Experience</h5>

                <p>
                  {counterOn && (
                    <CountUp start={0} end={6} duration={5} delay={0} />
                  )}{" "}
                  months
                </p>
              </div>

              <div
                className="about_card my-2"
                data-aos="fade-up"
                style={{
                  background: "#607D8B",
                  border: "none",
                  color: "white",
                }}
              >
                <span style={{ fontSize: "20px" }}>
                  <MdOutlineWorkHistory />
                </span>
                <h5>Completed</h5>
                <p>
                  {counterOn && (
                    <CountUp start={0} end={10} duration={5} delay={0} />
                  )}
                  + project
                </p>
              </div>

              <div
                className="about_card"
                data-aos="fade-down"
                style={{
                  background: "#607D8B",
                  border: "none",
                  color: "white",
                }}
              >
                <span style={{ fontSize: "20px" }}>
                  <BiSupport />
                </span>

                <h5>Support</h5>
                <p>
                  Online{" "}
                  {counterOn && (
                    <>
                      <CountUp start={0} end={24} duration={5} delay={0} />/
                      <CountUp start={0} end={7} duration={5} delay={0} />
                    </>
                  )}
                </p>
              </div>
            </div>
            <p>
              Experienced frontend developer with a passion for crafting
              visually captivating and user-friendly web applications.
              Proficient in HTML, CSS, JavaScript and React. Committed to
              delivering seamless user experiences and optimizing performance. A
              collaborative team player dedicated to staying updated with the
              latest trends and technologies.
            </p>
            <a href={pawan} target="_blank">
              <button className="buttons ">Download CV</button>
            </a>
          </ScrollTrigger>
        </div>
      </div>
    </div>
  );
}

export default About;
