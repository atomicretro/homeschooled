import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';

import App from '../containers/app_container';

const Root = ({ store }) => {
  return (
    <Provider store={ store }>
      <HashRouter>
        <App store={ store } />
      </HashRouter>
    </Provider>
  );
};

export default Root;
