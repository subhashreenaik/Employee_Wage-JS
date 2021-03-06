

const IS_ABSENT=0;
const IS_PRESENT=1;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
const NUM_OF_WORKING_DAYS = 20;

let employeeHour=0;
let totalEmpHours = 0;
let empCheck = Math.floor(Math.random()*10)%2;
let empSalary = Math.floor((Math.random() * 10) % 3);
if(empCheck == IS_ABSENT){
    console.log("Employee is absent");   
}
else{
    console.log("Employee is present")
}


function getWorkingHours(empSalary){
    switch(empSalary) {
        case 0:
            return 0;

        case 1:
            return PART_TIME_HOURS;
    
        case 2:
            return FULL_TIME_HOURS;
    }
}

empHours = getWorkingHours(empSalary);



//UC4
for (let day = 0; day < NUM_OF_WORKING_DAYS; day++){
    let empSalary = Math.floor((Math.random() * 10) % 3);
    totalEmpHours += getWorkingHours(empSalary);
}


let empWage = totalEmpHours * WAGE_PER_HOUR;
console.log("Employee worked for " + totalEmpHours + " hours and wage is $" + empWage);
