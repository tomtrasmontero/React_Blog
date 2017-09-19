import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import promise from 'redux-promise';
import thunk from 'redux-thunk';
// import style sheets
import './styles/main.scss';

import reducers from './reducers/index';
import Navbar from './components/NavBar';
import LandingPage from './components/LandingPage';


// const createStoreWithMiddleware = applyMiddleware(promise, ReduxThunk)(createStore);
const createStoreWithMiddleware = createStore(reducers, applyMiddleware(promise, thunk));

ReactDOM.render(
  <div>
    <Navbar />
    <Provider store={createStoreWithMiddleware}>
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
