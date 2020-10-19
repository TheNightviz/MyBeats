import React from 'react'
import { Form } from "react-bootstrap";

const Registration = () => 
{
   
    return(
        <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '100vh'}}>


            <Form>
                <div className='form-group'>
                    <label htmlFor='name'>Name</label>
                    <input type='text'/>
                </div>
                <div className='form-group'>
                    <label htmlFor='email'>Email</label>
                    <input type='email' />
                </div>
                <div className='form-group'>
                    <label htmlFor='password'>Password</label>
                    <input type='password' />
                </div>
                <div className='form-group'>
                    <label htmlFor='passConfirm'>Confirm Password</label>
                    <input type='password' />
                </div>
                
                <input type="submit" value="Register" className="btn btn-primary btn-b"></input>
            </Form>

        </div>



    )

}

export default Registration;