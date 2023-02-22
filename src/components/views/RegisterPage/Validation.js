
  export function isValidMobile(value) {
    const MobilrRegex = /^[6-9]\d{9}$/ ;
    if(MobilrRegex.test(value)){
        return true
     } else{
            return false
        }
    }

  export function isValidEmail(value) {
    const validate = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
           if(validate.test(value)){
            return true
           }else{
            return false
           }
  }
  
  export function isValidPassword(value) {
    const validate =  /^(?=(.*[a-z]))(?=(.*[A-Z]))(?=(.*[0-9]))(?=(.*[!@#$%^&*()\-__+.])).{8,}$/
     if(validate.test(value)){
      return true
     }else{
      return false
     }
  }
  export function isValidLogin(value) {
    if (value.length == 0) {
      return true;
    }
  }