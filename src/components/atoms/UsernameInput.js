import React from 'react';

import './styles.css';

const UsernameInput = ({ setEmail }) => {
  return (
    <input type='text' placeholder='...email' onChange={e => setEmail(e.target.value)} />
  )
}

export default UsernameInput;