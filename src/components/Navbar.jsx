import React from "react";
import { Link } from "react-router-dom";
import logo from '/logo.svg'
import SocialMedia from "./SocialMedia";

const Navbar = () => {
  return (
    <nav className="w-[100vw] absolute z-20 container flex justify-between items-center px-32 py-8">
      <div className="flex items-center gap-14">
        <div className="logo font-normal text-2xl text-white">
          <Link to="/" className="flex items-center gap-2">
            <img className="h-8" src={logo} height={10} /> LOREM
          </Link>
        </div>
        
        <ul className="flex items-center p-4 gap-14 text-slate-400 text-sm">
          <li>
            <Link className="hover:text-slate-300" to="/about">
              ABOUT
            </Link>
          </li>
          <li>
            <Link className="hover:text-slate-300" to="/portfolio">
              PORTFOLIO
            </Link>
          </li>
          <li>
            <Link className="hover:text-slate-300" to="/service">
              SERVICES
            </Link>
          </li>
          <li>
            <Link className="hover:text-slate-300" to="/contact">
              CONTACTS
            </Link>
          </li>
        </ul>
      </div>

      <SocialMedia/>
    </nav>
  );
};

export default Navbar;
