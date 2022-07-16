/**
 * @file: handleStyle.js
 * @author wenxin
 * 
 * This is to create the frontend effect.
 * When mouse is on hover, font weight becomes bold. 
 * Otherwise, font weight is normal. 
 * 
 * @param {in} status 
 * @param {in} item 
 * @returns return bold mouse on hover and return normal when mouse is not on hover
 */

export function HandleFontWeight(status,item){
    if(status===item){
      return 'bold';
    }else{
      return 'normal';
    }
}

/**
 * @file:handleStyle.js
 * @author: wenxin
 * 
 * This is control the display of react component. 
 * Alternate between display and not display on click. 
 * 
 * @param {in} status 
 * @returns return 'inline-block'/'none'
 */
export function HandleClickControlDisplay(status){
  if(status==='none'){
    return 'inline-block';
  }else{
    return 'none';
  }
}