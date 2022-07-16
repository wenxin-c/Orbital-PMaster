/**
 * @file: summary.js
 * @author: wenxin
 * 
 * This it to get the input box values.
 * These values are saved in database and also pass around at frontend. 
 * 
 * @param {in} event 
 * @returns event.target.value
 */
export function HandleSummaryInput(event){
    return event.target.value;
}