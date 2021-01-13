import React from 'react';

const UserNav = () => {
    return (


        <nav className="nav-wrapper grey darken-4">
            <div className="container">
                <a href="/" className="left">
<<<<<<< HEAD
                      <img src = '/Photos/mbLogoFinal.png' alt="" style={{padding:'5px', width:'33px', height:'auto'}}></img>
                      <img src = '/Photos/textlogotrans.png' alt="" style={{padding:'5px', width:'220px', height:'auto'}}></img>
=======
                      <img src = '/Photos/mbLogoFinal.png' style={{padding:'5px', width:'33px', height:'auto'}}></img>
                      <img src = '/Photos/textlogotrans.png' style={{padding:'5px', width:'220px', height:'auto'}}></img>
>>>>>>> Shemely
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
