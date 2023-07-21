import "./App.css";
// import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Services from "./components/service/Services";

import Navbar from "./components/Navbar";
import Qualifaction from "./components/qualification/Qualifaction";
import Testimonial from "./components/testimonial/Testimonial";
import Footer from "./components/footer/Footer";
import Skills from "./components/skill/Skills";
import Project from "./components/project/Project";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Home />
        <About />
        <Skills />
        <Services />
        <Qualifaction />
        <Project />
        <Testimonial />
        <Contact />
      </div>
      <Footer />
    </>
  );
}

export default App;
