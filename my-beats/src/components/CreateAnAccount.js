import React from 'react'
import Registration from './Registration';


const CreateAnAccount = () => {
    return (
      <div className="create-account">
        <h1>Start seeing your Beats.</h1>
        <h5>Create your account below</h5>
        <form name="create-account-form">
          <label for="uname">Username:</label><br />
          <input type="text" id="uname" name="uname" /><br />
          <label for="password">Password:</label><br />
          <input type="text" id="password" name="password" /><br />
          <label for="email">Email:</label><br />
          <input type="text" id="email" name="email" />
          <br />
          <input type="button" onClick="submitForm()" value="Create Account"/>
        </form>
      </div>
      <div>
    
            <Registration />
      </div>        
     
    );
}

function submitForm() {
  document.getElementById("create-account-form").submit();
}

export default CreateAnAccount;
