import React from "react";
import Navbar from "../components/Navbar";
import "../App.css";

import Background from "../components/Background";
import Main from "../components/Main";
import Footer from "../components/Footer"

const Home = () => {
  return (
    <div className="relative overflow-hidden bg-slate-950">
      <Navbar />

      <Background/>

      <Main/>

      <div className="container flex justify-center">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
