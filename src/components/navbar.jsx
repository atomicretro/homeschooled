import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { embiggenNavbar, diminishNavbar } from '../actions/ui_actions';

import '../stylesheets/css/navbar.css';

class Navbar extends Component {
  componentDidMount() {
    setTimeout(() => this.diminish(), 5000);
  }

  embiggen = (e) => {
    e.stopPropagation();
    this.props.embiggenNavbar();
  }

  diminish = (e) => {
    this.props.diminishNavbar();
  }

  render() {
    const isLarge = this.props.navbarLarge;
    return (
      <nav
        className={ `navbar--${ isLarge ? 'large' : 'small' }` }
        onClick={ this.diminish }>
        <div className="navbar__link-container">
          <ul className={ `navbar__list--${ isLarge ? 'invisible' : 'visible' }` }>
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

const mapStateToProps = (state) => {
  return { navbarLarge: state.ui.navbarLarge };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ embiggenNavbar, diminishNavbar }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
