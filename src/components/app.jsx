import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

import Navbar from './navbar';
import Home from './home';

import '../stylesheets/css/app.css';

const App = () => {
  return (
    <section className="App">
      <Navbar />
      <HashRouter>
        <Switch>
          <Route path="/" component={ Home } />
        </Switch>
      </HashRouter>
    </section>
  );
}

export default App;
