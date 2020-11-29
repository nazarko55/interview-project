import { combineReducers } from "redux";

import authReducer from "./authReducer";
import newsReducer from "./newsReducer";
import profileReducer from "./profileReducer";
import { items, itemsHasErrored, itemsIsPending } from './weatherReducer';
import { reducer as formReducer } from 'redux-form'

const rootReducer = combineReducers({
  form: formReducer,
  authReducer,
  newsReducer,
  profileReducer,
  items,
  itemsHasErrored,
  itemsIsPending
});

export default rootReducer;