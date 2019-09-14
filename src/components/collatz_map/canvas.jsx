import React, { Component } from 'react';

class HTMLCanvas extends Component {
  shouldComponentUpdate() { return false; }

  render() {
    return (
      <canvas
        width={ this.props.dimensions.width }
        height={ this.props.dimensions.height }
        className="canvas"
        ref={ node => node ? this.props.contextRef(node.getContext('2d')) : null }
      />
    );
  }
}

class ReactCanvas extends Component {
  constructor(props) {
    super(props);
    this.squareSize = 20;
  }

  componentDidMount() {
    this.drawField();
  }

  componentDidUpdate() {
    this.drawNumber();
  }

  saveContext = (ctx) => {
    this.ctx = ctx;
  }

  drawField = () => {
    const { width, height } = this.props.dimensions;
    this.ctx.fillStyle = 'white';
    this.ctx.fillRect(0, 0, width, height);
    for (let y = 0; y < width + 1; y += this.squareSize) {
      this.ctx.beginPath();
      this.ctx.moveTo(y, 0);
      this.ctx.lineTo(y, height);
      this.ctx.stroke();
    }

    for (let x = 0; x < height + 1; x += this.squareSize) {
      this.ctx.beginPath();
      this.ctx.moveTo(0, x);
      this.ctx.lineTo(height, x);
      this.ctx.stroke();
    }
  }

  drawNumber = () => {
    const { number } = this.props;
    const horizontal = (number % 20) * 20;
    let vertical;
    if (number % 20 === 0) {
      vertical = Math.floor(number / (this.squareSize + 1)) * 10;
    } else {
      vertical = Math.floor(number / this.squareSize) * 10;
     }
     console.log('n', number)
    console.log('hv', horizontal, vertical)
    this.ctx.fillStyle = 'blue';
    this.ctx.fillRect(horizontal, vertical, this.squareSize, this.squareSize);
  }

  render() {
    return <HTMLCanvas dimensions={ this.props.dimensions } contextRef={ this.saveContext } />;
  }
}

export default ReactCanvas;
