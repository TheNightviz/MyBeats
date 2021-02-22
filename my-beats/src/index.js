import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './App';
import Firebase, { FirebaseContext } from './components/Firebase';

ReactDOM.render(
  <FirebaseContext.Provider value={new Firebase()}>
  <App />
  </FirebaseContext.Provider>,
  document.getElementById('root')
);

