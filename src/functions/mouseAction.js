import Axios from "axios";

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
    event.preventDefault()
    Axios.post("http://localhost:5004/addSummary",{
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
    Axios.post("http://localhost:5004/addBudget",{
      budget:budget,
      id:id,
    }).then((response)=>{
      console.log(response);
    })

    return true;
}

export function ClickSaveDuration(event, duration, id){
  event.preventDefault()
    Axios.post("http://localhost:5004/addDuration",{
      duration:duration,
      id:id,
    }).then((response)=>{
      console.log(response);
    })

    return true;
}

export function ClickToAddTable(){
    
}