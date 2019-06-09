import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { setHeader } from '../../actions/ui_actions';

import '../../stylesheets/css/projects.css';

class Projects extends Component {
  componentDidMount() {
    this.props.setHeader('Projects')
  }

  render() {
    return(
      <section className={ `projects--${this.props.navbarLarge ? 'invisible' : 'visible'}`} >
        <Link to="/projects/enjambment" className="projects__portfolio-link">
          <img
            className="projects__portfolio-img"
            src="img/portfolio/enjambment_logo.png"
            alt="Logo for enjambment. Click to view project." />
        </Link>
        <Link to="/projects/neon_circles" className="projects__portfolio-link">
          <img
            className="projects__portfolio-img"
            src="img/portfolio/neon_circles_logo.png"
            alt="Logo for neon circles. Click to view project." />
        </Link>
        <Link to="/projects/ruby_chess" className="projects__portfolio-link">
          <img
            className="projects__portfolio-img"
            src="img/portfolio/ruby-chess_logo.png"
            alt="Logo for neon circles. Click to view project." />
        </Link>
      </section>
    );
  }
}

const mapStateToProps = (state) => {
  return { navbarLarge: state.ui.navbarLarge };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ setHeader }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Projects);
