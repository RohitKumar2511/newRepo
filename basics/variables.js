const empId =  00651207720
let empMail = "abc@rohit.com"
var empPswd = "Pass@123"
empCity = "Delhi"

// empId = 234      TypeError: Assignment to constant variable.


console.log(empId);

//printing amultiple variables at a time
console.table([empId, empMail, empPswd, empCity])


/* var should be preferred less, can use let instead