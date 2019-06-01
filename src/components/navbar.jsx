import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../stylesheets/css/navbar.css';

class Navbar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      size: 'large'
    };
  }

  embiggen = (e) => {
    e.stopPropagation();
    this.setState({ size: 'large' });
  }

  diminish = (e) => {
    this.setState({ size: 'small' });
  }

  render() {
    return (
      <nav
        className={ `navbar--${ this.state.size }` }
        onClick={ this.diminish }>
        <ul>
          <li>
            <Link to="/">
              <img
                src="home-icon.svg"
                alt="icon of a house"
                className="navbar__icon--visible" />
            </Link>
          </li>
          <li>
            <Link to="/projects/">
              <img
                src="pencil-icon.svg"
                alt="icon of a pencil"
                className="navbar__icon--visible" />
            </Link>
          </li>
          <li>
            <button onClick={ this.embiggen }>
              click
            </button>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
