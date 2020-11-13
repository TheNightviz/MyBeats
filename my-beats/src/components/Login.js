import React, { Component } from 'react';
import { withFirebase } from './Firebase';
// import { Form} from "react-bootstrap";
const SignInPage = () => (
  <div>
    <h1>Sign In</h1>
    <SignInForm />
  </div>
);
 
const INITIAL_STATE = {
  email: '',
  password: '',
  error: null,
};
 
class SignInFormBase extends Component {
  constructor(props) {
    super(props);
 
    this.state = { ...INITIAL_STATE };
  }
 
  onSubmit = event => {
    const { email, password } = this.state;
 
    this.props.firebase
      .doSignInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
        //this.props.history.push(ROUTES.HOME);       <== add history push here
      })
      .catch(error => {
        this.setState({ error });
      });
 
    event.preventDefault();
  };
 
  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
 
  render() {
    const { email, password, error } = this.state;
 
    const isInvalid = password === '' || email === '';
 
    return (
      <form onSubmit={this.onSubmit}>
        <input
          name="email"
          value={email}
          onChange={this.onChange}
          type="text"
          placeholder="Email Address"
        />
        <input
          name="password"
          value={password}
          onChange={this.onChange}
          type="password"
          placeholder="Password"
        />
        <button disabled={isInvalid} type="submit">
          Sign In
        </button>
 
        {error && <p>{error.message}</p>}
      </form>
    );
  }
}
const SignInForm = withFirebase(SignInFormBase);
export default SignInPage;

export { SignInForm };

/*
const Login = () => {
  return (
    <div>
      <h1 style={{textAlign:'center', color:'black', fontSize:'30px', marginTop:'5%'}}>See your Beats</h1>
      <h6 style={{textAlign:'center', color:'black', fontSize:'20px', marginBottom:'-8%'}}>Log-in to access your account below</h6>

      <div className="login-form" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '75vh' }}>
        <form>
          <label for="uname">Username:</label><br />
          <input type="text" id="uname" name="uname" /><br />
          <label for="password">Password:</label><br />
          <input type="password" id="password" name="password" />
          <br />
          <input type="submit" value="Sign in" className="btn btn-primary btn-b grey darken-1" style={{color:'#f2C75C'}}></input>
        </form>
      </div>
    </div>
  );

}
*/

