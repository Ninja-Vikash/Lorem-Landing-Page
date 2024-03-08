import React from "react";
import Navbar from "../components/Navbar";
import "../App.css";

import Background from "../components/Background";
import Main from "../components/Main";

const Home = () => {
  return (
    <div className="relative">
      <Navbar />

      <Background/>

      <Main/>
    </div>
  );
};

export default Home;
