import React from "react";
import Button from "./Button";
import Features from "./Features";

import shieldHearth from "../assets/shield-heart.svg"

const Main = () => {
  return (
    <>
      <div className="absolute h-[100vh] w-[100vw] px-32 top-0 flex justify-center items-start flex-col">
        <div className="slideUp main-text">
          <h2 className="text-slate-500 text-3xl">LANDING PAGE</h2>
          <h1 className="text-5xl font-normal text-white my-2">
            <span className="text-violet-500">IF YOU CAN</span> DREAM IT,
          </h1>
          <h1 className="text-5xl font-normal text-white">
            <span className="text-violet-500">YOU CAN</span> DO IT
          </h1>
        </div>

        <Button text="LEARN MORE" />

        <Features />
      </div>

      <div id="more" className="h-[150vh] py-44 w-[60vw] mx-auto space-y-2">
        <h2 className="text-white text-8xl font-bold">We are serving</h2>
        <h2 className="text-slate-400 text-6xl font-bold">the nation</h2>
        <h2 className="text-white text-6xl font-bold">
          by teaching, <span className="text-yellow-300">Aspirants!</span>
        </h2>
        <h2 className="text-white text-9xl font-bold">Enroll now!</h2>
        <h2 className="text-gray-400 text-7xl font-bold">
          and be the part of our
        </h2>
        <h2 className="text-white text-8xl font-bold">Community!</h2>

        <div className="pt-24">
          <p className="text-white font-medium text-3xl">We are open to collabrate!</p>
          <p className="text-white font-medium text-3xl flex items-center gap-2">With open sources <img className="h-6" src={shieldHearth} />!</p>
        </div>
      </div>
    </>
  );
};

export default Main;
