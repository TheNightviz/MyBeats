import { wait } from '@testing-library/react';
import React, { Component } from 'react'
import { FirebaseContext } from './Firebase';
import {getLogin} from '../userAuth';
import { useHistory } from 'react-router-dom';

const SignUpPage = () => (
    <div>
      <h1>Test</h1>
      <FirebaseContext.Consumer>
      {firebase => <SignUpForm firebase={firebase} />}
      </FirebaseContext.Consumer>
    </div>
  );

  const INITIAL_STATE = {
    username: '',
    email: '',
    passwordOne: '',
    passwordTwo: '',
    error: null,
  };

class SignUpForm extends Component{
    constructor(props) {
        super(props);
        this.state = {...INITIAL_STATE};
    }
    onSubmit = event => {
        const { username, email, passwordOne } = this.state;
 
        this.props.firebase
          .doCreateUserWithEmailAndPassword(email, passwordOne)
          .then(authUser => {
            this.setState({ ...INITIAL_STATE });
          })
          .catch(error => {
            this.setState({ error });
          });
     
        event.preventDefault();
    }

    onChange = event => {
        this.setState({ [event.target.name]: event.target.value });
      };
     
      render() {
        const {
          username,
          email,
          passwordOne,
          passwordTwo,
          error,
        } = this.state;

        const isInvalid =
        passwordOne !== passwordTwo ||
        passwordOne === '' ||
        email === '' ||
        username === '';
        console.log(passwordOne === '');
        return (
          <form onSubmit={this.onSubmit}>
            <input
              name="username"
              value={username}
              onChange={this.onChange}
              type="text"
              placeholder="Username"
            />
            <input
              name="email"
              value={email}
              onChange={this.onChange}
              type="text"
              placeholder="Email Address"
            />
            <input
              name="passwordOne"
              value={passwordOne}
              onChange={this.onChange}
              type="password"
              placeholder="Password"
            />
            <input
              name="passwordTwo"
              value={passwordTwo}
              onChange={this.onChange}
              type="password"
              placeholder="Confirm Password"
            />
            <button disabled={isInvalid} type="submit">
                Sign Up
                </button>
     
            {error && <p>{error.message}</p>}
          </form>
        );
      }
    }
     
/*
const Registration = () => {
    const history = useHistory();

    return (

        <div>
            <h1 style={{textAlign:'center', color:'black', fontSize:'30px', marginTop:'5%'}}>Start seeing your Beats</h1>
            <h6 style={{textAlign:'center', color:'black', fontSize:'20px', marginBottom:'-8%'}}>Create your account below</h6>

            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '90vh' }}>
                <form name="create-account-form">
                    <label htmlFor="uname">Username:</label><br />
                    <input type="text" id="uname" name="uname" /><br />
                    <label htmlFor="password1">Password:</label><br />
                    <input type="password" id="password1" name="password1" /><br />
                    <label htmlFor="password2">Confirm Password:</label><br />
                    <input type="password" id="password2" name="password2" /><br />
                    <label htmlFor="email">Email:</label><br />
                    <input type="text" id="email" name="email" />
                    <br /><br /><br /><br />
                    <input type="submit" value="Register" className="btn btn-primary btn-b grey darken-1" onClick={()=> history.push("/ConnectSpotify")} style={{color:'#f2C75C'}} ></input>
                </form>
            </div>
        { <button onClick={submitForm()}>Test Button</button> }
        </div>
    );

    // function submitForm() {
    //     // document.getElementById("create-account-form").submit();
    //     console.log("THIS WORKS");

    //    // this line will redirect to spotify login page, but it happense immediately, even using onClick handler
    //window.location.href='/ConnectSpotify';
    // }
}
*/

export default SignUpPage;
export { SignUpForm };