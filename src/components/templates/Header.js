import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchGetUser, userLogout } from '../../actions/users';

import UserLogin from '../molecules/UserLogin';
import UserLogout from '../molecules/UserLogout';
import './styles.css';

const Header = ({ user, fetchUser, logout }) => {
  useEffect(() => {
    if (!user && localStorage.token) {
      fetchUser()
    }
  }, []);

  return (
    <div className="header_container">
      <Link to='/' style={{ textDecoration: 'none' }}><h2>scapes</h2></Link>
      <div className='header_user_area'>
        <UserLogin user={user} />
        <UserLogout user={user} logout={logout} />
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  user: state.users.user
})

const mapDispatchToProps = dispatch => ({
  fetchUser: () => dispatch(fetchGetUser()),
  logout: () => dispatch(userLogout())
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);