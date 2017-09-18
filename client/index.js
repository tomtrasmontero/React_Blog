import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import promise from 'redux-promise';
import thunk from 'redux-thunk';
// import style sheets
import './styles/main.scss';

import Navbar from './components/NavBar';
import LandingPage from './components/LandingPage';

import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(promise, thunk)(createStore);

ReactDOM.render(
  <div>
    <Navbar />
    <Provider store={createStoreWithMiddleware(reducers)}>
      <BrowserRouter>
        <div>
          <Switch>
            <Route path="/" component={LandingPage} />
          </Switch>
        </div>
      </BrowserRouter>
    </Provider>
  </div>
  , document.getElementById('container'),
);
