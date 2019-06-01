import React, { Component } from 'react';

import '../stylesheets/css/navbar.css';

class Navbar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inFocus: true
    };
  }

  handleClick = (e) => {
    this.setState({ inFocus: !this.state.inFocus});
  }

  render() {
    return (
      <nav
        className={ `navbar--${ this.state.inFocus ? 'large' : 'small' }` }
        onClick={ this.handleClick }>
        hi
      </nav>
    )
  }
}

export default Navbar;
