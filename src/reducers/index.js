import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'
import { appState as app } from "./appState";
import {userState as user} from "./userState";
import {orderState as order} from "./orderState";

const pgApp = combineReducers({
  app,
  user,
  order,
  form: formReducer
})

export default pgApp
