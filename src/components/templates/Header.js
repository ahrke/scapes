import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchGetUser } from '../../actions/users';

import UserLogin from '../molecules/UserLogin';
import UserLogout from '../molecules/UserLogout';
import './styles.css';

const Header = ({ user, fetchUser }) => {
  useEffect(() => {
    if (localStorage.token) {
      fetchUser()
    }
  }, []);

  return (
    <div className="header_container">
      <h2>scapes</h2>
      <div className='header_user_area'>
        <UserLogin user={user} />
        <UserLogout user={user} />
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  user: state.users.user
})

const mapDispatchToProps = dispatch => ({
  fetchUser: () => dispatch(fetchGetUser())
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);