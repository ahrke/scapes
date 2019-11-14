import React from 'react';

const UserLogout = ({ user }) => {
  if (user) {
    return (
      <div className='logout_container'>
        <h4>{user.username}</h4>
        <h4>logout</h4>
      </div>
    )
  }

  return null;
}

export default UserLogout;