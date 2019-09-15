import React, { Component } from 'react';

import Canvas from './canvas';

class Selfie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageSrc: "img/small-boi.png",
      width: 400,
      height: 400,
      xPixel: -5,
      pixelSize: 1,
      threshold: 0.5,
    };
  }

  componentDidMount() {
    this.requestFrame = requestAnimationFrame(this.updateAnimation);
  }

  componentWillUnmount() {
    this.stopThePresses();
  }

  updateAnimation = () => {
    let nextPixel = this.state.xPixel + this.state.pixelSize;

    this.setState({
      xPixel: nextPixel,
    });

    if (this.state.xPixel >= 400) {
      this.stopThePresses();
    } else {
      this.requestFrame = requestAnimationFrame(this.updateAnimation);
    }
  }

  stopThePresses = () => {
    console.log('stop!')
    cancelAnimationFrame(this.requestFrame);
  }

  render() {
    const dimensions = {
      width: this.state.width,
      height: this.state.height,
    };

    return (
      <Canvas
        imageSrc={ this.state.imageSrc }
        xPixel={ this.state.xPixel }
        pixelSize={ this.state.pixelSize }
        threshold={ this.state.threshold }
        dimensions={ dimensions } />
    );
  }
}

export default Selfie;
