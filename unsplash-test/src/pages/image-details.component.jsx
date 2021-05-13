import React from "react";
import { createApi } from "unsplash-js";
import { addToLocalStorage } from "../utils/index";

import { IoLocationOutline, IoAdd, IoHome } from "react-icons/io5";

import LazyImage from "../components/LazyImage/lazy-image.component";
import AuthorBio from "../components/AuthorBio/author-bio.component";
import ImageDetailsControls from "../components/ImageDetailsControls/image-details-controls.component";

export default class ImageDetails extends React.Component {
  constructor() {
    super();

    this.state = {
      element: {}
    };
  }

  async componentDidMount() {
    const unsplash = createApi({
      accessKey: process.env.REACT_APP_UNSPLASH_ACCESS_KEY
    });
    const { response } = await unsplash.photos.get({
      photoId: this.props.match.params.slug
    });
    this.setState({ element: response });
  }

  render() {
    return (
      <div className="relative flex items-center justify-center">
        {this.state.element.id ? (
          <div
            className={`mt-10 w-full ${
              this.state.element.height > this.state.element.width
                ? "max-w-500"
                : "max-w-750"
            }`}
          >
            <AuthorBio {...this.state.element.user} />
            <div className="relative">
              {this.state.element.location.title ? (
                <h4 className="flex items-center text-gray-300 absolute top-3 right-3 z-10 sm:ml-auto">
                  <IoLocationOutline size={15} />
                  <span className="text-1xl">
                    {this.state.element.location.title}
                  </span>
                </h4>
              ) : null}
              <LazyImage {...this.state.element} />
            </div>
            <ImageDetailsControls {...this.state.element} />
          </div>
        ) : null}

        <div
          className="cursor-pointer fixed right-1 top-2 sm:absolute sm:right-72 sm:top-12 border bg-white rounded-full shadow-xl flex items-center justify-center transform transition-transform hover:bg-gray-100 hover:translate-y-1"
          style={{ height: 45, width: 45 }}
          onClick={() => this.props.history.push("/")}
        >
          <IoHome size={25} />
        </div>
        <div
          className="cursor-pointer fixed right-1 top-24 sm:absolute sm:right-72 sm:top-36 border bg-white rounded-full shadow-xl flex items-center justify-center transform transition-transform hover:bg-gray-100 hover:translate-y-1"
          style={{ height: 45, width: 45 }}
          onClick={() => addToLocalStorage(this.state.element)}
        >
          <IoAdd size={35} />
        </div>
      </div>
    );
  }
}
