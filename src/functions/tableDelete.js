import Axios from 'axios';

export function TableCostDelete(eventParam, itemType, item, date, unitCost, units, totalCost){
    eventParam.preventDefault()
    Axios.post("http://localhost:5004/deleteCost",{
        itemType:itemType,
        item:item,
        date:date,
        unitCost:unitCost,
        units:units,
        totalCost:totalCost,
    }).then((response)=>{
      console.log(response);
    })
}

export function TableTaskDelete(eventParam, taskName, taskDescription, peopleInvolved, prerequisiteTask, duration, remark){
    eventParam.preventDefault()
    Axios.post("http://localhost:5004/deleteTask",{
        taskName : taskName,
        taskDescription : taskDescription,
        peopleInvolved : peopleInvolved,
        prerequisiteTask : prerequisiteTask,
        duration : duration,
        remark : remark,
    }).then((response)=>{
      console.log(response);
    })
}

export function TableHRDelete(eventParam, name, ic, phoneNumber, email, department, role){
    eventParam.preventDefault()
    Axios.post("http://localhost:5004/deleteHR",{
         name :name,
         ic :ic,
         phoneNumber :phoneNumber,
         email :email,
         department :department,
         role :role,
    }).then((response)=>{
      console.log(response);
    })
}