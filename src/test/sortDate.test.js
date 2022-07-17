import {SortDate} from './../functions/sortDate.js'

test('sorting date', ()=>{
    expect(SortDate([{duration:'2022-01-01'}, {duration:'2020-03-05'}, {duration:'2019-03-05'}])).toStrictEqual([{duration:new Date('2019-03-05') }, {duration:new Date('2020-03-05')}, {duration:new Date('2022-01-01')}])
})