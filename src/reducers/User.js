import { types } from '../core/constants';

const initialState = {
  username: null,
  loginErr: null,
};
export default function user(state = initialState, action) {
  switch (action.type) {
    case types.LOGIN: {
      return {
        ...state,
        username: action.user.username,
        loginErr: null,
      };
    }
    
    case types.LOGIN_ERR: {
      return { ...state, loginErr: action.err };
    }
    case types.LOGOUT: {
      return {
        username: null,
        loginErr: null,
      };
    }
    default:
      return state;
  }
}