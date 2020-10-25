import React from 'react';
// import { Form} from "react-bootstrap";

const Login = () => {
  return (
    <div>
      <h1>See your Beats.</h1>
      <h6>Log-in to access your account below</h6>

      <div className="login-form" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '75vh' }}>
        <form>
          <label for="uname">Username:</label><br />
          <input type="text" id="uname" name="uname" /><br />
          <label for="password">Password:</label><br />
          <input type="password" id="password" name="password" />
          <br />
          <input type="submit" value="Sign in" className="btn btn-primary btn-b"></input>
        </form>
      </div>
    </div>
  );

}

export default Login;
