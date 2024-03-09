import React from "react";
import Navbar from "../components/Navbar";

const About = () => {
  return (
    <div>
      <Navbar />
      <div className="container h-[100vh] bg-[url(../src/assets/about.avif)] bg-cover bg-bottom">
        <div className="relative h-[100vh] bg-slate-950/80 flex items-center justify-center">
          <h1 className="text-9xl font-bold text-white translate-y-[24vh]">LEARNING</h1>
        </div>
      </div>
    </div>
  );
};

export default About;
