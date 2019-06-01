import React from 'react';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { resizeNavbar } from '../actions/ui_actions';

import '../stylesheets/css/navbar.css';

const Navbar = (props) => {
  const embiggen = (e) => {
    e.stopPropagation();
    props.resizeNavbar('large');
  }

  const diminish = (e) => {
    props.resizeNavbar('small');
  }

  const listVisibility = props.navbarSize === 'large' ? 'invisible' : 'visible';
  return (
    <nav
      className={ `navbar--${ props.navbarSize }` }
      onClick={ diminish }>
      <div className="navbar__link-container">
        <ul className={ `navbar__list--${ listVisibility }` }>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/projects/">Projects</Link>
          </li>
          <li>
            <span onClick={ embiggen }>Embiggen</span>
          </li>
        </ul>
      </div>
    </nav>
  );
}

const mapStateToProps = (state) => {
  return { navbarSize: state.ui.navbarSize };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ resizeNavbar }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
