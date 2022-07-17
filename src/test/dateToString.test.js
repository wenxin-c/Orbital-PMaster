import { DateToString } from "../functions/dateToString";

test ('convert date object to string', ()=>{
    expect (DateToString([{duration:new Date('2019-03-05') }, {duration:new Date('2020-03-05')}, {duration:new Date('2022-01-01')}])).toStrictEqual([{duration:"Tue Mar 05 2019 08:00:00 GMT+0800 (China Standard Time)" }, {duration:"Thu Mar 05 2020 08:00:00 GMT+0800 (China Standard Time)"}, {duration:"Sat Jan 01 2022 08:00:00 GMT+0800 (China Standard Time)"}])
})