import {
  INIT_VAL,
  COMPLETE_AUTH,
  TOGGLE_ALERT,
  TOGGLE_CONFIRM,
  TOGGLE_SPINNER,
  CHANGE_ROUTE
} from "../actions/appState";

import {SUBMIT_LOGIN, VERIFIED_USER} from "../actions/userState";

const initialState = {
  authDone: false,
  showSpinner: false,
  showAlert: false,
  showConfirm: false,
  currentRoute: "/",
  activeForm: "loginForm"
}

export function appState(state = initialState, action) {
  switch(action.type) {

    case INIT_VAL:
    return Object.assign({}, state, {
      initData: action.data
    });
     break;

     case SUBMIT_LOGIN:
     return Object.assign({}, state, {
       showSpinner: true
     });
      break;

    case VERIFIED_USER:
      return Object.assign({}, state, {
        showSpinner: false
      });
      break;

    case COMPLETE_AUTH:
      return Object.assign({}, state, {
        authDone: true
      });
      break;

    case CHANGE_ROUTE:
      // action.history.push(action.url);
      return Object.assign({}, state, {
        currentRoute: action.url,
        activeForm: action.formName ? action.formName : state.activeForm
      })

    default:
      return state;
  }
}
