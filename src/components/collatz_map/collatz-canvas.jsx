import React, { Component } from 'react';

import Canvas from './canvas';




class Collatz extends Component {
  constructor(props) {
    super(props);

    const width = '400';
    const height = '400';

    this.width = width;
    this.height = height;
    this.state = {
      number: 40,
    };
  }

  componentDidMount() {
    this.rAF = requestAnimationFrame(this.updateAnimationState);
  }

  componentWillUnmount() {
    this.stopThePresses()
  }

  updateAnimationState = () => {
    console.log(this.state)
    const { number } = this.state;
    const nextNumber = number % 2 === 0 ? number / 2 : (number * 3) + 1;
    this.setState({ number: nextNumber });

    if (this.state.number === 1) {
      this.stopThePresses();
    } else {
      setTimeout(() => {
        this.rAF = requestAnimationFrame(this.updateAnimationState);
      }, 1000)
    }
  }

  finalAnimation = () => {
    this.setState({ number: 1 });
    this.rAF = requestAnimationFrame();
  }

  stopThePresses = () => {
    console.log('stop!')
    cancelAnimationFrame(this.rAF);
  }

  render() {
    return (
      <div>
        <Canvas
          number={ this.state.number }
          dimensions={ { width: this.width, height: this.height } } />
      </div>
    );
  }
}

export default Collatz;
