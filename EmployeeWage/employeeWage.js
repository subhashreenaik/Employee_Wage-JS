
// UC:2
const IS_ABSENT=0;
const IS_PRESENT=1;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20

let empCheck = Math.floor(Math.random()*10)%2;
let empSalary = Math.floor((Math.random() * 10) % 3);
if(empCheck == IS_ABSENT){
    console.log("Employee is absent");   
}
else{
    console.log("Employee is present")
}

//Switch case to calculate wage according to random values generated
function calculate(empSalary){
switch(empSalary) {
    case 0:
        console.log("Employee wage is 0");
        break;

    case 1:
        console.log("Employee wage is " + (PART_TIME_HOURS * WAGE_PER_HOUR));
        break;

    case 2:
        console.log("Employee wage is " + (FULL_TIME_HOURS * WAGE_PER_HOUR));
        break;
}
}
console.log(calculate(empSalary));

