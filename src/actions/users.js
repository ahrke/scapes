import axios from 'axios';
import { usersConstants as uc } from '../reducers/users';

const setUser = (user) => {
  return {
    type: uc.SET_USER,
    user
  }
}

export const userLogin = (email, password) => dispatch => {
  axios.post('http://localhost:3000/api/users/login', {
    user: {
      email: email,
      password: password
    }
  })
    .then(res => {
      localStorage.setItem("token", res.data.token);
      dispatch(setUser(res.data.user));
    })
    .catch(err => console.error("received ERROR during login:", err));
}

export const fetchGetUser = () => dispatch => {
  if (localStorage.token) {
    axios.get('http://localhost:3000/api/user', {
      headers: {
        Authorization: `Token ${localStorage.token}`
      }
    })
    .then(res => {
      dispatch(setUser(res.data.user));
    })
  }
}