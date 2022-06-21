import Axios from "axios";

export function TableCostIncrement( eventParam, typeParam, nameParam, dateParam, unitCostParam, unitsParam, totalCostParam){
    // const newCost = [...tableCostContent,
    // {
    //   type:typeParam,
    //   name:nameParam,
    //   date:dateParam,
    //   unitCost:unitCostParam,
    //   units:unitsParam,
    //   totalCost:totalCostParam,
      
    // }];

    eventParam.preventDefault()
    Axios.post("http://localhost:5004/addCost",{
      itemType:typeParam,
      item:nameParam,
      data:dateParam,
      unitCost:unitCostParam,
      units:unitsParam,
      totalCost:totalCostParam,
    }).then((response)=>{
      console.log(response);
    })

    // return newCost;
  }

  export function TableTaskIncrement( eventParam, nameParam,descriptionParam,memberParam,preParam,durationParam,remarkParam){
    // const newTask = [...tableTimeContent,
    //   {
    //     name:nameParam,
    //     description:descriptionParam,
    //     people:memberParam,
    //     prerequisite:preParam,
    //     duration:durationParam,
    //     remark:remarkParam,
    //   }];

      eventParam.preventDefault()
      Axios.post("http://localhost:5004/addTask",{
      taskName:nameParam,
      taskDescription:descriptionParam,
      peopleInvolved:memberParam,
      prerequisiteTask:preParam,
      duration:durationParam,
      remark:remarkParam,
    }).then((response)=>{
      console.log(response);
    })

      // return newTask;
  }

  export function TablePersonIncrement( eventParam, nameParam, icParam, phoneParam, emailParam, departmentParam, roleParam){
    // const newPerson = [...tableHRContent,
    //   {
    //     name:nameParam,
    //     ic:icParam,
    //     phone:phoneParam,
    //     email:emailParam,
    //     department:departmentParam,
    //     role:roleParam
    //   }]

      eventParam.preventDefault()
      Axios.post("http://localhost:5004/addHR",{
      name:nameParam,
      ic:icParam,
      phoneNumber:phoneParam,
      email:emailParam,
      department:departmentParam,
      role:roleParam,
    }).then((response)=>{
      console.log(response);
    })

    // return newPerson;
  }

