import React from "react";
import { Blurhash } from "react-blurhash";

import "./styles.css";

export default class LazyImage extends React.Component {
  constructor() {
    super();

    this.state = {
      isLoaded: false,
      height: 600,
      width: 400
    };
  }

  componentDidMount() {
    if (this.props.height < this.props.width) {
      this.setState({ height: 400 });
    }
  }

  render() {
    return (
      <div className="relative"
        style={{
          paddingBottom: `${(this.props.height / this.props.width) * 100}%`
        }}
      >
        <img
          src={this.props.urls.regular}
          alt={this.props.alt_description}
          // width={this.props.width}
          // height={this.props.height}
          // width={this.state.width}
          // height={this.state.height}
          className={`absolute rounded w-full transition-all ${
            this.state.isLoaded ? "opacity-100" : "opacity-0"
          }`}
          onLoad={() => {
            this.setState({ isLoaded: true });
          }}
        />
        <Blurhash
          hash={this.props.blur_hash}
          width={this.props.width}
          height={this.props.height}
          // width={this.state.width}
          // height={this.state.height}
          color={this.props.color}
          resolutionX={32}
          resolutionY={32}
          punch={1}
          className={`preload absolute inset-0 transition-all ${
            this.state.isLoaded ? "opacity-0 " : "opacity-100"
          }`}
        />
      </div>
    );
  }
}
