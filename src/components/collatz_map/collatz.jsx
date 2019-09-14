import React, { Component } from 'react';
import Square from './square';

import '../../stylesheets/css/collatz.css';

const test = [];
class Collatz extends Component {
  constructor(props) {
    super(props);

    // this. = {};
    this.step = null;
    this.array = [];
    this.state = {
      dimensions: 8000,
      number: 27,
      colored: {},
    };
  }

  componentDidMount() {
    const array = [];
    test.push(0)
    test.push(1)
    test.push(2)
    for (let idx = 0; idx < this.state.dimensions; idx++) {
      this.array.push(<Square name="collatz-square" key={ `sq-${ idx }` } />);
    }
    // this.setState({ array: array });

    this.step = setInterval(() => {
      this.collatzStep();
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.step);
  }

  collatzStep() {
    if(this.state.number === 1) clearInterval(this.step);
    // test.forEach(t => t = 9)
    for (const t in test) {
      test[t] = 9;
    }
    const { colored, number } = this.state;
    const nextNumber = number % 2 === 0 ? number / 2 : (number * 3) + 1;
    if (!colored[number]) colored[number] = true;
    for (const sq in this.array) {
      if(colored[sq]) {
        this.array[sq] = <Square name="collatz-square colored" key={ `sq-${ sq + 1 }` } />
      }
    }
    this.setState({
      number: nextNumber,
      colored: colored,
    });
  }

  render() {
    console.log('test',test)
    console.log('this.state', this.state)
    // if(this.state.number === 1 && this.step) {
    //   clearInterval(this.step);
    // }

    console.log('this.state.colored', this.state.colored)
    const array = [];
    for (let i = 1; i < this.state.dimensions + 1; i++) {
      const className = this.state.colored[i] ? "collatz-square colored" : "collatz-square"
      if (i === 1) console.log('className', className)
      array.push(<div className={ className } key={ `square-${ i }` } />);
    }
    console.log(array)

    return (
      <div className="collatz-field">
        { array.map(square => square) }
      </div>
    );
  }
}

export default Collatz;
