const SET_USER = 'SET_USER';

export const users = (state = {}, action) => {
  switch (action.type) {
    case SET_USER:
      return Object.assign({}, state, {['user']: action.user});
    default:
      return state;
  }
}

export const usersConstants = {
  SET_USER
}