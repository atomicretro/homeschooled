import React, { Component } from 'react';

class PureCanvas extends Component {
  shouldComponentUpdate() { return false; }

  render() {
    return (
      <canvas
        width={ this.props.dimensions.width }
        height={ this.props.dimensions.height }
        className="foreground-canvas"
        ref={ node => node ? this.props.contextRef(node.getContext('2d')) : null }
      />
    );
  }
}

class Canvas extends Component {
  componentDidMount() {
    this.drawField();
  }

  componentDidUpdate(prevProps) {
    this.drawHome();
    this.drawPlayer();
  }

  saveContext = (ctx) => {
    this.ctx = ctx;
  }

  drawField = () => {
    this.ctx.fillStyle = 'white';
    this.ctx.fillRect(0, 0, this.props.dimensions.width, this.props.dimensions.height);
  }

  drawHome = () => {
    this.ctx.fillStyle = 'purple';
    this.ctx.fillRect(this.props.home[0], this.props.home[1], 10, 10);
  }

  drawPlayer = () => {
    this.ctx.clearRect(this.props.prevPlayer[0], this.props.prevPlayer[1], 10, 10);
    this.ctx.fillStyle = 'blue';
    this.ctx.fillRect(this.props.player[0], this.props.player[1], 10, 10);
  }

  render() {
    return <PureCanvas dimensions={ this.props.dimensions } contextRef={ this.saveContext } />;
  }
}

export default Canvas;
