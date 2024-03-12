import React from "react";
import Navbar from "../components/Navbar";
import download from '../assets/download.svg'
import sideImg from '../assets/portfolio-side.avif'

import Resume from '../assets/Resume.pdf'

const Portfolio = () => {
  const handleDownload = async ()=>{
    await confirm("Click ok to download Resume!")
  }
  return (
    <div>
      <Navbar />
      <div className="h-[100vh] bg-[url(../src/assets/portfolio.avif)] bg-cover bg-bottom">
        <div className="h-[100vh] bg-black/90 p-20">
          <h2 className="flex justify-center items-center gap-2 text-white my-10 text-3xl font-bold">Download Portfolio <img className="download h-8" src={download} /></h2>

          <div className="text-white border rounded-2xl p-8 w-[70vw] m-auto flex">
            <div className="w-[40vw] overflow-hidden"><img className="object-cover rounded-lg" src={sideImg} /></div>
            <div className="ml-4 w-[80vw]">
              <h1 className="text-2xl font-bold mb-4">Lorem</h1>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium aliquam, voluptates blanditiis labore recusandae vel, fugiat laborum unde consectetur illo qui delectus nam.</p>
              <p>Lorem ipsum dolor sit.</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil rem neque suscipit!</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae facere omnis iste quibusdam quae nihil voluptas eveniet, unde hic quia delectus quod, dignissimos molestiae ut corrupti tenetur consectetur, corporis reprehenderit laboriosam mollitia.</p>

              <button className="px-5 py-2 mt-16 border-2 rounded-md bg-purple-800">
                <a onClick={handleDownload} href={Resume} download>
                DOWNLOAD
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
