import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { setHeader } from '../actions/ui_actions';

// import Animation from './getting_home/animation';

import '../stylesheets/css/home.css';

class Home extends Component {
  componentDidMount() {
    this.props.setHeader('Alec Cuccia')
  }

  render() {
    const isLarge = this.props.navbarLarge;
    return (
      <section className="home">
        <div className={ `home__cool-things--${ isLarge ? 'invisible' : 'visible' }` }>

        </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Home);
