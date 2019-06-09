import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import Navbar from './navbar';
import Home from './home';
import Projects from './projects/projects';

import '../stylesheets/css/app.css';

const App = (props) => {
  return (
    <main className="app">
      <Navbar />
      <div className={ `ego__container--${ props.navbarLarge ? 'large' : 'small' }` }>
        <h1 className="ego__header">{ props.header }</h1>
      </div>
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route path="/projects" component={ Projects } />
      </Switch>
    </main>
  );
}

const mapStateToProps = (state) => {
  return { ...state.ui };
};

export default connect(mapStateToProps)(App);
