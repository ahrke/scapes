const SET_USER = 'SET_USER';
const LOGOUT = 'LOGOUT';

export const users = (state = {}, action) => {
  switch (action.type) {
    case SET_USER:
      return Object.assign({}, state, { user: action.user });
    case LOGOUT:
      return Object.assign({}, state, { user: null });
    default:
      return state;
  }
}

export const usersConstants = {
  SET_USER,
  LOGOUT
}