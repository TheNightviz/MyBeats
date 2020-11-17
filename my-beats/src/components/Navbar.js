import React from 'react'

const Navbar = () => {
    return (



        <nav className="nav-wrapper grey darken-4" style={{position:'relative'}}>
            <div className="container">
                <a href="/" classname="left">
                      <img src = '/Photos/mbLogoFinal.png' style={{padding:'5px', width:'33px', height:'auto'}}></img>
                      <h2 className="brand-logo"style={{textAlign:'left', color:'#f2C75C', fontSize:'55px', fontFamily: 'Tahoma, Geneva, sans-serif'}}>MyBeats</h2>
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

{/*
   Potential Logo Text:
   1. https://www.dafont.com/musicografi.font?fpp=200&text=MyBeats
   2. https://www.dafont.com/edmund.font?fpp=200&text=MyBeats
   3. https://www.dafont.com/voice-in-my-head.font?fpp=50&text=MyBeats
   4. https://www.dafont.com/moon-get.font?fpp=50&text=MyBeats
*/}
