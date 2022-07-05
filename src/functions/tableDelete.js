// import Axios from 'axios';
const Axios = require('axios').default;

export function TableCostDelete(originalArray, eventParam, itemType, item, date, unitCost, units, totalCost, id){
    const newArray = originalArray.filter((item)=>(item.itemtype!==itemType && item.item!== item && item.totalcost !== totalCost && item.id!==id));
    
    eventParam.preventDefault()
    Axios.post("/deleteCost",{
        itemType:itemType,
        item:item,
        date:date,
        unitCost:unitCost,
        units:units,
        totalCost:totalCost,
        id:id,
    }).then((response)=>{
      console.log(response);
    })

    return newArray;
}

export function TableTaskDelete(originalArray, eventParam, taskName, taskDescription, peopleInvolved, prerequisiteTask, duration, remark, id){
    
  const newArray = originalArray.filter((item)=>(item.tasknamew!==taskName && item.taskdescription!== taskDescription && item.id!==id));
  
  eventParam.preventDefault()
    Axios.post("/deleteTask",{
        taskName : taskName,
        taskDescription : taskDescription,
        peopleInvolved : peopleInvolved,
        prerequisiteTask : prerequisiteTask,
        duration : duration,
        remark : remark,
        id:id,
    }).then((response)=>{
      console.log(response);
    })

    return newArray;
}

export function TableHRDelete(originalArray, eventParam, name, ic, phoneNumber, email, department, role, id){

  const newArray = originalArray.filter((item)=>(item.name!==name && item.ic!==ic && item.id!==id));

    eventParam.preventDefault()
    Axios.post("/deleteHR",{
         name :name,
         ic :ic,
         phoneNumber :phoneNumber,
         email :email,
         department :department,
         role :role,
         id:id,
    }).then((response)=>{
      console.log(response);
    })

    return newArray;
}