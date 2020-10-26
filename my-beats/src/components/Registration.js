import React from 'react'

const Registration = () => {

    return (

        <div>
            <h1 style={{textAlign:'center', color:'black', fontSize:'30px', marginTop:'5%'}}>Start seeing your Beats</h1>
            <h6 style={{textAlign:'center', color:'black', fontSize:'20px', marginBottom:'-8%'}}>Create your account below</h6>

            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '90vh' }}>
                <form name="create-account-form">
                    <label htmlFor="uname">Username:</label><br />
                    <input type="text" id="uname" name="uname" /><br />
                    <label htmlFor="password">Password:</label><br />
                    <input type="password" id="password" name="password" /><br />
                    <label htmlFor="email">Email:</label><br />
                    <input type="text" id="email" name="email" />
                    <br />
                    <input type="submit" value="Register" className="btn btn-primary btn-b" onClick={submitForm}></input>
                </form>
            </div>
        </div>
    )
}

function submitForm() {
  document.getElementById("create-account-form").submit();
}

export default Registration;
