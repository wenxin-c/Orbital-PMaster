const Axios = require('axios').default;

/**
 * @file: tableIncrement.js
 * @author: wenxin
 * 
 * To add new items into cost table. 
 * Upon clicking on save button, a backend post request api with route /addCost is called. 
 * Input data is passed to backend and inserted into database. 
 * 
 * React state is updated with the new item being inserted into the current state array at frontend. 
 * This new array is returned for display. 
 * 
 * @param {in} tableCostContent 
 * @param {in} eventParam 
 * @param {in} typeParam 
 * @param {in} nameParam 
 * @param {in} dateParam 
 * @param {in} unitCostParam 
 * @param {in} unitsParam 
 * @param {in} totalCostParam 
 * @param {in} id 
 * @returns newCost, a new array with input items being added
 */

export function TableCostIncrement( tableCostContent, eventParam, typeParam, nameParam, dateParam, unitCostParam, unitsParam, totalCostParam, id){
    const newCost = [...tableCostContent,
    {
      type:typeParam,
      name:nameParam,
      date:dateParam,
      unitCost:unitCostParam,
      units:unitsParam,
      totalCost:totalCostParam,
      
    }];

    sessionStorage.setItem('costTable', JSON.stringify(newCost));
    
    eventParam.preventDefault()
    Axios.post("/addCost",{
      itemType:typeParam,
      item:nameParam,
      date:dateParam,
      unitCost:unitCostParam,
      units:unitsParam,
      totalCost:totalCostParam,
      id:id,
    }).then((response)=>{
      console.log(response);
    })

    return newCost;
  }

  /**
   * @file: tableIncrement.js
   * @author: wenxin
   * 
   * To add new items into task table. 
   * Upon clicking on save button, a backend post request api with route /addTask is called. 
   * Input data is passed to backend and inserted into database. 
   * 
   * React state is updated with the new item being inserted into the current state array at frontend. 
   * This new array is returned for display. 
   * 
   * @param {in} tableTimeContent 
   * @param {in} eventParam 
   * @param {in} nameParam 
   * @param {in} descriptionParam 
   * @param {in} memberParam 
   * @param {in} preParam 
   * @param {in} durationParam 
   * @param {in} remarkParam 
   * @param {in} id 
   * @returns newCost, a new array with input items being added
   */
  export function TableTaskIncrement(tableTimeContent, eventParam, nameParam,descriptionParam,memberParam,preParam,durationParam,remarkParam, id){
    const newTask = [...tableTimeContent,
      {
        name:nameParam,
        description:descriptionParam,
        people:memberParam,
        prerequisite:preParam,
        duration:durationParam,
        remark:remarkParam,
      }];

      sessionStorage.setItem('taskData', JSON.stringify(newTask));
      eventParam.preventDefault()
      Axios.post("/addTask",{
      taskName:nameParam,
      taskDescription:descriptionParam,
      peopleInvolved:memberParam,
      prerequisiteTask:preParam,
      duration:durationParam,
      remark:remarkParam,
      id:id,
    }).then((response)=>{
      console.log(response);
    })

      return newTask;
  }

  /**
   * @file: tableIncrement.js
   * @author: wenxin
   * 
   * To add new items into hgr table. 
   * Upon clicking on save button, a backend post request api with route /addHR is called. 
   * Input data is passed to backend and inserted into database. 
   * 
   * React state is updated with the new item being inserted into the current state array at frontend. 
   * This new array is returned for display. 
   * 
   * @param {in} tableHRContent 
   * @param {in} eventParam 
   * @param {in} nameParam 
   * @param {in} icParam 
   * @param {in} phoneParam 
   * @param {in} emailParam 
   * @param {in} departmentParam 
   * @param {in} roleParam 
   * @param {in} id 
   * @returns newCost, a new array with input items being added
   */
  export function TablePersonIncrement(tableHRContent,  eventParam, nameParam, icParam, phoneParam, emailParam, departmentParam, roleParam, id){
    const newPerson = [...tableHRContent,
      {
        name:nameParam,
        ic:icParam,
        phone:phoneParam,
        email:emailParam,
        department:departmentParam,
        role:roleParam
      }]

      sessionStorage.setItem('hrData', JSON.stringify(newPerson));

      eventParam.preventDefault()
      Axios.post("/addHR",{
      name:nameParam,
      ic:icParam,
      phoneNumber:phoneParam,
      email:emailParam,
      department:departmentParam,
      role:roleParam,
      id:id,
    }).then((response)=>{
      console.log(response);
    })

    return newPerson;
  }

