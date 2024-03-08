import React from 'react'
import bgImg from "../assets/modern-city.jpg";

const Background = () => {
  return (
    <div className="h-[100vh] bg-slate-950 overflow-hidden relative">
        <div className="outer-circle h-[300vh] w-[300vh] rounded-full bg-transparent absolute translate-x-0 -translate-y-72 border-2 border-slate-700/30">
          <div className="circle-1 h-[200vh] w-[200vh] rounded-full bg-transparent translate-x-[38vw] translate-y-[60vh]  border-2 border-slate-700/30 flex justify-center items-center">
            <div className="bg-image h-[195vh] w-[195vh] rounded-full absolute z-10  border-2 border-slate-700/30 overflow-hidden ">
              <div className=" z-10 rounded-full overflow-hidden">
                <img className="object-cover" src={bgImg} />
                <div className="h-[195vh] w-[195vh] bg-purple-950/90 absolute top-0 z-40"></div>
              </div>
            </div>
            <div className="h-[100vh] w-[100vh] rounded-full translate-x-8 -translate-y-10 absolute z-20 bg-slate-950"></div>
          </div>
        </div>
      </div>
  )
}

export default Background
