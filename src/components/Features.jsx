import React from 'react'
import bulb from "../assets/bulb.svg";
import line from '../assets/line.svg'
import communication from '../assets/communication.svg'

const Features = () => {
  return (
    <div className="appearUp relative top-24 w-full flex justify-between gap-20">
        <div className="text-white flex gap-1 w-[32vw] items-start scaleUp">
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
        <div className="text-white flex gap-1 w-[28vw] items-start scaleUp">
          <picture>
            <img className="h-28" src={line} alt="" />
          </picture>
          <div className="w-[20vw]">
            <h1 className="font-bold text-lg">GROWTH</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores
              rem suscipit ipsum{" "}
            </p>
          </div>
        </div>
        <div className="text-white flex gap-1 w-[24vw] items-start scaleUp">
          <picture>
            <img className="h-28" src={communication} alt="" />
          </picture>
          <div className="w-[20vw]">
            <h1 className="font-bold text-lg">COMMUNICATOIN</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores
              rem suscipit ipsum{" "}
            </p>
          </div>
        </div>
      </div>
  )
}

export default Features
