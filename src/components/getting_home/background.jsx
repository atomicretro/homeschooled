import React, { Component } from 'react';

class PureCanvas extends Component {
  shouldComponentUpdate() { return false; }

  render() {
    return (
      <canvas
        width={ this.props.dimensions.width }
        height={ this.props.dimensions.height }
        className="background-canvas"
        ref={ node => node ? this.props.contextRef(node.getContext('2d')) : null }
      />
    );
  }
}

class Canvas extends Component {
  componentDidMount() {
    for (let i = 0; i < 26; i++) {
      for (let j = 0; j < 26; j++) {
        this.ctx.fillStyle = `rgb(
            ${Math.floor(255 - 12.5 * i)},
            ${Math.floor(255 - 12.5 * j)},
            0)`;
        this.ctx.fillRect(j * 25, i * 25, 25, 25);
      }
    }

    for (let i = 0; i < 6; i++) {

    }
  }

  saveContext = (ctx) => {
    this.ctx = ctx;
  }

  render() {
    return <PureCanvas dimensions={ this.props.dimensions } contextRef={ this.saveContext } />;
  }
}

export default Canvas;
