import React from 'react';
import { connect } from 'react-redux';

import { userLogin } from '../actions/users';
import LoginForm from '../components/organisms/forms/LoginForm';


const LoginPage = ({loginUser, user}) => {
  if (user) return (<h2>logged in</h2>);
  
  return (
    <div>
      <LoginForm loginUser={loginUser} />
    </div>
  )  
}

const mapStateToProps = state => ({
  user: state.users.user
});

const mapDispatchToProps = dispatch => ({
  loginUser: (email, pass) => dispatch(userLogin(email, pass))
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);