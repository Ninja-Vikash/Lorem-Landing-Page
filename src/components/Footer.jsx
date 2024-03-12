import React from "react";
import github from "../assets/github.svg";
import linkedin from "../assets/linkedin.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="container absolute bottom-6 w-[80vw] flex justify-between items-end">
      <div>
        <h2 className="text-white text-xl font-medium">
          <Link to="/">Lorem</Link>
        </h2>
      </div>

      <div className="flex gap-2">
        <a target="_blank" href="https://github.com/Ninja-Vikash">
          <img className="h-7" src={github} height={10} />
        </a>
        <a target="_blank" href="https://www.linkedin.com/in/vikashkumar003/">
          <img className="h-7" src={linkedin} height={10} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
