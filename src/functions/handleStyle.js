export function HandleFontWeight(status,item){
    if(status===item){
      return 'bold';
    }else{
      return 'normal';
    }
}

export function HandleClickControlDisplay(status){
  if(status==='none'){
    return 'inline-block';
  }else{
    return 'none';
  }
}