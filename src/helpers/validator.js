export const validateLoginForm = values => {
  const errors = {}
  // if (!values.email) {
  // 	errors.email = 'Required'
  // } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
  // 	errors.email = 'Invalid email address'
  // }
  if (checkPhone(values.phone)) {
    errors.phone = checkPhone(values.phone);
  }
  return errors
}

export const validateSignupForm = values => {
  const errors = {}
  if (chekFirstName(values.firstName)) {
    errors.firstName = chekFirstName(values.firstName);
  } else if (isRequired(values.lastName)) {
    errors.lastName = isRequired(values.lastName);
  }
  return errors
}

export const validateOtpForm = values => {
  const errors = {}
  if (checkOtpo(values.digit1)) {
    errors.digit1 = checkOtpo(values.digit1);
  }
  if (checkOtpo(values.digit2)) {
    errors.digit2 = checkOtpo(values.digit2);
  }
  if (checkOtpo(values.digit3)) {
    errors.digit3 = checkOtpo(values.digit3);
  }
  if (checkOtpo(values.digit4)) {
    errors.digit4 = checkOtpo(values.digit4);
  }
  if (checkOtpo(values.digit5)) {
    errors.digit5 = checkOtpo(values.digit5);
  }
  if (checkOtpo(values.digit6)) {
    errors.digit6 = checkOtpo(values.digit6);
  }
  return errors;
}

const isRequired = (text, errors) => {
  let error = ""
  if (!text) {
    error = "Required"
  }
  if (error) {
    return error;
  }
  return null;
}

const checkOtpo = (otp, errors) => {
  let error = ""
  if (!otp) {
    error = "Please enter 6 digit OTP"
  }
  if (error) {
    return error
  }
  return null;
}

const checkPhone = (phoneNumber, errors) => {
  let error = ""
  if (!phoneNumber) {
    error = 'Required'
  } else if (!/^(0|[1-9][0-9]{9})$/i.test(phoneNumber)) {
    error = 'Please enter a valid 10-digit number to continue'
  }
  if (error) {
    return error;
  }
  return null;
}

const chekFirstName = (fname, errors) => {
  let error = ""
  if (!fname) {
    error = "Required"
  } else if (fname.length < 2) {
    error = "Minimum 2 Letters for First Name required"
  }
  if (error) {
    return error;
  }
  return null;
}
