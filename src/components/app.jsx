import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

import Navbar from './navbar';
import Home from './home';
import Projects from './projects';

import '../stylesheets/css/app.css';

const App = () => {
  return (
    <HashRouter>
      <main className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route path="/projects" component={ Projects } />
        </Switch>
      </main>
    </HashRouter>
  );
}

export default App;
