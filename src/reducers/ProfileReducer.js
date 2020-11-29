import {
  FETCHING_PROFILE_REQUEST,
  FETCHING_PROFILE_SUCCESS,
  FETCHING_PROFILE_FAILURE,
} from "../constants/profileTypes";

const initialState = {
  profile: null,
  isFetching: false,
  errors: "",
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_PROFILE_REQUEST:
      return { ...state, isFetching: true };
    case FETCHING_PROFILE_SUCCESS:
      return { ...state, profile: action.profile, isFetching: false };
    case FETCHING_PROFILE_FAILURE:
      return { ...state, isFetching: false };
    default:
      return state;
  }
};

export default profileReducer;