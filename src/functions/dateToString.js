export function DateToString(arr){
    for (let j=0; j<arr.length; j++){
        let dateString = arr[j].duration.toString();
        arr[j].duration=dateString;
    }

    return arr;
}