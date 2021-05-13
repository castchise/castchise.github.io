import React from "react";
import { withRouter } from "react-router-dom";
import { addToLocalStorage } from "../../utils/index";

import { IoAdd, IoCodeSlashOutline } from "react-icons/io5";

const ImageControls = withRouter(
  ({ history, element, cyanHandler, copyHandler }) => {
    let imageTitle = element.alt_description || element.description;
    if (imageTitle) {
      imageTitle = imageTitle.charAt(0).toUpperCase() + imageTitle.slice(1);
    }

    return (
      <div
        className="p-5 cursor-zoom-in z-20 absolute inset-0 opacity-0 transition-opacity hover:opacity-100 active:cursor-zoom-out"
        onClick={() =>
          history.push({ pathname: `/image/${element.id}`, state: { element } })
        }
      >
        {imageTitle ? (
          <a
            href={element.links.html}
            target="_blank"
            rel="noreferrer"
            className="relative z-10 block text-white font-normal text-2xl truncate transition-all opacity-80 hover:opacity-100"
          >
            {imageTitle}
          </a>
        ) : null}
        <p className="z-10 relative uppercase text-md font-semibold text-white transition-all opacity-60 hover:opacity-90">
          by&nbsp;
          <a href={element.user.links.html} target="_blank" rel="noreferrer">
            {element.user.first_name}
            {element.user.last_name ? ` ${element.user.last_name}` : null}
          </a>
        </p>

        <div
          className="cursor-pointer inline-flex items-center justify-center shadow-lg absolute right-3 z-10 bg-white rounded-full"
          style={{ height: 30, width: 30, bottom: "5rem" }}
          onClick={(event) => copyHandler(event, element)}
        >
          <IoCodeSlashOutline
            size={18}
            className="opacity-30 transition-opacity duration-200 hover:opacity-100"
          />
        </div>

        <div
          className="cursor-pointer inline-flex items-center justify-center shadow-lg absolute right-3 z-10 bg-white rounded-full"
          style={{ height: 30, width: 30, bottom: "1rem" }}
          onClick={(event) => {
            event.stopPropagation();
            addToLocalStorage(element);
          }}
        >
          <IoAdd
            size={20}
            className="opacity-30 transition-opacity duration-200 hover:opacity-100"
          />
        </div>
        <div className="absolute inset-0 z-0 h-full w-full bg-black-cover bg-opacity-20"></div>
      </div>
    );
  }
);

export default ImageControls;
