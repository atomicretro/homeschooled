import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../../stylesheets/css/navbar.css';

class Navbar extends Component {
  componentDidMount() {
    this.timer = setTimeout(() => this.diminish(), 5000);
  }

  embiggen = (e) => {
    e.stopPropagation();
    this.props._embiggenNavbar();
  }

  diminish = (e) => {
    clearTimeout(this.timer)
    this.props._diminishNavbar();
  }

  render() {
    const isLarge = this.props.navbarLarge;
    return (
      <nav
        className={ `navbar navbar--${ isLarge ? 'embiggened' : 'diminished' }` }
        onClick={ this.diminish }>
        <div className="navbar__link-container">
          <ul className={ `navbar__link-list navbar__link-list--${ isLarge ? 'invisible' : 'visible' }` }>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/projects/">Projects</Link>
            </li>
            <li>
              <span onClick={ this.embiggen }>Embiggen</span>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
