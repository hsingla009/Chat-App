import * as actionTypes from "../action/actionTypes";
const initialState = {
  user: JSON.parse(localStorage.getItem("user")) || {},
  token: localStorage.getItem("token") || "",
  isLoggedIn: localStorage.getItem("user") ? true : false,
  errorMessage: "",
};
const authReducer = (state = initialState, action) => {
  // const { type, payload } = action;
  switch (action.type) {
    case actionTypes.AUTH_ERROR:
      return {
        ...state,
        errorMessage: action.errorMessage,
      };
    case actionTypes.LOGIN:
      return {
        ...state,
        user: action.payload,
        token: action.payload.token,
        isLoggedIn: true,
      };
    case actionTypes.REGISTER:
      return {
        ...state,
        user: action.payload,
        token: action.payload.token,
        isLoggedIn: true,
      };
    case actionTypes.LOGOUT:
      return {
        user: {},
        token: "",
        isLoggedIn: false,
      };
    default:
      return state;
  }
};

export default authReducer;
