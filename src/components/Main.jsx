import React from "react";
import Button from "./Button";
import Features from "./Features";

const Main = () => {
  return (
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

      <Button />

      <Features/>
    </div>
  );
};

export default Main;
