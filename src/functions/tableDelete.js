// import Axios from 'axios';
const Axios = require('axios').default;

/**
 * @file: tableDelete.js
 * @author: wenxin
 * 
 * To delete selected items in cost table. 
 * Upon clicking on delete icon, a backend post request api with route /deleteCost is called. 
 * Selected data will be passed to backend and corresponding items will be deleted in database. 
 * 
 * React state will be updated with selected items being daleted at frontend. 
 * The resulted frontend new array is returned for display. 
 * 
 * @param {in} originalArray 
 * @param {in} eventParam 
 * @param {in} itemType 
 * @param {in} item 
 * @param {in} date 
 * @param {in} unitCost 
 * @param {in} units 
 * @param {in} totalCost 
 * @param {in} id 
 * @returns newArray, a new array with selected items being deleted. 
 */

export function TableCostDelete(originalArray, eventParam, itemType, item, date, unitCost, units, totalCost, id){
    const newArray = originalArray.filter((item)=>(item.itemtype!==itemType && item.item!== item && item.totalcost !== totalCost && item.id!==id));
    
    sessionStorage.setItem('costTable', JSON.stringify(newArray));

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


/**
 * @file: tableDelete.js
 * @author: wenxin
 * 
 * To delete selected items in task table. 
 * Upon clicking on delete icon, a backend post request api with route /deleteTask is called. 
 * Selected data will be passed to backend and corresponding items will be deleted in database. 
 * 
 * React state will be updated with selected items being daleted at frontend. 
 * The resulted frontend new array is returned for display. 
 * 
 * @param {in} originalArray 
 * @param {in} eventParam 
 * @param {in} taskName 
 * @param {in} taskDescription 
 * @param {in} peopleInvolved 
 * @param {in} prerequisiteTask 
 * @param {in} duration 
 * @param {in} remark 
 * @param {in} id 
 * @returns newArray, a new array with selected items being deleted. 
 */

export function TableTaskDelete(originalArray, eventParam, taskName, taskDescription, peopleInvolved, prerequisiteTask, duration, remark, id){
    
  const newArray = originalArray.filter((item)=>(item.tasknamew!==taskName && item.taskdescription!== taskDescription && item.id!==id));
  
  sessionStorage.setItem('taskData', JSON.stringify(newArray));

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

/**
 * @file: tableDelete.js
 * @author: wenxin
 * 
 * To delete selected items in hr table. 
 * Upon clicking on delete icon, a backend post request api with route /deleteHR is called. 
 * Selected data will be passed to backend and corresponding items will be deleted in database. 
 * 
 * React state will be updated with selected items being daleted at frontend. 
 * The resulted frontend new array is returned for display. 
 * 
 * @param {in} originalArray 
 * @param {in} eventParam 
 * @param {in} name 
 * @param {in} ic 
 * @param {in} phoneNumber 
 * @param {in} email 
 * @param {in} department 
 * @param {in} role 
 * @param {in} id 
 * @returns newArray, a new array with selected items being deleted. 
 */

export function TableHRDelete(originalArray, eventParam, name, ic, phoneNumber, email, department, role, id){

  const newArray = originalArray.filter((item)=>(item.name!==name && item.ic!==ic && item.id!==id));

  sessionStorage.setItem('hrData', JSON.stringify(newArray));

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