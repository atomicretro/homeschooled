import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Navbar from '../containers/navbar_container';
import Home from '../containers/home_container';
import Projects from '../containers/projects_container';

import '../stylesheets/css/app.css';

const App = (props) => {
  const contentSize = props.navbarLarge ? 'diminished' : 'embiggened';
  return (
    <main className="app">
      <Navbar />
      <section className={ `content content--${ contentSize }` }>
        <div className={ `ego ego--${ contentSize }` }>
          <h1 className="ego__header">{ props.header }</h1>
        </div>
        <div className={ `the-main-event the-main-event--${ contentSize }` }>
          <Switch>
            <Route exact path="/" component={ Home } />
            <Route path="/projects" component={ Projects } />
          </Switch>
        </div>
      </section>
    </main>
  );
}

export default App;
