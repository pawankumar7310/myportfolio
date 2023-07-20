import React from "react";
// import "./qualification.css";
import { GoGoal } from "react-icons/go";
import "./experience.css";

export default function Education() {
  return (
    <>
      <div className="timeline">
        <div className="containers left-container">
          <span className="target">
            <GoGoal />
          </span>
          <div className="text-box">
            <h4 className="m-0">10th Class</h4>
            <small className="m-0">CBSE</small>
            <p className="m-0">Govt Boys Ser Sec School New Kondly Delhi 96</p>
            <span className="left-container-arrow"></span>
          </div>
        </div>

        <div className="containers right-container">
          <span className="target">
            <GoGoal />
          </span>
          <div className="text-box">
            <h3 className="m-0">12th class</h3>
            <small className="m-0">UP</small>
            <p className="m-0">Janak kumari BSHSS inter College</p>
            <span className="right-container-arrow"></span>
          </div>
        </div>

        <div className="containers left-container">
          <span className="target">
            <GoGoal />
          </span>
          <div className="text-box">
            <h3 className="m-0">Graducation</h3>
            <small className="m-0"> DU</small>
            <p className="m-0">Maharaja Agrasen College</p>
            <span className="left-container-arrow"></span>
          </div>
        </div>

        <div className="containers right-container">
          <span className="target">
            <GoGoal />
          </span>
          <div className="text-box">
            <h3 className="m-0">Master</h3>
            <small className="m-0">MCA</small>
            <p className="m-0">CSJMU Kanpur</p>
            <span className="right-container-arrow"></span>
          </div>
        </div>
      </div>
    </>
  );
}
