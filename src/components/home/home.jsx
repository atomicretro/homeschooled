import React, { Component } from 'react';

import Selfie from '../selfie';

import '../../stylesheets/css/home.css';

class Home extends Component {
  componentDidMount() {
    document.title = "Alec Cuccia";
    this.props._setHeader('Alec Cuccia');
  }

  render() {
    const isLarge = this.props.navbarLarge;
    return (
      <section className="home">
        <div className={ `home__cool-things--${ isLarge ? 'visible' : 'visible' }` }>
          <Selfie />
        </div>
      </section>
    );
  }
}

export default Home;
