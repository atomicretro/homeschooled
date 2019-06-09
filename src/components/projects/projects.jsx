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
      <section className="projects">
        <Link to="/projects/enjambment">
          <img
            src="img/portfolio/enjambment_logo.png"
            alt="Logo for the enjambment project. Click to view project." />
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
