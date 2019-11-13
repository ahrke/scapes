import React from 'react';

const SubmitButton = ({ name, loginUser, email, password }) => {
  return (
    <button onClick={e => {
      e.preventDefault();
      loginUser(email, password);} 
    } >
      {name}
    </button>
  )
}

export default SubmitButton;