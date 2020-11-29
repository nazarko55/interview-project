import types from '../constants/weatherTypes';

export const itemsHasErrored = bool => {
  return {
    type: types.GET_WEATHER_FAILURE,
    hasErrored: bool
  };
}

export const itemsIsPending = bool => {
  return {
    type: types.GET_WEATHER_PENDING,
    isLoading: bool
  };
}

export const itemsFetchDataSuccess = items => {
  return {
    type: types.GET_WEATHER_SUCCESS,
    items
  };
}

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