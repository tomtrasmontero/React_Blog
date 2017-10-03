import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { HashRouter, Route, Switch } from 'react-router-dom';
import promise from 'redux-promise';
import thunk from 'redux-thunk';

// important note: $/jquery is included in materialize css
// no need to import it in webpack.config.js
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min';
import './styles/main.scss';


import reducers from './reducers/index';
import LandingPage from './components/LandingPage';
import DetailBlog from './components/Detail_Blog';
import Footer from './components/Footer';


const createStoreWithMiddleware = createStore(reducers, applyMiddleware(promise, thunk));

ReactDOM.render(
  <main>
    <Provider store={createStoreWithMiddleware}>
      {/* on change of url, scroll to top of the page */}
      <HashRouter onUpdate={() => window.scrollTo(0, 0)}>
        <div>
          <Switch>
            <Route path="/blog/:id" component={DetailBlog} />

            <Route path="/" component={LandingPage} />
          </Switch>
        </div>
      </HashRouter>
    </Provider>
    <Footer />
  </main>
  , document.getElementById('App'),
);
