import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../stylesheets/css/navbar.css';

class Navbar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      navbarSize: 'large',
      listVisibility: 'invisible'
    };
  }

  embiggen = (e) => {
    e.stopPropagation();
    this.setState({
      navbarSize: 'large',
      listVisibility: 'invisible'
    });
  }

  diminish = (e) => {
    this.setState({
      navbarSize: 'small',
      listVisibility: 'visible'
    });
  }

  render() {
    return (
      <nav
        className={ `navbar--${ this.state.navbarSize }` }
        onClick={ this.diminish }>
        <div className="navbar__link-container">
          <ul className={ `navbar__list--${ this.state.listVisibility }` }>
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
