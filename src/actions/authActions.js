import axios from "axios";
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
} from "../constants/authTypes";

import { API } from "../constants/api";
import errors from "../constants/errors";

export const signIn = (credentials, cb) => dispatch => {
  dispatch({ type: LOGIN_REQUEST });
  axios
    .post(`${API}/validate`, credentials)
    .then(({ data }) => {
      if (data.status === "err") {
        let message = errors[data.message];
        dispatch({ type: LOGIN_FAILURE, message });
        return;
      }
      dispatch({ type: LOGIN_SUCCESS, user: data.data });
      cb();
    })
    .catch(err => {
      dispatch({ type: LOGIN_FAILURE });
      console.log(err);
    });
};

export const signOut = () => dispatch => {
  dispatch({ type: LOGOUT });
};