/**
 * @file: sortDate.js
 * @author: wenxin
 * 
 * Sort all task content in array in chronological order based on date. 
 * 
 * @param {in} arr 
 * @returns output, a new array with items arranged in chronological order
 */

export function SortDate(arr){
    // const output = arr.map(str => new Date(str));
    let output = arr.sort((a, b) => a.duration - b.duration)
    return output;
}