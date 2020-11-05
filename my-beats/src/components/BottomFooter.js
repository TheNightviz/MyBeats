import React from 'react'

var phantom = {
  display: 'block',
  padding: '20px',
  height: '30px',
  width: '100%',
}

const BottomFooter = () => {
    return (
      <div className="fixed-bottom"
         style={{justifyContent:'center',
            background: 'none repeat scroll 0 0 grey',
            opacity: '50%',
            position: 'fixed',
            bottom: '0px',
            alignItems: 'center',
            width: '100%'
            }}>
        <h6
          style={{background: 'transparent',
          padding: '7px',
          margin: 'auto',
          opacity: '100%',
          width: '245px'}}>Copyright &copy; 2020 BoomerBeats</h6>
      </div>

    );
}

export default BottomFooter;
