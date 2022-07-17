import { PasswordValidity } from "../functions/validityCheck";

test('checking the complexity of password',()=>{
    expect (PasswordValidity('12345678')).toBe(false);
})
