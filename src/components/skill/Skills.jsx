import React from "react";
import { AiFillHtml5, AiOutlineApi } from "react-icons/ai";
import { PiFileCssFill, PiFileSqlLight } from "react-icons/pi";
import { BiLogoJavascript } from "react-icons/bi";
import { BsBootstrap, BsDatabaseFillDown } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { GrReactjs } from "react-icons/gr";
import { SiExpress, SiPostman } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import "./skill.css";

function Skills() {
  return (
    <div className="row p-3" id="skills">
      <div className="d-flex justify-content-center align-items-center flex-column mt-5">
        <h2>Skills</h2>
        <p>My technical level</p>
      </div>
      <div className="col-md-6">
        <div className="row">
          <div
            className="col-md-8 offset-md-3 p-3 m-auto text-center py-5 mb-3 skill-card"
            data-aos="zoom-in"
            style={{ background: "#607D8B", border: "none", color: "white" }}
          >
            <h3>FrontEnd Developer</h3>
            <div className=" row d-flex justify-content-between">
              <div className="col-6 py-3">
                <div className="d-flex  align-items-center">
                  <span className="font-icon">
                    <AiFillHtml5 />
                  </span>
                  <h5 className="m-0 ps-2">Html</h5>
                </div>
              </div>

              <div className="col-6 ps-2 py-3">
                <div className=" d-flex align-items-center">
                  <span className="font-icon">
                    <BsBootstrap />
                  </span>
                  <h5 className="m-0 ps-2">bootstrap</h5>
                </div>
              </div>
            </div>

            <div className=" row d-flex justify-content-between">
              <div className="col-6  py-3">
                <div className="d-flex  align-items-center">
                  <span className="font-icon">
                    <PiFileCssFill />
                  </span>
                  <h5 className="m-0 ps-2">CSS</h5>
                </div>
              </div>

              <div className="col-6 ps-2 py-3">
                <div className="d-flex align-items-center ">
                  <span className="font-icon">
                    <BsGithub />
                  </span>
                  <h5 className="m-0 ps-2">git</h5>
                </div>
              </div>
            </div>

            <div className=" row d-flex justify-content-between">
              <div className="col-6  py-3">
                <div className="d-flex  align-items-center">
                  <span className="font-icon">
                    <BiLogoJavascript />
                  </span>
                  <h5 className="m-0  ps-2">javaScript</h5>
                </div>
              </div>

              <div className="col-6 ps-2 py-3">
                <div className="d-flex align-items-center ">
                  <span className="font-icon">
                    <GrReactjs />
                  </span>
                  <h5 className="m-0 ps-2">React</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-6">
        <div className="row">
          <div
            className="col-md-8 offset-md-3 p-3 m-auto text-center py-5 skill-card"
            data-aos="zoom-in"
            style={{ background: "#607D8B", border: "none", color: "white" }}
          >
            <h3>Backend Developer</h3>
            <div className=" row d-flex justify-content-between">
              <div className="col-6 py-3">
                <div className="d-flex  align-items-center">
                  <span className="font-icon">
                    <FaNodeJs />
                  </span>
                  <h5 className="m-0 ps-2">Node js</h5>
                </div>
              </div>

              <div className="col-6 ps-2 py-3">
                <div className=" d-flex align-items-center">
                  <span className="font-icon">
                    <SiExpress />
                  </span>
                  <h5 className="m-0 ps-2">express</h5>
                </div>
              </div>
            </div>

            <div className=" row d-flex justify-content-between">
              <div className="col-6  py-3">
                <div className="d-flex  align-items-center">
                  <span className="font-icon">
                    <PiFileSqlLight />
                  </span>
                  <h5 className="m-0 ps-2">Sql</h5>
                </div>
              </div>

              <div className="col-6 ps-2 py-3">
                <div className="d-flex align-items-center ">
                  <span className="font-icon">
                    <BsDatabaseFillDown />
                  </span>
                  <h5 className="m-0 ps-2">No sql</h5>
                </div>
              </div>
            </div>

            <div className=" row d-flex justify-content-between">
              <div className="col-6  py-3">
                <div className="d-flex  align-items-center">
                  <span className="font-icon">
                    <SiPostman />
                  </span>
                  <h5 className="m-0  ps-2">postman</h5>
                </div>
              </div>

              <div className="col-6 ps-2 py-3">
                <div className="d-flex align-items-center ">
                  <span className="font-icon">
                    <AiOutlineApi />
                  </span>
                  <h5 className="m-0 ps-2">Api</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
