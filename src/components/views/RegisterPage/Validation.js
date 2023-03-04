export function isValidName(value) {
  const NameRegex = /^[a-z ,.'-]+$/i;
  if (NameRegex.test(value)) {
    return true
  } else {
    return false
  }
}


export function isValidMobile(value) {
  const MobilrRegex = /^[6-9]\d{9}$/;
  if (MobilrRegex.test(value)) {
    return true
  } else {
    return false
  }
}

export function isValidEmail(value) {
  const validate = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
  if (validate.test(value)) {
    return true
  } else {
    return false
  }
}

export function isValidPassword(value) {
  const validate =  /^(?=(.*[a-z]))(?=(.*[A-Z]))(?=(.*[0-9]))(?=(.*[!@#$%^&*()\-__+.])).{8,}$/
  if (validate.test(value)) {
    return true
  } else {
    return false
  }
}
export function isValidLogin(value) {
  if (value.length == 0) {
    return true;
  }
}