import React from 'react';
import { Link } from 'react-router-dom'

const UserLogin = ({user}) => {
  if (!user) {
    return (
      <Link to='/login'>
        <h4>login</h4>
      </Link>
    )
  }

  return null
}

export default UserLogin;