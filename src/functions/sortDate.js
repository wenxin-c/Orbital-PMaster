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
    for (let i=0; i<arr.length; i++){
        arr[i].duration=new Date(arr[i].duration);
    }
    // const output = arr.map(str => new Date(str));
    let output = arr.sort((a, b) => a.duration - b.duration)
    return output;
}