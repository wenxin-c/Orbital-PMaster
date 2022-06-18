
export function TableCostIncrement(tableCostContent, typeParam, nameParam, dateParam, unitCostParam, unitsParam, totalCostParam){
    const newCost = [...tableCostContent,
    {
      type:typeParam,
      name:nameParam,
      date:dateParam,
      unitCost:unitCostParam,
      units:unitsParam,
      totalCost:totalCostParam,
      
    }];
    return newCost;
  }

  export function TableTaskIncrement(tableTimeContent, nameParam,descriptionParam,durationParam,preParam,memberParam,remarkParam){
    const newTask = [...tableTimeContent,
      {
        name:nameParam,
        description:descriptionParam,
        people:memberParam,
        prerequisite:preParam,
        duration:durationParam,
        remark:remarkParam,
      }];
      return newTask;
  }

  export function TablePersonIncrement(tableHRContent, nameParam, icParam, phoneParam, emailParam, departmentParam, roleParam){
    const newPerson = [...tableHRContent,
      {
        name:nameParam,
        ic:icParam,
        phone:phoneParam,
        email:emailParam,
        department:departmentParam,
        role:roleParam
      }]
    return newPerson;
  }

