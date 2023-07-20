import React from "react";
import { GoGoal } from "react-icons/go";
import "./experience.css";

export default function Experience() {
  return (
    <>
      <div className="timeline">
        <div className="containers left-container">
          <span className="target">
            <GoGoal />
          </span>
          <div className="text-box">
            <h4 className="m-0">Online Training</h4>
            <small className="m-0">Coding ninja</small>
            <p className="m-0">Learning web Development course Online</p>
            <span className="left-container-arrow"></span>
          </div>
        </div>

        <div className="containers right-container">
          <span className="target">
            <GoGoal />
          </span>
          <div className="text-box">
            <h3 className="m-0">InternShip</h3>
            <small className="m-0">PxMonk ( Noida )</small>
            <p className="m-0">I have completed 6 month frontend Internship</p>
            <span className="right-container-arrow"></span>
          </div>
        </div>

        <div className="containers left-container">
          <span className="target">
            <GoGoal />
          </span>
          <div className="text-box">
            <h3 className="m-0">Adding Skill</h3>
            <small className="m-0">MERN</small>
            <p className="m-0">Learning full stack</p>
            <span className="left-container-arrow"></span>
          </div>
        </div>
      </div>
    </>
  );
}
