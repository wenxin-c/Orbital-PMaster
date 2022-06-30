// import Axios from 'axios';
const Axios = require('axios').default;

export function TableCostDelete(eventParam, itemType, item, date, unitCost, units, totalCost, id){
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
}

export function TableTaskDelete(eventParam, taskName, taskDescription, peopleInvolved, prerequisiteTask, duration, remark, id){
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
}

export function TableHRDelete(eventParam, name, ic, phoneNumber, email, department, role, id){
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
}