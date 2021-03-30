import * as actionType from "./actionType";
import axios from "axios";

export const authStart = () => {
  return {
    type: actionType.AUTH_START,
  };
};

export const authSuccess = (token) => {
  return {
    type: actionType.AUTH_SUCESS,
    token: token,
  };
};

export const authFail = (error) => {
  return {
    type: actionType.AUTH_FAIL,
    error: error,
  };
};

export const authLogin = (email, password) => {
  return (dispatch) => {
    dispatch(authStart());
    axios
      .post("http://127.0.0.1:8000/api/gettoken/", {
        email: email,
        password: password,
      })
      .then((res) => {
        const token = res.data.access;
        localStorage.setItem("token", token);
        dispatch(authSuccess(token));
      })
      .catch((error) => {
        dispatch(authFail(error));
      });
  };
};

export const logout = () => {
  localStorage.removeItem("token");
  return {
    type: actionType.AUTH_LOGOUT,
  };
};

export const authSignUp = (email, password) => {
  return (dispatch) => {
    dispatch(authStart());
    axios
      .post("http://127.0.0.1:8000/api/register/", {
        username: username,
        password: password,
      })
      .then((res) => {
        const token = res.data.access;
        localStorage.setItem("token", token);
        dispatch(authSuccess(token));
      })
      .catch((error) => {
        dispatch(authFail(error));
      });
  };
};

export const authCheckState = () => {
  return (dispatch = () => {
    const token = localStorage.getItem("token");
    if (token === undefined) {
      dispatch(logout());
    }
  });
};
