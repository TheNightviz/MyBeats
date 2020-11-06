import React from 'react'

const Navbar = () => {
    return (
        <nav className="nav-wrapper grey darken-4">
            <div className="container">
                <a href="/" classname="left">
                      <img src = '/Photos/mbLogoFinal.png' style={{padding:'5px', width:'33px', height:'auto'}}></img>
                      <h2 className="brand-logo"style={{textAlign:'left', color:'#f2C75C', fontSize:'55px', fontFamily:'Impact, Charcoal, sans-serif'}}>MyBeats</h2>
                </a>
                <ul className="right">
                    <li><a href="/CreateAnAccount"style={{color:'#f2C75C', fontSize:'15px',}}>Create an Account</a></li>
                    <li><a href="/Login"style={{color:'#f2C75C', fontSize:'15px',}}>Login</a></li>

                </ul>
            </div>
        </nav>
    )
}

export default Navbar;
