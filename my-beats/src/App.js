import React, { Component } from 'react';
import Navbar from './components/Navbar'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './components/Home'
import CreateAnAccount from './components/CreateAnAccount'
import Login from './components/Login'


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Route exact path='/' exact component={Home} />
          <Route exact path='/CreateAnAccount' exact component={CreateAnAccount} />
          <Route exact path='/Login' exact component={Login} />

        </div>
      </BrowserRouter>
    );
  }
}

export default App;
