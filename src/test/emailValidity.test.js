import { EmailValidity } from "../functions/validityCheck";

test('checking the validity of input email', ()=>{
    expect(EmailValidity('123')).toBe(false);
})