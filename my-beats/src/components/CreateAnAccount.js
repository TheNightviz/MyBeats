import React from 'react'
import Registration from './Registration';


const CreateAnAccount = () => {
    return (
      <div>
         <Registration />
      </div>

    );
}

function submitForm() {
  document.getElementById("create-account-form").submit();
}

export default CreateAnAccount;
