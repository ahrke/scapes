import React from 'react';

const PasswordInput = ({ setPassword }) => {
  return (
    <input type='password' placeholder='...password' onChange={e => setPassword(e.target.value)} />
  )
}

export default PasswordInput;