import React from 'react'

const Navbar = () => {
    return (
        <nav className="nav-wrapper blue darken-1">
            <div className="container">
                <a href="/" className="brand-logo">MyBeats</a>
                <ul className="right">
                    <li><a href="/CreateAnAccount">Create an Account</a></li>
                    <li><a href="/Login">Login</a></li>

                </ul>
            </div>
        </nav>
    )
}

export default Navbar;
