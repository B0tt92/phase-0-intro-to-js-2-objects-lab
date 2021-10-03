// Write your solution in this file!
const employee = {
    name:  "aladin",
    streetAddress: "654 esg",
   
  };

function updateEmployeeWithKeyAndValue (employee , key, value) {
  return {
    ...employee,
    [key]: value,
  };

};

function destructivelyUpdateEmployeeWithKeyAndValue(employee , key, value) {

  employee[key] =value;
    return employee;


};

function deleteFromEmployeeByKey(employee ,key) {
  const newEmployee = {...employee}
  delete newEmployee[key];
     return newEmployee;
 

};

function destructivelyDeleteFromEmployeeByKey(employee ,key) {
  delete employee[key];
    return employee;

}
































// function updateEmployeeWithKeyAndValue(employee, key, value) {
//      const newobj = {...employee};
//      newobj[employee,value] = {key,value};
//     return newobj
       
// };
// function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
//     const newobj = (employee, key, value) 
//     return newobj
// };
// function destructivelyDeleteFromEmployeeByKey(employee, key) {
    
// };

