const Axios = require('axios').default;


export function MouseUp(){
    return null;
}
export function MouseDown(item){
    return item;
}
export function ClickEdit(){
    return false;
}

/**
 * @file:mouseAction.js
 * @author: wenxin
 * 
 * Upon click on save button at summary section, a backend post request api with route /addSummary is called.
 * Pass the input data and id to backend server which will then be inserted into database. 
 * 
 * @param {in} event 
 * @param {in} content1 
 * @param {in} content2 
 * @param {in} content3 
 * @param {in} content4 
 * @param {in} id 
 * @returns true; 
 */
export function ClickSave(event, content1, content2, content3, content4, id){
    event.preventDefault();
    Axios.post("/addSummary",{
      issue:content1,
      solution:content2,
      stakeholers:content3,
      outcome:content4,
      id:id,
    }).then((response)=>{
      console.log(response);
    })

    return true;
}

/**
 * @file: mouseAction.js
 * @author: wenxin
 * 
 * Upon click on the save button at budget section, a backend post request api with route /addBudget is called.
 * Pass input data to backend which will then be inserted intop database. 
 * 
 * @param {in} event 
 * @param {in} budget 
 * @param {in} id 
 * @returns true;
 */
export function ClickSaveBudget(event, budget, id){
  event.preventDefault()
    Axios.post("/addBudget",{
      budget:budget,
      id:id,
    }).then((response)=>{
      console.log(response);
    })

    return true;
}

/**
 * @file:mouseAction.js
 * @author: wenxin
 * 
 * Upon clicking on the save button at duration section, a backend post request api with route /addDuration is called. 
 * Pass input data to backend which will then be inserted into database. 
 * 
 * @param {in} event 
 * @param {in} duration 
 * @param {in} id 
 * @returns true;
 */
export function ClickSaveDuration(event, duration, id){
  event.preventDefault()
    Axios.post("/addDuration",{
      duration:duration,
      id:id,
    }).then((response)=>{
      console.log(response);
    })

    return true;
}
