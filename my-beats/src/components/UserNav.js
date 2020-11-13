



import React from 'react'

const UserNav = () => {
    return (


        <nav className="nav-wrapper grey darken-4">
            <div className="container">
                <a href="/" classname="left">
                      <img src = '/Photos/mbLogoFinal.png' style={{padding:'5px', width:'33px', height:'auto'}}></img>
                      <h2 className="brand-logo"style={{textAlign:'left', color:'#f2C75C', fontSize:'55px', fontFamily:'Impact, Charcoal, sans-serif'}}>MyBeats</h2>
                </a>
                <ul className="right">
                    <li><a href="/"style={{color:'#f2C75C', fontSize:'15px',}}>Home</a></li>
                    <li><a href="/Mydata"style={{color:'#f2C75C', fontSize:'15px',}}>MyData</a></li>
                    <li><a href="/MyAccount"style={{color:'#f2C75C', fontSize:'15px',}}>MyAccount</a></li>
                    <li><a href="/LogOut"style={{color:'#f2C75C', fontSize:'15px',}}>Logout</a></li>


                </ul>
            </div>
        </nav>
    )
}

export default UserNav;