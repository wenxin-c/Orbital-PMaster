export function EmailValidity(email) {
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (email.match(validRegex)) {
    
        return true;
    
      } else {
    
        return false;
    
      }

}

export function PasswordValidity(password){
  let check = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})/;
  if (password.match(check)){
    return true;
  }else{
    return false;
  }

}