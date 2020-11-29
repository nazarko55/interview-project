import axios from "axios";
import {
  FETCHING_PROFILE_REQUEST,
  FETCHING_PROFILE_SUCCESS,
  FETCHING_PROFILE_FAILURE,
} from "../constants/profileTypes";

import { API } from "../constants/api";

export const getProfile = id => dispatch => {
  dispatch({ type: FETCHING_PROFILE_REQUEST });
  axios
    .get(`${API}/user-info/${id}`)
    .then(({ data }) => {
      const link = data.data.social[2];
      const filtered = data.data.social.filter(item => item.label !== "web");

      const profile = {
        ...data.data,
        social: [link, ...filtered],
      };

      dispatch({ type: FETCHING_PROFILE_SUCCESS, profile });
    })
    .catch(err => {
      dispatch({ type: FETCHING_PROFILE_FAILURE, err });
    });
};