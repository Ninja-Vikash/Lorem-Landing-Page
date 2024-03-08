import React from "react";
import Button from "./Button";
import bulb from "../assets/bulb.svg";
import line from '../assets/line.svg'
import communication from '../assets/communication.svg'

const Main = () => {
  return (
    <div className="absolute h-[100vh] w-[100vw] px-32 top-0 flex justify-center items-start flex-col">
      <div>
        <h2 className="text-slate-500 text-3xl">LANDING PAGE</h2>
        <h1 className="text-5xl font-normal text-white my-2">
          <span className="text-violet-500">IF YOU CAN</span> DREAM IT,
        </h1>
        <h1 className="text-5xl font-normal text-white">
          <span className="text-violet-500">YOU CAN</span> DO IT
        </h1>
      </div>

      <Button />

      <div className="relative top-24 w-full flex justify-between gap-20">
        <div className="text-white flex gap-1 w-[32vw] items-start">
          <picture>
            <img className="h-28" src={bulb} alt="" />
          </picture>
          <div className="w-[20vw]">
            <h1 className="font-bold text-lg">BIG DATA</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores
              rem suscipit ipsum{" "}
            </p>
          </div>
        </div>
        <div className="text-white flex gap-1 w-[28vw] items-start">
          <picture>
            <img className="h-28" src={line} alt="" />
          </picture>
          <div className="w-[20vw]">
            <h1 className="font-bold text-lg">BIG DATA</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores
              rem suscipit ipsum{" "}
            </p>
          </div>
        </div>
        <div className="text-white flex gap-1 w-[24vw] items-start">
          <picture>
            <img className="h-28" src={communication} alt="" />
          </picture>
          <div className="w-[20vw]">
            <h1 className="font-bold text-lg">BIG DATA</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores
              rem suscipit ipsum{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
