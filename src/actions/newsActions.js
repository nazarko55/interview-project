import axios from "axios";
import {
  FETCHING_ALLNEWS_REQUEST,
  FETCHING_ALLNEWS_SUCCESS,
  FETCHING_ALLNEWS_FAILURE,
} from "../constants/newsTypes";

import { API } from "../constants/api";

export const getAllNews = () => dispatch => {
  dispatch({ type: FETCHING_ALLNEWS_REQUEST });
  axios
    .get(`${API}/news`)
    .then(({ data }) => {
      dispatch({ type: FETCHING_ALLNEWS_SUCCESS, news: data.data });
    })
    .catch(err => {
      dispatch({ type: FETCHING_ALLNEWS_FAILURE, err });
    });
};