import React from "react";
import PublicLayout from "./components/PublicLayout";
import PrivateLayout from "./components/PrivateLayout";
import { BrowserRouter, Route, Router } from "react-router-dom";
import history from "./history";
// import Navbar from './components/Navbar'
// import Home from './components/Home'
// import Registration from './components/Registration'
// import Login from './components/Login'
// import ConnectSpotify from './components/ConnectSpotify'
// import MyAccount from './components/MyAccount';
// import LogOut from './components/LogOut';
// import MyData from './components/MyData';
// import MainPage from './components/MainPage'
import OverView from "./components/OverView";

function App() {
  return (
    <Router history={history}>
      <div className="App">
        {/* <Navbar />      
          <Route exact path='/' component={Home} />
          <Route exact path='/SignUpPage' component={Registration} />
          <Route exact path='/Login' component={Login} />
          <Route exact path='/ConnectSpotify' component={ConnectSpotify} />
        
          <Route exact path='/MyData' component={MyData} />
          <Route exact path='/MyAccount' component={MyAccount} />
          <Route exact path='/Logout' component={LogOut} />
          <Route exact path='/MainPage' component={MainPage} /> */}

        <Route path="/MyData" component={PrivateLayout} />
        <Route path="/MyAccount" component={PrivateLayout} />
        <Route path="/LogOut" component={PrivateLayout} />
        <Route exact path="/OverView" component={OverView} />

        <Route path="/" component={PublicLayout} />
      </div>
    </Router>
  );
}

export default App;
