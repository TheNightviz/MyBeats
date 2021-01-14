import React from "react";
import ReactDOM from "react-dom";
import MyAccount  from "../components/MyAccount";
import MyData  from "../components/MyData";
import UserNav  from "../components/UserNav";
import BottomFooter  from "../components/BottomFooter";
import MainPage from "../components/MainPage";
import LogOut from "../components/LogOut";
import ConnectAlert from "../components/ConnectAlert";
import Navbar from "../components/Navbar";
import Login from "../components/Login";



import {INITIAL_STATE} from '../components/Login.js';
import {REG_INITIAL_STATE} from '../components/Registration.js';


test('test renders h1 div in MyAccount', () => {
    //rendering "pageContainer" div from MyAccount
   const root = document.createElement('pageContainer');
   ReactDOM.render(<MyAccount />, root);

   //looking for an h1 that contains the text in the "h1" tag.
   expect(root.querySelector("h1").textContent).toBe("This is MyAccount");

})

test('test renders ConnectAlert', () => {
   const root = document.createElement('alertContainer');
   ReactDOM.render(<ConnectAlert />, root);

   expect(root.querySelector("h4").textContent).toBe("Uh-oh! You dont have any connected services.");

})


test('test renders h1 div in LogOut', () => {
   const root = document.createElement('pageContainer');
   ReactDOM.render(<LogOut />, root);

   expect(root.querySelector("h1").textContent).toBe("You have signed out.");

})




test('test renders h1 div in MainPage', () => {
   const root = document.createElement('pageContainer');
   ReactDOM.render(<MainPage />, root);

   expect(root.querySelector("h1").textContent).toBe("You have not connected any accounts. Connect with Spotify below:");

})


test('test renders h1 div in MyData', () => {
  const root = document.createElement('pageContainer');
  ReactDOM.render(<MyData />, root);

  expect(root.querySelector("h1").textContent).toBe("This is MyData");

})

test('test renders userNav Home button', () => {
    const root = document.createElement('container');
    ReactDOM.render(<UserNav />, root);
  
    expect(root.querySelector("li").textContent).toBe("Home");
    
  })


  
  test('test renders BottomFooter text', () => {
    const root = document.createElement('div');
    ReactDOM.render(<BottomFooter />, root);
  
    expect(root.querySelector("h6").textContent).toBe("Copyright © 2020 BoomerBeats");
    
  })


  test('test renders Navbar ', () => {
    const root = document.createElement('container');
    ReactDOM.render(<Navbar />, root);
  
    expect(root.querySelector("li").textContent).toBe("Create an Account");   

    
  })
  

test('tests initialization of login state', () => {
  expect(INITIAL_STATE).toStrictEqual({
    email: '',
    password: '',
    error: null
  });
});

test('tests initialization of Registration state', () => {
    expect(REG_INITIAL_STATE).toStrictEqual({
        username: '',
        email: '',
      passwordOne: '',
      passwordTwo: '',
      error: null
    });
  });

