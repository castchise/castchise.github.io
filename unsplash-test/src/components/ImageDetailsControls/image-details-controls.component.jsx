import React from "react";

import { toDataURL } from "../../utils/index";

import Btn from "../Btn/btn.component";

const ImageDetailsControls = (props) => {
  async function download(size) {
    const a = document.createElement("a");
    a.href = await toDataURL(props.urls[size]);
    a.download = "";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }

  return (
    <div className="mt-3 flex flex-col items-center">
      <p className="text-2xl text-gray-500 mb-2">Download:</p>
      <div>
        <Btn contentClasses="mr-5" onClick={() => download("small")}>
          Small
        </Btn>
        <Btn contentClasses="mr-5" onClick={() => download("regular")}>
          Medium
        </Btn>
        <Btn onClick={() => download("full")}>Large</Btn>
      </div>
    </div>
  );
};
export default ImageDetailsControls;
