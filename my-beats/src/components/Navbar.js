import React from 'react'

const Navbar = () => {
    return (

        <nav className="nav-wrapper grey darken-4" style={{position:'relative'}}>
            <div className="container">
                <a href="/" classname="left">
                      <img src = '/Photos/mbLogoFinal.png' alt='my-beats-logo' style={{padding:'5px', width:'33px', height:'auto'}}></img>
                      <img src = '/Photos/textlogotrans.png' alt='my-beats-logo-text' style={{padding:'5px', width:'220px', height:'auto'}}></img>
                </a>
                <ul className="right">
                    <li><a href="/SignUpPage"style={{color:'#f2C75C', fontSize:'15px',}}>Create an Account</a></li>
                    <li><a href="/Login"style={{color:'#f2C75C', fontSize:'15px',}}>Login</a></li>

                </ul>
            </div>
        </nav>
    )
}

export default Navbar;