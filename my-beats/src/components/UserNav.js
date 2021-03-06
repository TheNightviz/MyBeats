import React from 'react';

const UserNav = () => {
    return (


        <nav className="nav-wrapper grey darken-4">
            <div className="container">
                <a href="/OverView" classname="left">
                      <img src = '/Photos/mbLogoFinal.png' alt='my-beats-logo' style={{padding:'5px', width:'33px', height:'auto'}}></img>
                      <img src = '/Photos/textlogotrans.png' alt='my-beats-logo-text' style={{padding:'5px', width:'220px', height:'auto'}}></img>
                </a>
                <ul className="right">
                    <li><a href="/OverView"style={{color:'#f2C75C', fontSize:'15px',}}>MyOverview</a></li>
                    <li><a href="/Mydata"style={{color:'#f2C75C', fontSize:'15px',}}>MyData</a></li>
                    <li><a href="/MyAccount"style={{color:'#f2C75C', fontSize:'15px',}}>MyAccount</a></li>
                    <li><a href="/"style={{color:'#f2C75C', fontSize:'15px',}}>Logout</a></li>


                </ul>
            </div>
        </nav>
    )
}

export default UserNav;
