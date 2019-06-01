import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { resizeNavbar } from '../actions/ui_actions';

import '../stylesheets/css/navbar.css';

class Navbar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      listVisibility: 'invisible'
    };
  }

  embiggen = (e) => {
    e.stopPropagation();
    this.props.resizeNavbar('large');
    this.setState({ listVisibility: 'invisible' });
  }

  diminish = (e) => {
    this.props.resizeNavbar('small');
    this.setState({ listVisibility: 'visible' });
  }

  render() {
    return (
      <nav
        className={ `navbar--${ this.props.navbarSize }` }
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

const mapStateToProps = (state) => {
  return { navbarSize: state.ui.navbarSize };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ resizeNavbar }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
