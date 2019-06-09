import React from 'react';
import { connect } from 'react-redux';

// import Animation from './getting_home/animation';

import '../stylesheets/css/home.css';

const Home = (props) => {
  const contentVisibility = props.navbarSize === 'large' ? 'invisible' : 'visible';
  return (
    <section className="home">
      <div className={ `home__ego-section--${ props.navbarSize }` }>
        <h1 className="home__ego">
          Alec Cuccia
        </h1>
      </div>
      <div className={ `home__cool-things--${ contentVisibility }` }>
        <img src="marcy.png" alt="placeholder"/>
      </div>
    </section>
  );
}

const mapStateToProps = (state) => {
  return { navbarSize: state.ui.navbarSize };
};

export default connect(mapStateToProps, null)(Home);
