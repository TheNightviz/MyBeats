import React, { Component } from 'react';
import Navbar from './components/Navbar'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './components/Home'
import Registration from './components/Registration'
import Login from './components/Login'
import ConnectSpotify from './components/ConnectSpotify'



class App extends Component
 {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />

          <Route exact path='/' component={Home} />
          <Route exact path='/SignUpPage' component={Registration} />
          <Route exact path='/Login' component={Login} />
          <Route exact path='/ConnectSpotify' component={ConnectSpotify} />

        </div>
      </BrowserRouter>
    );
  }
}

export default App;
