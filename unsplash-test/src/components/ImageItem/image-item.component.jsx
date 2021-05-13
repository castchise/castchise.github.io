import React from "react";

import ImageControls from "../ImageControls/image-controls.component";
import LazyImage from "../LazyImage/lazy-image.component";

import { copyToClipboard } from "../../utils/index";

const ImageItem = (element) => (
  <div className="relative mb-5">
    <LazyImage {...element} />
    <ImageControls
      element={element}
      copyHandler={copyToClipboard}
    />
  </div>
);

export default ImageItem;
