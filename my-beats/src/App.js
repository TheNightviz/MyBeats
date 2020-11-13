import React, { Component } from 'react';
import Navbar from './components/Navbar'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './components/Home'
import Registration from './components/Registration'
import Login from './components/Login'
import ConnectSpotify from './components/ConnectSpotify'
import MyAccount from './components/MyAccount';
import LogOut from './components/LogOut';
import MyData from './components/MyData';
import MainPage from './components/MainPage'


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
        
          <Route exact path='/MyData' component={MyData} />
          <Route exact path='/MyAccount' component={MyAccount} />
          <Route exact path='/Logout' component={LogOut} />
          <Route exact path='/MainPage' component={MainPage} />
        </div>
      </BrowserRouter>
      
    );
    
  }
}

export default App;
