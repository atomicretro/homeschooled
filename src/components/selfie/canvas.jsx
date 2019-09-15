import React, { Component } from 'react';

class HTMLCanvas extends Component {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <canvas
        width={ this.props.dimensions.width }
        height={ this.props.dimensions.height }
        className="canvas"
        ref={ node => node ? this.props.contextRef(node.getContext('2d')) : null } />
    );
  }
}

class ReactCanvas extends Component {
  componentDidMount() {
    this.drawField();
  }

  componentDidUpdate() {
    this.drawFrame();
  }

  saveContext = (ctx) => {
    this.ctx = ctx;
  }

  drawField = () => {
    const image = new Image();
    image.src = this.props.imageSrc;
    image.onload = () => {
      this.ctx.drawImage(image, 0, 0);
    };
  }

  drawFrame = () => {
    console.log(this.props.xPixel)
    for (let yPixel = 0; yPixel < 400; yPixel++) {
      if (this.changeColor()) {
        this.ctx.fillStyle = this.randomColor();
        this.ctx.fillRect(
          this.props.xPixel,
          yPixel,
          this.props.pixelSize,
          this.props.pixelSize,
        );
      }
    }
  }

  randomColor = () => {
    return "#000000".replace(/0/g, () => ((~~(Math.random() * 16)).toString(16)));
  }

  changeColor = () => {
    return Math.random() < this.props.threshold;
  }

  render() {
    return <HTMLCanvas dimensions={ this.props.dimensions } contextRef={ this.saveContext } />;
  }
}

export default ReactCanvas;
