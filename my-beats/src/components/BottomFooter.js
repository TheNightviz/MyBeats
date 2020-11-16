import React from 'react'

const BottomFooter = () => {
    return (
        <div className="footer"
           style={{justifyContent:'center',
              background: 'none repeat scroll 0 0 black',
              opacity: '100%',
              position: 'absolute',
              bottom: '0',
              alignItems: 'center',
              width: '100%',
              margin:'0'
              }}>
          <h6
            style={{background: 'transparent',
            padding: '7px',
            margin: 'auto',
            opacity: '100%',
            color: '#f2C75C',
            width: '245px'}}>Copyright &copy; 2020 BoomerBeats</h6>
        </div>

    );
}

export default BottomFooter;
