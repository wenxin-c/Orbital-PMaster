import { TotalCost } from "../functions/totalCost";

test('multiplication test', ()=>{
    expect (TotalCost(1.5, 3)).toBe(4.5);
})