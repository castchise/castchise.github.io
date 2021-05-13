import React from "react";

const Btn = ({ children, ...props }) => (
  <button
    className={`py-3 px-10 outline-none border rounded text-xl text-gray-500 border-gray-300 uppercase focus:outline-none hover:bg-gray-500 hover:text-white ${props.contentClasses}`}
    {...props}
  >
    {children}
  </button>
);

export default Btn;
