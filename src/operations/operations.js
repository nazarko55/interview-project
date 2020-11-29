import { itemsHasErrored, itemsIsPending, itemsFetchDataSuccess } from '../actions/actionWeather';

export function itemsFetchData(url) {
  return (dispatch) => {
    dispatch(itemsIsPending(true));

    return fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }

        dispatch(itemsIsPending(false));
        return response;
      })
      .then((response) => response.json())
      .then((items) => dispatch(itemsFetchDataSuccess(items)))
      .catch(() => dispatch(itemsHasErrored(true)));
  };
}