import React from 'react'
import Registration from './Registration';


const CreateAnAccount = () => {
    return (

        // <div>
    
        //     <Registration />
        // </div>        
      <div className="create-account-form">
        <h1>Start seeing your Beats.</h1>
        <h6>Create your account below</h6>
        <form>
          <label for="uname">Username:</label><br />
          <input type="text" id="uname" name="uname" /><br />
          <label for="password">Password:</label><br />
          <input type="text" id="password" name="password" /><br />
          <label for="email">Email:</label><br />
          <input type="text" id="email" name="email" />
          <br />
          <input type="submit" />
        </form>
      </div>

    );
}
export default CreateAnAccount;
