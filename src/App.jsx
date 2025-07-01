import React from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Publications from "./components/Publications";
import Achievements from "./components/Achievements";
import Societies from "./components/Societies";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <About />
      <Education />
      <Skills />
      <Experience />
      <Projects />
      <Publications />
      <Achievements />
      <Societies />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
