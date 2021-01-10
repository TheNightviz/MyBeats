import React from "react";
import ReactDOM from "react-dom";
import MyAccount  from "../components/MyAccount";
import MyData  from "../components/MyData";
import UserNav  from "../components/UserNav";
import BottomFooter  from "../components/BottomFooter";


const INITIAL_STATE = require('../components/Login.js');

test('test renders h1 div in MyAccount', () => {
    //rendering "pageContainer" div from MyAccount
   const root = document.createElement('pageContainer');
   ReactDOM.render(<MyAccount />, root);

   //looking h1 that contains the text in the "h1" tag.
   expect(root.querySelector("h1").textContent).toBe("This is MyAccount");

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
  

test('tests initialization of login state', () => {
  expect(INITIAL_STATE).toStrictEqual({
    email: '',
    password: '',
    error: null
  });
});
