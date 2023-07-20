import "./App.css";
// import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Services from "./components/service/Services";
import Skills from "./components/Skills";
import Navbar from "./components/Navbar";
import Qualifaction from "./components/qualification/Qualifaction";
import Testimonial from "./components/testimonial/Testimonial";
import Footer from "./components/footer/Footer";

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
        <Testimonial />
        <Contact />
      </div>
      <Footer />
    </>
  );
}

export default App;
