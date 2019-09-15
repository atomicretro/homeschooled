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
    const links = [
      { title: "Home", to: "/" },
      { title: "Projects", to: "/projects" },
    ];

    return (
      <nav
        className={ `navbar navbar--${ isLarge ? 'embiggened' : 'diminished' }` }
        onClick={ this.diminish }>
        <div className="navbar__links">
          <ul className={ `navbar__links__list navbar__links__list--${ isLarge ? 'invisible' : 'visible' }` }>
            {
              links.map((link, idx) => (
                <li key={ `nav-${ idx }` } className="navbar__links__list__item">
                  <Link to={ link.to }>{ link.title }</Link>
                </li>
              ))
            }
            <li key="nav-embiggen" className="navbar__links__list__item">
              <button className="embiggen-button" onClick={ this.embiggen }>Embiggen</button>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
