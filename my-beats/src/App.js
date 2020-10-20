import React, { Component } from 'react';
import Navbar from './components/Navbar'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './components/Home'
import CreateAnAccount from './components/CreateAnAccount'
import Login from './components/Login'



class App extends Component
 {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Route exact path='/'  component={Home} />
          <Route exact path='/CreateAnAccount'  component={CreateAnAccount} />
          <Route exact path='/Login'  component={Login} />

        </div>
      </BrowserRouter>
    );
  }
}

export default App;
