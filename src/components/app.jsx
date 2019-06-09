import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Navbar from './navbar';
import Home from './home';
import Projects from './projects';

import '../stylesheets/css/app.css';

const App = () => {
  return (
    <main className="app">
      <Navbar />
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route path="/projects" component={ Projects } />
      </Switch>
    </main>
  );
}

export default App;
