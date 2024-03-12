import React from "react";

const Button = ({text}) => {
  return (
    <button id="learn" className="text-white mt-20 px-10 py-1 border-2 border-violet-600 rounded-md">
      <a href="#more">{text}</a>
    </button>
  );
};

export default Button;
