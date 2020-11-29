import {
  FETCHING_ALLNEWS_REQUEST,
  FETCHING_ALLNEWS_SUCCESS,
  FETCHING_ALLNEWS_FAILURE,
} from "../constants/newsTypes";

const initialState = {
  news: [],
  isFetching: false,
  errors: "",
};

const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_ALLNEWS_REQUEST:
      return { ...state, isFetching: true };
    case FETCHING_ALLNEWS_SUCCESS:
      return { ...state, news: action.news, isFetching: false };
    case FETCHING_ALLNEWS_FAILURE:
      return { ...state, isFetching: false };
    default:
      return state;
  }
};

export default newsReducer;