import React from 'react';
import { Link } from 'react-router-dom';

import { IoIosAddCircle } from 'react-icons/io';

const UserLogout = ({ user, logout }) => {
  if (user) {
    return (
      <div className='logout_container'>
        <Link to='/articles/new'><IoIosAddCircle size='1.5em' color='#55ae95' /></Link>
        <h4>{user.username}</h4>
        <h4 onClick={e => { logout() }}>logout</h4>
      </div>
    )
  }

  return null;
}

export default UserLogout;