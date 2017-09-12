import React from 'react';
import ReactDOM from 'react-dom';
import WelcomeMessage from './components/testComponents';
// import style sheets
import './styles/main.scss';

const appData = {
  title: 'React Blog',
};

ReactDOM.render(
  <WelcomeMessage data={appData} />, document.getElementById('container'),
);
