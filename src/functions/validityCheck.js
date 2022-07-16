/**
 * @file: validityCheck.js
 * @author: wenxin
 * 
 * This is to check the format of user input email for account registration. 
 * 
 * @param {in} email 
 * @returns true/false;
 */
export function EmailValidity(email) {
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (email.match(validRegex)) {
    
        return true;
    
      } else {
    
        return false;
    
      }

}

/**
 * @file: validityCheck.js
 * @author: wenxin
 * 
 * This is to check the complexity of user's password. 
 * 1. The password is at least 8 characters long.
 * 2. The password has at least 1 uppercase letter.
 * 3. The password has as least 1 lowercase letter.
 * 4. The password has at least 1 digit.
 * 5. The password has at least 1 special character. 
 * 
 * @param {in} password 
 * @returns true/false;
 */
export function PasswordValidity(password){
  let check = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})/;
  if (password.match(check)){
    return true;
  }else{
    return false;
  }

}