import React from "react";
import { withRouter } from "react-router-dom";

import { SiUnsplash } from "react-icons/si";
import { GrGallery } from "react-icons/gr";
import { IoSyncSharp } from "react-icons/io5";

const Header = withRouter(({ sourceType, changeSourceType, history }) => (
  <header className="py-5 shadow-md sticky top-0 left-0 w-full z-50 bg-white">
    <div className="max-w-1200 mx-auto flex items-center px-5 md:px-10">
      <div className="flex cursor-pointer" onClick={() => history.push("/")}>
        {sourceType === "unsplash" ? (
          <SiUnsplash size={25} />
        ) : (
          <GrGallery size={25} />
        )}
        <p className="font-bold leading-none ml-2 flex flex-col">
          {sourceType === "unsplash" ? (
            <span className="text-xl">UNSPLASH</span>
          ) : (
            <span className="text-xl">LOCAL</span>
          )}
          <span className="-mt-1 font-normal">gallery</span>
        </p>
      </div>
      <div
        className="ml-auto cursor-pointer transition-transform transform hover:rotate-180 active:rotate-360"
        onClick={() =>
          changeSourceType(sourceType === "unsplash" ? "local" : "unsplash")
        }
      >
        <IoSyncSharp size={25} />
      </div>
    </div>
  </header>
));

export default Header;
