import React from 'react';
import { connect } from 'react-redux';

// import Animation from './getting_home/animation';

import '../stylesheets/css/home.css';

const Home = (props) => {
  return (
    <section className="home">
      <div className={ `home__ego-section--${ props.navbarLarge ? 'large' : 'small' }` }>
        <h1 className="home__ego">
          Alec Cuccia
        </h1>
      </div>
      <div className={ `home__cool-things--${ props.navbarLarge ? 'invisible' : 'visible' }` }>
        
      </div>
    </section>
  );
}

const mapStateToProps = (state) => {
  return { navbarLarge: state.ui.navbarLarge };
};

export default connect(mapStateToProps, null)(Home);
