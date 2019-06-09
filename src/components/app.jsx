import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import Navbar from './navbar';
import Home from './home';
import Projects from './projects/projects';

import '../stylesheets/css/app.css';

const App = (props) => {
  const contentSize = props.navbarLarge ? 'diminished' : 'embiggened';
  return (
    <main className="app">
      <Navbar />
      <section className={ `content--${ contentSize }` }>
        <h1 className={ `ego__header--${ contentSize }` }>
          { props.header }
        </h1>
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route path="/projects" component={ Projects } />
        </Switch>
      </section>
    </main>
  );
}

const mapStateToProps = (state) => {
  return { ...state.ui };
};

export default connect(mapStateToProps)(App);
