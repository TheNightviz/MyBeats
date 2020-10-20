import React, { Component } from 'react';
// import { Form} from "react-bootstrap";

const Login = () => {
    return (
      <div className="login-form">
        <h1>See your Beats.</h1>
        <h6>Log-in to access your account below</h6>
        <form>
          <label for="uname">Username:</label><br />
          <input type="text" id="uname" name="uname" /><br />
          <label for="password">Password:</label><br />
          <input type="text" id="password" name="password" />
          <br />
          <input type="submit" />
        </form>
      </div>
    );

    }

export default Login;
