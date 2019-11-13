import React, { useState } from 'react';

import UsernameInput from '../../atoms/UsernameInput';
import PasswordInput from '../../atoms/PasswordInput';
import SubmitButton from '../../atoms/SubmitButton';

import './styles.css';

const LoginForm = ({ loginUser }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="login_container" >
      <h2>Login</h2>
      <form className="login_form">
        <UsernameInput setEmail={setEmail} />
        <PasswordInput setPassword={setPassword} />
        <SubmitButton name='Login' loginUser={loginUser} email={email} password={password} />
      </form>
    </div>
  )
}

export default LoginForm;