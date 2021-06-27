import AuthService from "../../services/authService";
import * as actionTypes from "../action/actionTypes";
export const login = (params, history) => (dispatch) => {
  return AuthService.login(params)
    .then((data) => {
      console.log(data);
      dispatch({ type: actionTypes.LOGIN, payload: data });
      history.push("/");
    })
    .catch((err) => {
      console.log(err.response.data.message);
      dispatch({
        type: actionTypes.AUTH_ERROR,
        errorMessage: err.response.data.message,
      });
    });
};

export const register = (params, history) => (dispatch) => {
  return AuthService.register(params)
    .then((data) => {
      console.log(data);
      dispatch({ type: actionTypes.REGISTER, payload: data });
      history.push("/");
    })
    .catch((err) => {
      // console.log(err);
      dispatch({
        type: actionTypes.AUTH_ERROR,
        errorMessage: err.response.data.message,
      });
    });
};

export const logout = () => (dispatch) => {
  AuthService.logout();
  dispatch({ type: actionTypes.LOGOUT });
};
