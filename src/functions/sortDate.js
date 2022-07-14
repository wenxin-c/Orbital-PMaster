export function SortDate(arr){
    // const output = arr.map(str => new Date(str));
    let output = arr.sort((a, b) => a.duration - b.duration)
    return output;
}