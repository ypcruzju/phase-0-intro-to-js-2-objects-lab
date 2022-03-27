const employee ={["name"]: 'Sam'};


function updateEmployeeWithKeyAndValue(employee,key,value){
    employee["streetAddress"]= '11 Broadway'

    const newEmployee ={...employee}
newEmployee["streetAddress"]= '11 Broadway'

    return employee
}

