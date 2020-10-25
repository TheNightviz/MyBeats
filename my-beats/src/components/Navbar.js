import React from 'react'

const Navbar = () => {
    return (
        <nav className="nav-wrapper grey darken-1">
            <div className="container">
                <a href="/" className="brand-logo"style={{textAlign:'left', color:'#f2C75C', fontSize:'30px',}}>MyBeats</a>
                <ul className="right">
                    <li><a href="/CreateAnAccount"style={{color:'#f2C75C', fontSize:'15px',}}>Create an Account</a></li>
                    <li><a href="/Login"style={{color:'#f2C75C', fontSize:'15px',}}>Login</a></li>

                </ul>
            </div>
        </nav>
    )
}

export default Navbar;