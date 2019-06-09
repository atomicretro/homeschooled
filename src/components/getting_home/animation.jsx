import React, { Component } from 'react';

import Canvas from './canvas';
import Background from './background';

class Animation extends Component {
  constructor(props) {
    super(props);

    const width = '640';
    const height = '425';
    const homeX = this.randomNum(width - 10);
    const homeY = this.randomNum(height - 10);
    const playerX = this.randomNum(height - 10);
    const playerY = this.randomNum(height - 10);

    this.brain = [0, 0, 0, 0];
    this.prevDistance = Math.sqrt((homeX - playerX) ** 2 + (homeY - playerY) ** 2);
    this.prevPlayer = [];
    this.width = width;
    this.height = height;
    this.state = {
      home: [homeX, homeY],
      player: [playerX, playerY],
    };
  }

  componentDidMount() {
    this.rAF = requestAnimationFrame(this.updateAnimationState);
  }

  componentWillUnmount() {
    this.stopThePresses()
  }

  updateAnimationState = () => {
    console.log(this.brain)
    let direction;
    let decided = false;
    let count = 0;
    while (!decided) {
      direction = this.randomNum(4);
      decided = this.deliberate(direction);
      if (!decided) count += 1;
      if (count >= 100) decided = true;
    }
    const step = this.nextStep(direction);
    this.consequences(direction, step);



    const x = this.state.player[0] + step[0];
    const y = this.state.player[1] + step[1];
    const { newX, newY } = this.wrapAround(x, y);
    this.prevPlayer = this.state.player;
    this.setState((prevState) => ({ player: [newX, newY] }));

    if (this.playerReachedHome() || count >= 100) {
      this.stopThePresses();
    } else {
      this.rAF = requestAnimationFrame(this.updateAnimationState);
    }
  }

  randomNum = (max) => {
    return Math.floor(Math.random() * max);
  }

  deliberate = (direction) => {
    const base = Math.random();
    const modifier = this.brain[direction];
    return base + modifier > 0.7 ? true : false;
  }

  nextStep = (direction) => {
    switch (direction) {
      case 0: return [1,0];
      case 1: return [-1,0];
      case 2: return [0,-1];
      case 3: return [0,1];
      default: return [0,0];
    }
  }

  consequences = (direction, step) => {
    const nextDistance = this.calculateNextDistance(step);
    if (nextDistance < this.prevDistance) {
      this.brain[direction] >= 1 ? this.brain[direction] = 1 : this.brain[direction] += 0.03;
    } else {
      this.brain[direction] <= -0.2 ? this.brain[direction] = -0.2 : this.brain[direction] -= 0.01;
    }
    this.prevDistance = nextDistance;
  }

  calculateNextDistance = (step) => {
    const deltaX = this.state.home[0] - (this.state.player[0] + step[0]);
    const deltaY = this.state.home[1] - (this.state.player[1] + step[1]);
    return Math.sqrt(deltaX ** 2 + deltaY ** 2);
  }

  wrapAround = (newX, newY) => {
    if (newX < 0) newX = this.width - 10;
    else if (newX > this.width - 10) newX = 0;

    if (newY < 0) newY = this.height - 10;
    else if (newY > this.height - 10) newX = 0;

    return { newX, newY };
  }

  playerReachedHome = () => {
    if (
      (this.state.home[0] - 7 <= this.state.player[0] && this.state.player[0] <= this.state.home[0] + 7)
      && (this.state.home[1] - 7 <= this.state.player[1] && this.state.player[1] <= this.state.home[1] + 7)
    ) {
      return true
    } else {
      return false
    }
  }

  stopThePresses = () => {
    console.log('stop!')
    cancelAnimationFrame(this.rAF);
  }

  render() {
    return (
      <div>
        <Background dimensions={ { width: this.width, height: this.height } } />
        <Canvas
          dimensions={ { width: this.width, height: this.height } }
          home={ this.state.home }
          prevPlayer={ this.prevPlayer }
          player={ this.state.player } />
      </div>
    );
  }
}

export default Animation;
