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
      console.log(err);
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
      console.log(err);
    });
};
