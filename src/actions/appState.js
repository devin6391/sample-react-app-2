export const COMPLETE_AUTH = "COMPLETE_AUTH"

//alert, confirm and spinner - utils
export const TOGGLE_ALERT = "SHOW_ALERT"
export const TOGGLE_CONFIRM = "SHOW_CONFIRM"
export const TOGGLE_SPINNER = "SHOW_SPINNER"
export const CHANGE_ROUTE = "CHANGE_ROUTE"
export const INIT_VAL = "INIT_VAL"

export function completeAuth() {
  return {
    type: COMPLETE_AUTH
  }
}

export function toggleAlert(msg) {
  return {
    type: TOGGLE_ALERT,
    msg
  }
}

export function toggleConfirm(msg, confirmObj) {
  return {
    type: TOGGLE_CONFIRM,
    confirmObj
  }
}

export function toggleSpinner() {
  return {
    type: TOGGLE_SPINNER
  }
}

export function changeRoute(history, url, formName) {
  history.push(url);
  return {
    type: CHANGE_ROUTE,
    history,
    url,
    formName
  }
}

export function getInitVal(data) {
  return {
    type: INIT_VAL,
    data
  }
}
