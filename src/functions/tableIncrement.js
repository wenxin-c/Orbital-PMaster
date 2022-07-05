// import Axios from "axios";
const Axios = require('axios').default;

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

    eventParam.preventDefault()
    Axios.post("/addCost",{
      itemType:typeParam,
      item:nameParam,
      data:dateParam,
      unitCost:unitCostParam,
      units:unitsParam,
      totalCost:totalCostParam,
      id:id,
    }).then((response)=>{
      console.log(response);
    })

    return newCost;
  }

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

