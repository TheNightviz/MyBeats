import React from 'react'

const BottomFooter = () => {
    return (
      <div className="bottom-footer"
         style={{justifyContent:'center',
            background: 'none repeat scroll 0 0 grey',
            opacity: '50%',
            bottom: '0',
            position: 'fixed',
            alignItems: 'center',
            width: '100%'
            }}>
      <h6
         style={{background: 'none repear scroll 0 0 transparent',
         height: '30px',
         padding: '7px',
         margin: 'auto',
         opacity: '100%',
         width: '245px'}}>Copyright &copy; 2020 BoomerBeats</h6>
      </div>

    );
}
export default BottomFooter;
