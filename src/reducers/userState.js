import {
  SET_MOBILE_NUMBER,
  SUBMIT_LOGIN,
  VERIFIED_USER
} from "../actions/userState";

const initialState = {
  mobileNumber: null,
  authToken: null,
  refreshToken: null,
  loginInitiated: false,
  userVerifiedSuccess: false,
  userVerifiedFail: false
}

export function userState(state = initialState, action) {
  switch (action.type) {
    case SET_MOBILE_NUMBER:
      return Object.assign({}, state, {
        mobileNumber: action.number
      });
      break;
    case SUBMIT_LOGIN:
      return Object.assign({}, state, {
        loginInitiated: true,
        mobileNumber: action.data.phone
      })
      break;
    case VERIFIED_USER:
      return Object.assign({}, state, {
        loginInitiated: false,
        userVerifiedSuccess: true,
        authToken: action.data.body[0].accessToken,
        refreshToken: action.data.body[0].refreshToken

      })

    default:
      return state;
  }
}
