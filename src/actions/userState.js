import {
  fetchLogin,
  fetchOtp
} from "../helpers/http";
import {
  changeRoute
} from "./appState"
export const SET_MOBILE_NUMBER = "SET_MOBILE_NUMBER"
export const SUBMIT_LOGIN = "SUBMIT_LOGIN"
export const SUBMIT_OTP = "SUBMIT_OTP"
export const VERIFIED_USER = "VERIFIED_USER"

export function setUserMobile(number) {
  return {
    type: SET_MOBILE_NUMBER,
    number
  }
}

export function submitLogin(data, history) {
  return dispatch => {
    dispatch(fetchLoginApi(data));
    fetchLogin(data)
      .then(res => {
        return res.json()
      })
      .then(data => {
        console.log(data);
        dispatch(changeRoute(history, "/otp", "otpForm"));
      })
      .catch(err => console.log(err))
  }
}

export function submitOtp(data) {
  let otp = ""
  for (let key in data) {
    otp += data[key]
  }
  if (otp) {
    data.otp = otp;
  }
  return dispatch => {
    fetchOtp(data)
      .then(res => {
        return res.json()
      })
      .then(data => {
        console.log(data);
        dispatch(verifiedUser(data));
      })
  }
}

function fetchLoginApi(data) {
  return {
    type: SUBMIT_LOGIN,
    data
  }
}


function verifiedUser(data) {
  return {
    type: VERIFIED_USER,
    data
  }
}
