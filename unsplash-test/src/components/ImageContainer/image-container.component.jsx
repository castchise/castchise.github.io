import React from "react";

import { createApi } from "unsplash-js";

// import LazyImage from "../LazyImage/lazy-image.component";
import ImageItem from "../ImageItem/image-item.component";
import Masonry from "react-masonry-css";
import { removeDuplicateObjs } from "../../utils/index";

const breakpointColumnsObj = {
  500: 1,
  768: 2,
  default: 3
};

export default class ImageContainer extends React.Component {
  constructor() {
    super();

    this.state = {
      photosList: [],
      page: 1,
      loading: false
    };
  }

  async componentDidMount() {
    if (this.props.sourceType === "unsplash") {
      await this.getUnsplashPhotos();
    } else if (this.props.sourceType === "local") {
      this.getLocalPhotos();
    }
    window.addEventListener("scroll", this.updateListOnScroll);
  }

  updateListOnScroll = async () => {
    const pagePercentageScrolled = Math.floor(
      (window.scrollY / (this.getDocHeight() - window.innerHeight)) * 100
    );

    if (pagePercentageScrolled > 80 && !this.state.loading) {
      this.setState((prevState) => ({
        page: prevState.page + 1,
        loading: !prevState.loading
      }));
      await this.getUnsplashPhotos(20);
      this.setState((prevState) => ({ loading: !prevState.loading }));
    }
  };

  async componentDidUpdate(prevProps) {
    if (
      this.props.sourceType === "unsplash" &&
      prevProps.sourceType === "local"
    ) {
      this.setState({ photosList: [] });
      await this.getUnsplashPhotos();
    } else if (
      this.props.sourceType === "local" &&
      prevProps.sourceType === "unsplash"
    ) {
      this.setState({ photosList: [] });
      this.getLocalPhotos();
    }
  }

  getDocHeight = () => {
    return Math.max(
      document.body.scrollHeight,
      document.documentElement.scrollHeight,
      document.body.offsetHeight,
      document.documentElement.offsetHeight,
      document.body.clientHeight,
      document.documentElement.clientHeight
    );
  };

  getUnsplashPhotos = async (itemsCount) => {
    const unsplash = createApi({
      accessKey: process.env.REACT_APP_UNSPLASH_ACCESS_KEY
    });
    const { response } = await unsplash.photos.list({
      page: this.state.page,
      perPage: itemsCount || 15
    });
    const updatedList = this.state.photosList.concat(
      this.removeAdPictures(response.results)
    );
    this.setState({ photosList: updatedList });
  };

  getLocalPhotos = () => {
    const LS = window.localStorage;
    let storedItems = [...JSON.parse(LS["unsplash-app-storage"] || "[]")];
    storedItems = removeDuplicateObjs(storedItems);
    this.setState({ photosList: storedItems });
  };

  removeAdPictures = (list) =>
    list.filter((item) => {
      if (!item.sponsorship) {
        item.loaded = false;
        return item;
      }
      return false;
    });

  render() {
    return (
      <div className="p-5 sm:p-7 md:p-10">
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid flex -ml-5"
          columnClassName="my-masonry-grid_column bg-clip-padding pl-5"
        >
          {this.state.photosList.map((photo) => (
            <ImageItem {...photo} key={photo.id} />
          ))}
        </Masonry>
        {this.props.sourceType === "local" &&
        this.state.photosList.length === 0 ? (
          <div className="mt-24 w-full flex-col text-center ">
            <p className="mb-5 font-semibold text-4xl">
              No stored photos found! 😢
            </p>
            <p className="text-xl">
              Change source type and try to add them to your local gallery!
            </p>
          </div>
        ) : null}
      </div>
    );
  }
}
