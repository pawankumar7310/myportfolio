import React from "react";
import { AiFillHtml5, AiOutlineApi } from "react-icons/ai";
import { PiFileCssFill, PiFileSqlLight } from "react-icons/pi";
import { BiLogoJavascript } from "react-icons/bi";
import { BsBootstrap, BsDatabaseFillDown } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { GrReactjs } from "react-icons/gr";
import { SiExpress, SiPostman } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";

function Skills() {
  return (
    <div className="row " id="skills">
      <div className="d-flex justify-content-center align-items-center flex-column mt-5">
        <h2>Skills</h2>
        <p>My technical level</p>
      </div>
      <div className="col-md-6 ">
        <div
          className="m-auto text-center p-5 mt-3"
          style={{ width: "75%", border: "1px solid black" }}
          data-aos="zoom-in"
        >
          <h3>FrontEnd Developer</h3>
          <div className=" row d-flex justify-content-between">
            <div className="col-6 py-3">
              <div className="d-flex  align-items-center">
                <AiFillHtml5 />
                <h5 className="m-0 ps-2">Html</h5>
              </div>
            </div>

            <div className="col-6 ps-2 py-3">
              <div className=" d-flex align-items-center">
                <BsBootstrap />
                <h5 className="m-0 ps-2">bootstrap</h5>
              </div>
            </div>
          </div>

          <div className=" row d-flex justify-content-between">
            <div className="col-6  py-3">
              <div className="d-flex  align-items-center">
                <PiFileCssFill />
                <h5 className="m-0 ps-2">CSS</h5>
              </div>
            </div>

            <div className="col-6 ps-2 py-3">
              <div className="d-flex align-items-center ">
                <BsGithub />
                <h5 className="m-0 ps-2">git</h5>
              </div>
            </div>
          </div>

          <div className=" row d-flex justify-content-between">
            <div className="col-6  py-3">
              <div className="d-flex  align-items-center">
                <BiLogoJavascript />
                <h5 className="m-0  ps-2">javaScript</h5>
              </div>
            </div>

            <div className="col-6 ps-2 py-3">
              <div className="d-flex align-items-center ">
                <GrReactjs />
                <h5 className="m-0 ps-2">React</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-6">
        <div
          className="m-auto text-center p-5 mt-3"
          style={{ width: "75%", border: "1px solid black" }}
          data-aos="zoom-in"
        >
          <h3>Backend Developer</h3>
          <div className=" row d-flex justify-content-between">
            <div className="col-6 py-3">
              <div className="d-flex  align-items-center">
                <FaNodeJs />
                <h5 className="m-0 ps-2">Node js</h5>
              </div>
            </div>

            <div className="col-6 ps-2 py-3">
              <div className=" d-flex align-items-center">
                <SiExpress />
                <h5 className="m-0 ps-2">express</h5>
              </div>
            </div>
          </div>

          <div className=" row d-flex justify-content-between">
            <div className="col-6  py-3">
              <div className="d-flex  align-items-center">
                <PiFileSqlLight />
                <h5 className="m-0 ps-2">Sql</h5>
              </div>
            </div>

            <div className="col-6 ps-2 py-3">
              <div className="d-flex align-items-center ">
                <BsDatabaseFillDown />
                <h5 className="m-0 ps-2">No sql</h5>
              </div>
            </div>
          </div>

          <div className=" row d-flex justify-content-between">
            <div className="col-6  py-3">
              <div className="d-flex  align-items-center">
                <SiPostman />
                <h5 className="m-0  ps-2">postman</h5>
              </div>
            </div>

            <div className="col-6 ps-2 py-3">
              <div className="d-flex align-items-center ">
                <AiOutlineApi />
                <h5 className="m-0 ps-2">Api</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
