import * as actionTypes from "../action/actionTypes";
const initialState = {
  user: {},
  token: "",
  isLoggedIn: false,
};
const authReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case actionTypes.LOGIN:
      return {
        ...state,
        user: payload,
        token: payload.token,
        isLoggedIn: true,
      };
    case actionTypes.REGISTER:
      return {
        ...state,
        user: payload,
        token: payload.token,
        isLoggedIn: true,
      };
    default:
      return state;
  }
};

export default authReducer;
