import React, { Component } from 'react';
import { Form} from "react-bootstrap";

class Login extends Component{
    render()
    {

        return(
        
          <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '100vh'}}>


          <Form>
              <div className='form-group'>
                  <label htmlFor='name'>Email</label>
                  <input type='text' />
              </div>
              <div className='form-group'>
                  <label htmlFor='password'>Password</label>
                  <input type='password'  />
              </div>
              
              <input type="submit" value="Register" className="btn btn-primary btn-b"></input>
          </Form>

      </div>



    );

    }
}
        
        
        
        

export default Login;