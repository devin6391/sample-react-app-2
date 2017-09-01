const loginUrl = "http://localhost:3002/auth";
const otpUrl = "http://localhost:3002/auth";

export const fetchLogin = data => {
  let headerObj = formHeaders({});
  let reqObj = formRequest({
    headers: headerObj,
    body: data
  });
  return fetchUrl(loginUrl, reqObj)
}

export const fetchOtp = data => {
  let headerObj = formHeaders({});
  let reqObj = formRequest({
    headers: headerObj,
    body: data
  });
  return fetchUrl(otpUrl, reqObj);
}

const fetchUrl = (url, req) => {
  return fetch(url, req)
}

const formRequest = (myReqObj) => {
  let defaultReqObj = {
    method: "GET",
    mode: "cors",
    cache: "default"
  }
  let newReqObj = Object.assign(defaultReqObj, myReqObj);
  return newReqObj;
}

const formHeaders = (myHeader) => {
  let defaultHeaders = {
    "Content-Type": "Application/json"
  }
  let newHeader = Object.assign(defaultHeaders, myHeader);
  return newHeader;
}
