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
import DetailBlog from './components/Detail_Blog';


const createStoreWithMiddleware = createStore(reducers, applyMiddleware(promise, thunk));

ReactDOM.render(
  <div>
    <Provider store={createStoreWithMiddleware}>
      <BrowserRouter>
        <div>
          <Navbar />
          <Switch>
            <Route path="/blog/:id" component={DetailBlog} />
            <Route path="/" component={LandingPage} />
          </Switch>
        </div>
      </BrowserRouter>
    </Provider>
  </div>
  , document.getElementById('container'),
);
