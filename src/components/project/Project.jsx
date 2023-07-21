import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import AllProject from "./AllProject";
import WebSite from "./WebSite";
import ReactProject from "./ReactProject";

export default function Project() {
  return (
    <div className="my-5">
      <div
        className="d-flex justify-content-center align-items-center flex-column mt-5"
        id="services"
      >
        <h2>Projects</h2>
        <p>Most recent work</p>
      </div>
      <Tabs
        defaultActiveKey="profile"
        id="justify-tab-example"
        className="mb-3"
        justify
      >
        <Tab eventKey="home" title="All">
          <AllProject />
          <hr></hr>
        </Tab>
        <Tab eventKey="profile" title="Web">
          <WebSite />
          <hr></hr>
        </Tab>
        <Tab eventKey="longer-tab" title="React">
          <ReactProject />
          <hr></hr>
        </Tab>
        <Tab eventKey="contact" title="upComing">
          <h2 className="text-center mt-5">MERN project Coming soon...</h2>
          <hr></hr>
        </Tab>
      </Tabs>
    </div>
  );
}
