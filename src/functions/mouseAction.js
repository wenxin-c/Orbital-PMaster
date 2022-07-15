// import Axios from "axios";

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
