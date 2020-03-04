import { types } from '../core/constants';
import * as callApi from '../utils/apiCaller';

export const login = user => ({
    type: types.LOGIN,
    user
  });
  export const loginErr = err => ({
    type: types.LOGIN_ERR,
    err
  });

  export const logout = () => ({
    type: types.LOGOUT
  });

  export const getUser = () => {
    return dispatch => {
      return callApi
        .callApiGetInfo()
        .then(res => {
          dispatch(
            login({
              username: res.data.username
            })
          );
        })
        .catch(err => {
          console.log(err);
          dispatch(
            login({
              username: null
            })
          );
          localStorage.removeItem('usertoken');
        });
    };
  };

  export const logOut = () => {
    return dispatch => {
      localStorage.removeItem('usertoken');
      dispatch(logout());
    };
  };

  export const loginRequest = user => {
    return dispatch => {
      return callApi
        .callApiLogin(user)
        .then(res => {
          console.log(res)
          localStorage.setItem('usertoken', res.data.data[0].token);
          dispatch(login(res.data.data[0]));
        })
        .catch(err => {
          dispatch(loginErr(err.response.data.message));
        });
    };
  };
