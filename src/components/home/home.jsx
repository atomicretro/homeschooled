import React, { Component } from 'react';

// import Animation from './getting_home/animation';

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

        </div>
      </section>
    );
  }
}

export default Home;
