import React from "react";
import { useState } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Education from "./Education";
import Experience from "./Experience";
import "./qualification.css";
function Qualifaction() {
  const [key, setKey] = useState("home");
  return (
    <>
      <div
        className="d-flex justify-content-center align-items-center flex-column mt-5"
        id="qualification"
      >
        <h2>Qualifaction</h2>
        <p>my journey</p>

        <Tabs
          id="controlled-tab-example"
          activeKey={key}
          onSelect={(k) => setKey(k)}
          className="mb-3 custom-tabs"
          style={{ border: "none", outline: "none" }}
        >
          <Tab eventKey="home" title=" Educations" id="tab-color">
            <Education />
          </Tab>
          <Tab eventKey="profile" title="Experience">
            <Experience />
          </Tab>
        </Tabs>
      </div>
    </>
  );
}

export default Qualifaction;
