export function TableDelete(originalArray, name){
    const newArray = originalArray.filter((item)=>item.name!==name);
    return newArray;
}